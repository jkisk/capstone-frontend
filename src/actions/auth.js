export const SET_AUTHENTICATION = 'SET_AUTHENTICATION'
export const PLAYER_LOGIN_FAILED = 'PLAYER_LOGIN_FAILED'
export const PLAYER_LOGOUT = 'PLAYER_LOGOUT'

export const setAuthentication = claim => ({
  type: SET_AUTHENTICATION,
  payload: claim
})

export const setLoginFail = claim => ({
  type: PLAYER_LOGIN_FAILED,
  payload: claim
})

export const playerLogout = callback => {
  callback()
  return {
    type: PLAYER_LOGOUT
  }
}