const errors = require('restify-errors')
const jwt = require('jsonwebtoken')

const log = require('../../lib/log')
const auth = require('../../lib/auth')

module.exports = async (req, res, next) => {
  const { email, password } = req.body

  try {
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
