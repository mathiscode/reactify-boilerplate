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

  roles: [String],

  options: {
    name: String,
    subscribed: {
      type: Boolean,
      default: true
    }
  },

  authProviders: {
    linked: { type: Boolean, default: false },
    primary: { type: String },

    google: {
      enabled: { type: Boolean, default: false },
      account: { type: String }
    }
  }
})

UserSchema.plugin(timestamp)

module.exports = mongoose.model('User', UserSchema)
