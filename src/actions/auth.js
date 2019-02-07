export const SET_AUTHENTICATION = 'SET_AUTHENTICATION'
export const USER_LOGIN_FAILED = 'USER_LOGIN_FAILED'
export const USER_LOGOUT = 'USER_LOGOUT'

export const setAuthentication = claim => ({
  type: SET_AUTHENTICATION,
  payload: claim
})

export const setLoginFail = claim => ({
  type: USER_LOGIN_FAILED,
  payload: claim
})

export const userLogout = callback => {
  callback()
  return {
    type: USER_LOGOUT
  }
}