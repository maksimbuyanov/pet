import React from "react"
import "./App.css"
import { BrowserRouter, Route} from "react-router-dom"
import Nav from "./Components/Nav/Nav"

function App() {
  return (
    <div className="App">
      <Nav />
      <BrowserRouter>
        {/* <Route path="*" element={} /> */}
      </BrowserRouter>
    </div>
  )
}

export default App
