const mongoose = require('mongoose')
const timestamp = require('mongoose-timestamp')

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    unique: true
  },

  emailConfirmed: {
    type: Boolean,
    default: false
  },

  password: {
    type: String,
    required: true
  },

  options: {
    name: String,
    subscribed: {
      type: Boolean,
      default: true
    }
  },

  roles: [String]
})

UserSchema.plugin(timestamp)

module.exports = mongoose.model('User', UserSchema)
