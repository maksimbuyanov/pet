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
  getGeese,
  isFirstRound,
} from "../../redux/game"
import Action from "./Actions/Actions"
import BlackGeese from "./BlackGeese/BlackGeese"
import { shuffle } from "../helpers/parser"
import Table from "./Table/Table"

function Game() {
  const dispatch = useDispatch()
  const actions = useSelector(getActions)
  const geese = useSelector(getGeese)
  const text = useSelector(getDialogText)
  const firstRound = useSelector(isFirstRound)
  const actionsCards = actions.map(action => {
    const onClick = () => {
      dispatch(applyAction(action))
    }
    return <Action onClick={onClick} action={action} key={action.title} />
  })
  const geeseCards = geese.map(geeseItem => (
    <BlackGeese geeseItem={geeseItem} key={geeseItem} />
  ))

  const isGeeseArrived = Boolean(geese.length)
  const isActionsEmpty = !actions.length

  return (
    <div className={isGeeseArrived ? "game" : "game game_pre"}>
      <Status />
      <Dialog text={text} positionClass="game__dialog" />
      {firstRound && <FirstRound />}

      {isGeeseArrived ? (
        <>
          <div className="actions game__actions">
            {shuffle(actionsCards).slice(0, 7)}
          </div>
          <div className="geese game__geese">{geeseCards}</div>
        </>
      ) : (
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
