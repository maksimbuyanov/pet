/* eslint-disable jsx-a11y/no-autofocus */
import React, { useRef } from "react"
import NumberFormat from "react-number-format"
import "./Start.scss"
import { useDispatch, useSelector } from "react-redux"
import {
  getCash,
  getSettings,
  getStep,
  negativeCash,
} from "../../redux/initializing"
import Nav from "./Nav/Nav"
import { moneySplitter } from "../helpers/parser"
import Dialog from "../helpers/Dialog/Dialog"
import Choice from "./Choice/Choice"
import { setup } from "../helpers/text"
import {
  nextStep,
  setCash,
  setName,
  startGame,
} from "../../redux/initializingActionsCreators"

const MAX_VAL = 10_000_000
const withValueLimit = ({ floatValue }) => floatValue <= MAX_VAL

function Start() {
  const dispatch = useDispatch()
  const nameRef = useRef()
  const cashRef = useRef()
  const cash = useSelector(getCash)
  const step = useSelector(getStep)
  const settings = useSelector(getSettings)
  const { dialog, choice } = setup[step]
  const isFirstStep = step === 0
  const isFinalStep = step === setup.length - 1
  const onStartGame = () => {
    dispatch(startGame())
  }
  const onSubmitName = e => {
    e.preventDefault()
    if (+cashRef.current.state.numAsString < 1_000_000) return
    dispatch(setName(nameRef.current.value))
    dispatch(setCash(+cashRef.current.state.numAsString))
    dispatch(nextStep({ title: "", cost: 0 }))
  }
  if (cash < 0) {
    dispatch(negativeCash())
  }
  return (
    <div className="initial">
      {!isFinalStep && <Nav />}
      {cash && <div className="initial__cash">{moneySplitter(cash, " ")}</div>}
      <Dialog
        positionClass={dialog.positionClass}
        text={dialog.text}
        title={dialog.title}
      />

      {isFirstStep && (
        <form className="initial__form" onSubmit={onSubmitName}>
          <label htmlFor="name" className="initial__label">
            <span className="initial__text">Введи название заведения: </span>
            <input
              ref={nameRef}
              type="text"
              name="name"
              required={Boolean(1)}
              className="initial__input"
              autoFocus={Boolean(1)}
            />
          </label>
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label htmlFor="cash" className="initial__label">
            <span className="initial__text">Твой стартовый капитал:</span>
            <NumberFormat
              thousandsGroupStyle="thousand"
              className="initial__input"
              displayType="input"
              type="text"
              thousandSeparator={" "}
              required
              defaultValue={1_000_000}
              name="cash"
              ref={cashRef}
              isAllowed={withValueLimit}
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
      {isFinalStep && (
        <>
          <div className="initial__title">Твои выбранные опции:</div>
          <ul className="initial__settings-list">
            {settings.slice(1).map(item => (
              <li className="initial__settings-item">{item}</li>
            ))}
          </ul>
          <button
            onClick={onStartGame}
            className="initial__button initial__button_end"
            type="button"
          >
            Вперед!
          </button>
        </>
      )}
    </div>
  )
}

export default Start
