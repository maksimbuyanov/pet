import { applyMiddleware, combineReducers, createStore } from "redux"
import thunk from "redux-thunk"
import initializing from "./initializing"
import game from "./game"

const reducer = combineReducers({
  initializing,
  game,
})

export default createStore(reducer, applyMiddleware(thunk))
