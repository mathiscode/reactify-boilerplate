const errors = require('restify-errors')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const validator = require('validator')

const log = require('../config/log')
const auth = require('../lib/auth')
const User = require('../models/User')

module.exports = server => {
  // Login: POST /api/users/login
  server.post('/api/users/login', async (req, res, next) => {
    const { email, password } = req.body

    try {
      const user = await auth.authenticate(email, password, res.__)
      user.password = null
      const token = jwt.sign(user.toJSON(), process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES || '30m' })
      const { iat, exp } = jwt.decode(token)
      res.send({ iat, exp, token, user })
      next()
    } catch (err) {
      return next(new errors.UnauthorizedError(err.message))
    }
  })

  // Signup: POST /api/users/signup
  server.post('/api/users/signup', async (req, res, next) => {
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
          log.info(`New User: ${user.email}`)
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
  })

  // Update Password: POST /api/users/update-password
  server.post('/api/users/update-password', async (req, res, next) => {
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
            next()
          } catch (err) {
            return next(new errors.InternalError(err.message))
          }
        })
      })
    } catch (err) {
      return next(new errors.InternalError(err.message))
    }
  })

  // Get Personal Profile: GET /api/users/profile
  server.get('/api/users/profile', async (req, res, next) => {
    const user = await User.findById(req.user._id).select('-password')
    res.send(user)
    next()
  })

  // Update Personal Profile: PATCH /api/users/profile
  server.patch('/api/users/profile', async (req, res, next) => {
    try {
      await User.findOneAndUpdate({ email: req.user.email }, { profile: req.body })
      res.send({ success: true, message: res.__('Profile updated successfully') })
      next()
    } catch (err) {
      log.error(err)
      return next(new errors.InternalError(err.message))
    }
  })
}
