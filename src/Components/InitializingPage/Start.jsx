import React from "react"
import "./Start.scss"
import "../helpers/Choice/Choice.scss"
import { useSelector } from "react-redux"
import { getCash } from "../../redux/initializing"
import Nav from "./Nav/Nav"
import { moneySplitter } from "../helpers/parser"
import Dialog from "../helpers/Dialog/Dialog"
import Choice from "../helpers/Choice/Choice"

function Start() {
  const cash = useSelector(getCash)
  return (
    <div className="initial">
      <Nav />
      <div className="initial__cash">{moneySplitter(cash, " ")}</div>
      <Dialog positionClass="initial__dialog" text="some text" title="title" />
      <Choice positionClass="initial__choice" />
    </div>
  )
}

export default Start
