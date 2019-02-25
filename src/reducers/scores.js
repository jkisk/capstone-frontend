import {GET_SCORES, SCORE_GAME} from '../actions/scores'

const initialState = {
  last_score: null,
  high_scores: [],
  isNewHigh: false
}

const scores = (state = initialState, {type, payload}) => {
  switch(type) {
    case GET_SCORES: 
      return {...state, high_scores: payload}
    case SCORE_GAME:
        return {...state, last_score: payload.last_score, isNewHigh: payload.isNewHigh}
    default:
      return state
  }
}

export default scores