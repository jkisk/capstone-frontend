import {GET_SCORES, SCORE_GAME} from '../actions/scores'

const initialState = []

const scores = (state = initialState, {type, payload}) => {
  switch(type) {
    case GET_SCORES: 
      return payload
    case SCORE_GAME:
        return [payload, ...state]
    default:
      return state
  }
}

export default scores