const users = {
  login: require('./login'),
  signup: require('./signup'),
  oauthGoogle: require('./oauth/google'),
  updatePassword: require('./updatePassword'),
  getMyProfile: require('./getMyProfile'),
  patchMyProfile: require('./patchMyProfile')
}

module.exports = server => {
  // Login: POST /api/users/login
  server.post('/api/users/login', users.login)

  // Signup: POST /api/users/signup
  server.post('/api/users/signup', users.signup)

  // Google OAuth: POST /api/users/oauth/google
  if (process.env.USE_GOOGLE_OAUTH && process.env.USE_GOOGLE_OAUTH === 'true') {
    server.post('/api/users/oauth/google', users.oauthGoogle)
  }

  // Update Password: POST /api/users/update-password
  server.post('/api/users/update-password', users.updatePassword)

  // Get Personal Profile: GET /api/users/profile
  server.get('/api/users/profile', users.getMyProfile)

  // Update Personal Profile: PATCH /api/users/profile
  server.patch('/api/users/profile', users.patchMyProfile)
}
