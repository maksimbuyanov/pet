import { applyMiddleware, combineReducers, createStore } from "redux"
import thunk from "redux-thunk"
import initializing from "./initializing"

const reducer = combineReducers({
  initializing,
})

export default createStore(reducer, applyMiddleware(thunk))
