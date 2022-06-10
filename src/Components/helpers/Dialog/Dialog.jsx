import React from "react"
import person from "../../../image/businesman.svg"
import "./Dialog.scss"

function Dialog({ title, text, positionClass }) {
  const className = ["dialog"]
  if (positionClass) {
    className.push(positionClass)
  }
  return (
    <div className={className.join(" ")}>
      <div className="dialog__person">
        <img className="dialog__person_img" src={person} alt="Наставник" />
      </div>
      <div className="dialog__cloud cloud">
        <span className="cloud__title">{title}</span>
        <span className="cloud__text">{text}</span>
      </div>
    </div>
  )
}

export default Dialog
