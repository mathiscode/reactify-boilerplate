const errors = require('restify-errors')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const validator = require('validator')

const log = require('../../lib/log')
const User = require('../../models/User')

module.exports = async (req, res, next) => {
  const { email, password, confirm } = req.body

  // Validate input
  let validationErrors = {}
  if (!email || !validator.isEmail(email)) validationErrors.signupEmailError = res.__('Invalid Email Address')
  if (!password || !validator.isLength(password, { min: 8 })) validationErrors.signupPasswordError = res.__('Password must be at least 8 characters')
  if (password !== confirm) validationErrors.signupConfirmPasswordError = res.__('Passwords did not match')

  let userExists = await User.countDocuments({ email })
  if (userExists > 0) validationErrors.signupEmailError = res.__('User already exists with that email address')

  if (Object.keys(validationErrors).length > 0) {
    res.send(400, { success: false, errors: validationErrors })
    return next()
  }

  // Setup new user object
  const user = new User({
    email,
    password,
    roles: ['user']
  })

  // Check if user is first user and make admin
  const userCount = await User.countDocuments()
  if (userCount === 0) user.roles.push('admin')

  // Hash password and save user
  bcrypt.genSalt(10, (err, salt) => {
    if (err) throw err
    bcrypt.hash(user.password, salt, async (err, hash) => {
      if (err) throw err

      user.password = hash
      try {
        await user.save()
        log.info(`Signup: ${user.email}`)
        const token = jwt.sign(user.toJSON(), process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES || '30m' })
        const { iat, exp } = jwt.decode(token)
        user.password = null

        res.send(201, {
          success: true,
          message: res.__('User successfully registered'),
          token,
          iat,
          exp,
          user
        })
        next()
      } catch (err) {
        return next(new errors.InternalError(err.message))
      }
    })
  })
}
