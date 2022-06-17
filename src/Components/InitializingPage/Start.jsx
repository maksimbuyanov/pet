/* eslint-disable jsx-a11y/no-autofocus */
import React, { useRef } from "react"
import "./Start.scss"
import { useDispatch, useSelector } from "react-redux"
import { getCash, getStep } from "../../redux/initializing"
import Nav from "./Nav/Nav"
import { moneySplitter } from "../helpers/parser"
import Dialog from "../helpers/Dialog/Dialog"
import Choice from "./Choice/Choice"
import { setup } from "../helpers/text"
import { startGame } from "../../redux/initializingActionsCreators"

function Start() {
  const dispatch = useDispatch()
  const nameRef = useRef()
  const cashRef = useRef()
  const cash = useSelector(getCash)
  const step = useSelector(getStep)
  const { dialog, choice } = setup[step]
  const isFirstStep = step === 0
  const isFinalStep = step === setup.length
  const onSubmitName = e => {
    e.preventDefault()
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

      {isFirstStep && (
        <form className="initial__form" onSubmit={onSubmitName}>
          <label htmlFor="name" className="initial__label">
            <span className="initial__text">Введите название заведения: </span>
            <input
              ref={nameRef}
              type="text"
              name="name"
              required={Boolean(1)}
              className="initial__input"
              autoFocus={Boolean(1)}
            />
          </label>
          <label htmlFor="cash" className="initial__label">
            <span className="initial__text">Сколько налички у тебя есть:</span>
            <input
              min={1_000_000}
              max={10_000_000}
              type="number"
              ref={cashRef}
              name="cash"
              required={Boolean(1)}
              className="initial__input"
            />
          </label>
          <button type="submit" className="initial__button">
            Вперёд!
          </button>
        </form>
      )}
      {!isFirstStep && !isFinalStep && (
        <Choice
          positionClass={choice.positionClass}
          cardsArr={choice.cardsArr}
        />
      )}
    </div>
  )
}

export default Start
