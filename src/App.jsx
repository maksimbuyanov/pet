import React from "react"
import "./App.scss"
import { useSelector } from "react-redux"
import Start from "./Components/InitializingPage/Start"
import Game from "./Components/Game/Game"
import { getGameStatus } from "./redux/initializing"

function App() {
  const isGameReady = useSelector(getGameStatus)
  return (
    <div className="app">
      {isGameReady ? <Game /> : <Start />}
      {/* <BrowserRouter> */}
      {/*   <Routes> */}
      {/*     { */}
      {/*        */}
      {/*     } */}
      {/*     <Route path="/" element={<Start />} /> */}

      {/*     {isGameReady && <Route path="/game" element={<Game />} />} */}
      {/*   </Routes> */}
      {/* </BrowserRouter> */}
    </div>
  )
}

export default App
