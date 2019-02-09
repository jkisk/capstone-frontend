import {NEW_GAME} from '../actions/games'

const initialState = []

const games = (state = initialState, {type, payload}) => {
  switch(type) {
    case NEW_GAME: 
      return payload
    default:
      return state
  }
}

export default games