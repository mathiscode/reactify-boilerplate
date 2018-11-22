const errors = require('restify-errors')
const bcrypt = require('bcryptjs')
const validator = require('validator')

const log = require('../../lib/log')
const auth = require('../../lib/auth')
const User = require('../../models/User')

module.exports = async (req, res, next) => {
  const { current, password, confirm } = req.body

  // Check current password
  try {
    await auth.authenticate(req.user.email, current)
  } catch (err) {
    return next(new errors.InvalidArgumentError(res.__('Current password incorrect')))
  }

  // Validate input
  let validationErrors = []
  if (!validator.isLength(password, { min: 8 })) validationErrors.push(res.__('Password must be at least 8 characters'))
  if (!validator.equals(password, confirm)) validationErrors.push(res.__('Passwords did not match'))

  if (validationErrors.length > 0) return next(new errors.InvalidArgumentError(JSON.stringify(validationErrors)))

  try {
    let user = await User.findOne({ email: req.user.email })

    // Hash password and save user
    bcrypt.genSalt(10, (err, salt) => {
      if (err) throw err
      bcrypt.hash(password, salt, async (err, hash) => {
        if (err) throw err

        user.password = hash
        try {
          await user.save()
          res.send({ success: true, message: res.__('Password successfully updated') })
          log.info(`Updated Password: ${user.email}`)
          next()
        } catch (err) {
          return next(new errors.InternalError(err.message))
        }
      })
    })
  } catch (err) {
    return next(new errors.InternalError(err.message))
  }
}
