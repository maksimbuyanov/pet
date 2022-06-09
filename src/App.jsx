import React from "react"
import "./App.css"
import { BrowserRouter } from "react-router-dom"
import Nav from "./Components/Nav/Nav"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
      </BrowserRouter>
    </div>
  )
}

export default App
