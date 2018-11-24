const errors = require('restify-errors')
const jwt = require('jsonwebtoken')

const log = require('../../lib/log')
const auth = require('../../lib/auth')
const User = require('../../models/User')

module.exports = async (req, res, next) => {
  const { email, password } = req.body

  try {
    // Check if user signed up with an OAuth provider
    const checkOauth = await User.findOne({ email, 'authProviders.linked': true })
    if (checkOauth) throw new Error(`${res.__('You must login with your linked OAuth provider')}: ${checkOauth.authProviders.primary}`)

    const user = await auth.authenticate(email, password, res.__)
    user.password = null
    const token = jwt.sign(user.toJSON(), process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES || '30m' })
    const { iat, exp } = jwt.decode(token)
    res.send({ iat, exp, token, user })
    log.info(`Login: ${user.email}`)
    next()
  } catch (err) {
    return next(new errors.UnauthorizedError(err.message))
  }
}
