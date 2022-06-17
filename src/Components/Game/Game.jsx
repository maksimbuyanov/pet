import React from "react"
import "./Game.scss"
import { useDispatch, useSelector } from "react-redux"
import Status from "./Status/Status"
import Dialog from "../helpers/Dialog/Dialog"
import {
  applyAction,
  applySettings,
  getActions,
  getDialogText,
  getGeeseLength,
  isFirstRound,
} from "../../redux/game"
import Action from "./Actions/Actions"
import Table from "./Table/Table"
import BlackGeese from "./BlackGeese/BlackGeese"

function Game() {
  const dispatch = useDispatch()
  const actions = useSelector(getActions)
  const text = useSelector(getDialogText)
  const firstRound = useSelector(isFirstRound)
  const actionsCards = actions.map(action => {
    const onClick = () => {
      dispatch(applyAction(action))
    }
    return <Action onClick={onClick} action={action} key={action.title} />
  })

  const isGeeseArrived = useSelector(getGeeseLength)
  const isActionsEmpty = !actions.length

  const gameClass = ["game"]
  if (!isGeeseArrived) {
    gameClass.push("game_pre")
  }
  if (isActionsEmpty) {
    gameClass.push("game_end")
  }

  return (
    <div className={gameClass.join(" ")}>
      <Status />
      {!isActionsEmpty && <Dialog text={text} positionClass="game__dialog" />}
      {firstRound && <FirstRound />}

      {isGeeseArrived && !isActionsEmpty && (
        <>
          <div className="actions game__actions">{actionsCards}</div>
          <BlackGeese />
        </>
      )}

      {!isGeeseArrived && (
        <>
          <div
            className={
              firstRound
                ? "game__actions_hidden"
                : "actions game__actions_right"
            }
          >
            {actionsCards.filter((action, index) => index < 6)}
          </div>
          <div
            className={
              firstRound ? "game__actions_hidden" : "actions game__actions_left"
            }
          >
            {actionsCards.filter((action, index) => index > 5)}
          </div>
        </>
      )}

      {isActionsEmpty && <Table />}
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
