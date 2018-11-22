const users = {
  login: require('./login'),
  signup: require('./signup'),
  updatePassword: require('./updatePassword'),
  getMyProfile: require('./getMyProfile'),
  patchMyProfile: require('./patchMyProfile')
}

module.exports = server => {
  // Login: POST /api/users/login
  server.post('/api/users/login', users.login)

  // Signup: POST /api/users/signup
  server.post('/api/users/signup', users.signup)

  // Update Password: POST /api/users/update-password
  server.post('/api/users/update-password', users.updatePassword)

  // Get Personal Profile: GET /api/users/profile
  server.get('/api/users/profile', users.getMyProfile)

  // Update Personal Profile: PATCH /api/users/profile
  server.patch('/api/users/profile', users.patchMyProfile)
}
