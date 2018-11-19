const bcrypt = require('bcryptjs')

const User = require('../models/User')

exports.authenticate = (email, password, translate) => {
  if (typeof translate !== 'function') translate = str => str

  return new Promise(async (resolve, reject) => {
    try {
      const user = await User.findOne({ email })
      bcrypt.compare(password, user.password, (err, match) => {
        if (err) return reject(err)
        if (!match) return reject(new Error(translate('Authentication Failed')))
        resolve(user)
      })
    } catch (err) {
      reject(new Error(translate('Authentication Failed')))
    }
  })
}
