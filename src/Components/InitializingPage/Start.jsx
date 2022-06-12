import React, { useRef } from "react"
import "./Start.scss"
import { useDispatch, useSelector } from "react-redux"
import { getCash, getStep, startGame } from "../../redux/initializing"
import Nav from "./Nav/Nav"
import { moneySplitter } from "../helpers/parser"
import Dialog from "../helpers/Dialog/Dialog"
import Choice from "./Choice/Choice"
import { setup } from "../helpers/text"

function Start() {
  const dispatch = useDispatch()
  const nameRef = useRef()
  const cash = useSelector(getCash)
  const step = useSelector(getStep)
  const { dialog, choice } = setup[step]
  const isFinalStep = step < 9
  const onSubmitName = () => {
    debugger
    dispatch(startGame(nameRef.current.value))
  }
  return (
    <div className="initial">
      <Nav />
      <div className="initial__cash">{moneySplitter(cash, " ")}</div>
      <Dialog
        positionClass={dialog.positionClass}
        text={dialog.text}
        title={dialog.title}
      />
      {isFinalStep ? (
        <Choice
          positionClass={choice.positionClass}
          cardsArr={choice.cardsArr}
        />
      ) : (
        <form className="initial__form" onSubmit={onSubmitName}>
          <label htmlFor="name">
            <span className="initial__label">Введите название заведения: </span>
            <input
              ref={nameRef}
              type="text"
              name="name"
              required={Boolean(1)}
              className="initial__input"
            />
          </label>
          <button type="submit" className="initial__button">
            Вперёд!
          </button>
        </form>
      )}
    </div>
  )
}

export default Start
