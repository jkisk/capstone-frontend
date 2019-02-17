import request from '../utils/request'

export const CREATE_PLAYER = 'CREATE_PLAYER'


export const createPlayer = (playerObj, callback) => {
  return (dispatch) => {
    request(`/player`,'post', playerObj)
    .then(result => dispatch({type: CREATE_PLAYER, payload: result.data.data}))
    .then(callback)
    .catch(err => console.log(err))
  }
}