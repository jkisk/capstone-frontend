import {
  SET_AUTHENTICATION,
  PLAYER_LOGIN_FAILED,
  PLAYER_LOGOUT
} from '../actions/auth'

const AUTH_INITIAL_STATE = {
  player: null,
  pending: true,
  showLoginError: false
}

const authentication = (state = AUTH_INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case SET_AUTHENTICATION:
      return { player: payload, pending: false }
    case PLAYER_LOGIN_FAILED:
      return { ...state, showLoginError: true }
    case PLAYER_LOGOUT:
      return { ...state, player: '' }
    default:
      return state
  }
}

export default authentication