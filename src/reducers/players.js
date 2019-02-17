import {CREATE_PLAYER} from '../actions/players'

const initialState = []

const players = (state = initialState, {type, payload}) => {
  switch(type) {
    case CREATE_PLAYER: 
    console.log("in reducer")
      return [...state, payload]
    default:
      return state
  }
}

export default players