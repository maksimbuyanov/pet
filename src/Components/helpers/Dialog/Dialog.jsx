/* eslint-disable jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */
import React from "react"
import "./Dialog.scss"
import { useDispatch, useSelector } from "react-redux"
import { getGooseText } from "../../../redux/game"
import person from "../../../image/businesman.svg"
import { setGooseText } from "../../../redux/gameActionsCreators"

function Dialog({ title, text, positionClass }) {
  const gooseText = useSelector(getGooseText)
  const dispatch = useDispatch()
  const className = ["dialog"]
  if (positionClass) {
    className.push(positionClass)
  }
  const hideBlockWindow = e => {
    e.stopPropagation()
    dispatch(setGooseText(null))
  }

  return (
    <div className={className.join(" ")}>
      {gooseText && (
        <div className="dialog__block-window" onClick={hideBlockWindow} />
      )}
      <div className="dialog__person">
        <img className="dialog__person_img" src={person} alt="Наставник" />
      </div>
      <div className="dialog__cloud cloud">
        {title && <span className="cloud__title">{title}</span>}
        <span className="cloud__text">{gooseText || text}</span>
      </div>
    </div>
  )
}

export default Dialog
