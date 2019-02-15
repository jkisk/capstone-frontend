import request from '../utils/request'

export const GET_SCORES = 'GET_SCORES'
export const SCORE_GAME = 'SCORE_GAME'



export const getScores = () => {
    return (dispatch) => {
        request(`/games/scores`)
            .then(result => dispatch({ type: GET_SCORES, payload: result.data.data }))
            .catch(err => console.log(err))
    }
}

export const scoreGame = (playerId, score) => {
    return (dispatch) => {
        request(`/player/${playerId}/score`, 'post',  {'score': score})
            .then(result => dispatch({ type: SCORE_GAME, payload: result.data.data }))
            .catch(err => console.log(err))
    }
}

