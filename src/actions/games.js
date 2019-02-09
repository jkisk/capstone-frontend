import request from '../utils/request'

export const NEW_GAME = 'NEW_GAME'


export const newGame = () => {
  return (dispatch) => {
    request(`/games`)
    .then(result => dispatch({type: NEW_GAME, payload: result.data}))
    .catch(err => console.log(err))
  }
}