import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import games from './reducers/games'
import scores from './reducers/scores'
import auth from './reducers/auth'
import players from './reducers/players'


const reducers = combineReducers({
  games,
  scores,
  auth,
  players
})

const middleware = [
  thunk,
  logger,
]

export default createStore(reducers, applyMiddleware(...middleware))