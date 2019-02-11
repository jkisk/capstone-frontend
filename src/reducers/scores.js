import {GET_SCORES} from '../actions/scores'

const initialState = []

const scores = (state = initialState, {type, payload}) => {
  switch(type) {
    case GET_SCORES: 
      return payload
    default:
      return state
  }
}

export default scores