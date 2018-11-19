import { SET_TOKEN } from '../actionTypes'

const initialState = { token: null }

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_TOKEN:
      const { token, expires } = action.payload
      return {
        ...state,
        token,
        expires
      }
    default:
      return state
  }
}
