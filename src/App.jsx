import React from "react"
import "./App.scss"
import { useSelector } from "react-redux"
import Start from "./Components/InitializingPage/Start"
import Game from "./Components/Game/Game"
import { getGameStatus } from "./redux/initializing"

function App() {
  const isGameReady = useSelector(getGameStatus)
  return <div className="app">{isGameReady ? <Game /> : <Start />}</div>
}

export default App
