import request from '../utils/request'

export const GET_SCORES = 'GET_SCORES'



export const getScores = () => {
  return (dispatch) => {
    request(`/games/scores`)
    .then(result => dispatch({type: GET_SCORES, payload: result.data.data}))
    .catch(err => console.log(err))
  }
}

