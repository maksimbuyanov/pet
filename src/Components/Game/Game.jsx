import React from "react"
import "./Game.scss"
import { useDispatch, useSelector } from "react-redux"
import Status from "./Status/Status"
import Dialog from "../helpers/Dialog/Dialog"
import {
  applySettings,
  getActionsLength,
  getDialogText,
  getShowTable,
  isFirstRound,
} from "../../redux/game"
import Action from "./Actions/Actions"
import Table from "./Table/Table"
import { finalGameText, negativeStart, userActions } from "../helpers/text"
import { shuffle } from "../helpers/parser"
import { showTable } from "../../redux/gameActionsCreators"

const [leftActionsCard, rightActionsCard] = (() => {
  const allActions = shuffle(userActions)
  const [leftAC, rightAC] = [allActions.slice(0, 6), allActions.slice(6)]
  const leftActionsCardArr = leftAC.map(action => (
    <Action action={action} key={action.title} />
  ))
  const rightActionsCardArr = rightAC.map(action => (
    <Action action={action} key={action.title} />
  ))
  return [leftActionsCardArr, rightActionsCardArr]
})()

function Game() {
  const isActionsNoEmpty = useSelector(getActionsLength)
  const text = useSelector(getDialogText)
  const firstRound = useSelector(isFirstRound)
  const isShowTable = useSelector(getShowTable)
  const gameClass = ["game"]
  if (isShowTable) {
    gameClass.push("game_end")
  }

  if (text === negativeStart) {
    return (
      <div className={gameClass.join(" ")}>
        <Dialog text={text} positionClass="game__dialog" />
        <EndGame />
      </div>
    )
  }
  if (isShowTable) {
    return (
      <div className={gameClass.join(" ")}>
        <Status />
        <Table />
      </div>
    )
  }
  if (!isActionsNoEmpty) {
    return (
      <div className={gameClass.join(" ")}>
        <Status />
        <Dialog text={finalGameText} positionClass="game__dialog" />
        <LastRound />
      </div>
    )
  }

  return (
    <div className={gameClass.join(" ")}>
      <Status />
      <Dialog text={text} positionClass="game__dialog" />
      {firstRound && <FirstRound />}

      {!firstRound && (
        <>
          <div className="actions game__actions-right">{leftActionsCard}</div>
          <div className="actions game__actions-left">{rightActionsCard}</div>
        </>
      )}
    </div>
  )
}

export default Game

function FirstRound() {
  const dispatch = useDispatch()
  const onScreenClick = e => {
    e.stopPropagation()
    dispatch(applySettings())
  }
  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div
      className="game__first-round-block"
      onClick={onScreenClick}
      onKeyDown={e => {
        onScreenClick(e)
      }}
    />
  )
}

function LastRound() {
  const dispatch = useDispatch()
  const onScreenClick = e => {
    e.stopPropagation()
    dispatch(showTable(true))
  }
  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div
      className="game__first-round-block"
      onClick={onScreenClick}
      onKeyDown={e => {
        onScreenClick(e)
      }}
    />
  )
}

function EndGame() {
  const onScreenClick = () => {
    window.location.reload()
  }
  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div
      className="game__first-round-block"
      onClick={onScreenClick}
      onKeyDown={e => {
        onScreenClick(e)
      }}
    />
  )
}
