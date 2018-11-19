import axios from 'axios'

export const logout = (self) => {
  localStorage.removeItem('token')
  localStorage.removeItem('token_expires')
  if (self.props.setToken) self.props.setToken(null, 0)
  if (self.props.setLoggedOut) self.props.setLoggedOut()
  if (self.props.setProfile) self.props.setProfile(null)
  if (self.props.history) self.props.history.push('/')
}

export const checkToken = (self) => {
  // Check token in redux, or get from localStorage
  const token = self.props.keys.token ? self.props.keys.token : localStorage.getItem('token')
  const expires = self.props.keys.token_expires ? self.props.keys.token_expires : localStorage.getItem('token_expires')
  if (token) updateToken(self, token, expires)
}

export const updateToken = (self, token, expires) => {
  // Save token to localStorage and redux
  localStorage.setItem('token', token)
  localStorage.setItem('token_expires', expires)
  self.props.setToken(token, expires)

  // If current token isn't expired, we're logged in
  if (Math.floor(Date.now() / 1000) < expires) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    self.props.setLoggedIn()
    updateProfile(self)
  }
}

export const updateProfile = async (self) => {
  try {
    const results = await axios.get('/api/users/profile')
    self.props.setProfile(results.data)
  } catch (err) {
    console.error(err)
  }
}
