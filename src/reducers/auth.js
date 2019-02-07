import {SET_AUTHENTICATION, 
    USER_LOGIN_FAILED,
    USER_LOGOUT
} from '../actions/auth'

const AUTHENTICATION_INITIAL_STATE = {
user: null,
pending: true,
showLoginError:false
}

const authentication = (state = AUTHENTICATION_INITIAL_STATE, {type, payload}) => {
switch(type) {
case SET_AUTHENTICATION:
  return {user: payload, pending: false}
case USER_LOGIN_FAILED:
  return {...state, showLoginError: true}
case USER_LOGOUT:
  return {...state, user: ''}
default:
return state
}
} // Call this with the information from the server, not locally.

export default authentication