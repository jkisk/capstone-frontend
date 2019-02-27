import request from '../utils/request'

export const NEW_GAME = 'NEW_GAME'


export const newGame = (id) => {
  return (dispatch) => {
    request(`/games/${id}`)
    .then(result => dispatch({type: NEW_GAME, payload: result.data.data}))
    .catch(err => console.log(err))
  }
}

