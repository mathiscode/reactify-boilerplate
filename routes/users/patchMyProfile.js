const errors = require('restify-errors')

const log = require('../../lib/log')
const User = require('../../models/User')

module.exports = async (req, res, next) => {
  try {
    await User.findOneAndUpdate({ email: req.user.email }, { profile: req.body })
    res.send({ success: true, message: res.__('Profile updated successfully') })
    log.info(`Profile Updated: ${req.user.email}`)
    next()
  } catch (err) {
    log.error(err)
    return next(new errors.InternalError(err.message))
  }
}
