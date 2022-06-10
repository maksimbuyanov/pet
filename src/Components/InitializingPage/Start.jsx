import React from "react"
import "./Start.scss"
import { useSelector } from "react-redux"
import { getCash, getStep } from "../../redux/initializing"
import Nav from "./Nav/Nav"
import { moneySplitter } from "../helpers/parser"
import Dialog from "../helpers/Dialog/Dialog"
import Choice from "../helpers/Choice/Choice"
import { setup } from "../helpers/text"

function Start() {
  const cash = useSelector(getCash)
  const step = useSelector(getStep)
  const { dialog, choice } = setup[step]
  return (
    <div className="initial">
      <Nav />
      <div className="initial__cash">{moneySplitter(cash, " ")}</div>
      <Dialog
        positionClass={dialog.positionClass}
        text={dialog.text}
        title={dialog.title}
      />
      <Choice positionClass={choice.positionClass} cardsArr={choice.cardsArr} />
    </div>
  )
}

export default Start
