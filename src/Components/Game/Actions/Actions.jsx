import React from "react"
import "./Actions.scss"

function Action({ onClick, action }) {
  return (
    <div
      className="actions__item"
      onClick={onClick}
      key={action.title}
      role="button"
      tabIndex="0"
      onKeyDown={e => {
        if (e.code === "Enter") {
          onClick()
        }
      }}
    >
      {action.title}
    </div>
  )
}

export default Action
