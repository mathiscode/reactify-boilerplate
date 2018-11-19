import { SET_LOGGED_IN, SET_LOGGED_OUT, SET_PROFILE } from '../actionTypes'

const initialState = { loggedIn: false }

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_LOGGED_IN:
    case SET_LOGGED_OUT:
      const { loggedIn } = action.payload
      return {
        ...state,
        loggedIn
      }
    case SET_PROFILE:
      const { profile } = action.payload
      return {
        ...state,
        profile
      }
    default:
      return state
  }
}
