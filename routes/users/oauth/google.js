const errors = require('restify-errors')
const jwt = require('jsonwebtoken')
const { OAuth2Client } = require('google-auth-library')

const log = require('../../../lib/log')
const User = require('../../../models/User')

module.exports = async (req, res, next) => {
  try {
    const { idToken } = req.body
    const client = new OAuth2Client(process.env.GOOGLE_OAUTH_CLIENT_ID)

    const token = await client.verifyIdToken({
      idToken,
      audience: process.env.GOOGLE_OAUTH_CLIENT_ID
    })

    const payload = token.getPayload()

    let userExists = await User.countDocuments({ email: payload.email })
    const action = userExists > 0 ? 'login' : 'signup'

    if (action === 'signup') {
      // Setup new user object
      const user = new User({
        email: payload.email,
        password: Math.random().toString(36) + Math.random().toString(36),
        roles: ['user'],
        options: {
          name: payload.name
        },
        authProviders: {
          linked: true,
          primary: 'google',
          google: {
            enabled: true,
            account: payload.sub
          }
        }
      })

      // Check if user is first user and make admin
      const userCount = await User.countDocuments()
      if (userCount === 0) user.roles.push('admin')

      await user.save()

      const token = jwt.sign(user.toJSON(), process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES || '30m' })
      const { iat, exp } = jwt.decode(token)
      user.password = null

      log.info(`Signup: ${user.email}`)
      res.send(201, {
        success: true,
        message: res.__('User successfully registered'),
        token,
        iat,
        exp,
        user
      })

      return next()
    } else {
      const user = await User.findOne({ email: payload.email })
      user.password = null
      const token = jwt.sign(user.toJSON(), process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES || '30m' })
      const { iat, exp } = jwt.decode(token)

      log.info(`Login: ${user.email}`)
      res.send({ iat, exp, token, user })

      return next()
    }
  } catch (err) {
    log.error(err)
    return next(new errors.InternalError(err.message))
  }
}
