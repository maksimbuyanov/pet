import React from "react"
import "./Game.scss"
import { useSelector } from "react-redux"
import Status from "./Status/Status"
import Dialog from "../helpers/Dialog/Dialog"
import { getActions } from "../../redux/game"
import { blackGoose } from "../helpers/text"

function Game() {
  const actions = useSelector(getActions)
  const actionsCards = actions.map(action => (
    <div className="actions__item">{action.title}</div>
  ))
  const gooseCards = blackGoose.map(goose => (
    <div className="goose__item">{goose.title}</div>
  ))

  return (
    <div className="game">
      <Status />
      <Dialog text="text" title="asd" positionClass="game__dialog" />
      <div className="actions game__actions">{actionsCards}</div>
      <div className="goose game__goose">{gooseCards}</div>
    </div>
  )
}

export default Game
