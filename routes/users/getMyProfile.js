const User = require('../../models/User')

module.exports = async (req, res, next) => {
  const user = await User.findById(req.user._id).select('-password')
  res.send(user)
  next()
}
