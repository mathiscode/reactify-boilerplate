import { SET_TOKEN, SET_LOGGED_IN, SET_LOGGED_OUT, SET_PROFILE } from './actionTypes'

export const setToken = (token, expires) => ({
  type: SET_TOKEN,
  payload: { token, expires }
})

export const setLoggedIn = () => ({
  type: SET_LOGGED_IN,
  payload: { loggedIn: true }
})

export const setLoggedOut = () => ({
  type: SET_LOGGED_OUT,
  payload: { loggedIn: false }
})

export const setProfile = (profile) => ({
  type: SET_PROFILE,
  payload: { profile }
})
