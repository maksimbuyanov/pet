import React from "react"
import Tippy from "@tippyjs/react"
// eslint-disable-next-line import/no-extraneous-dependencies
import "tippy.js/dist/tippy.css"
// eslint-disable-next-line import/no-extraneous-dependencies
import "tippy.js/themes/light.css"

import "./Actions.scss"

function Action({ onClick, action }) {
  return (
    <Tippy
      theme="light"
      content={action.effect}
      arrow={Boolean(1)}
      animation="fade"
      duration={300}
    >
      <button
        className="actions__item"
        onClick={onClick}
        key={action.title}
        type="button"
        tabIndex="0"
        onKeyDown={e => {
          if (e.code === "Enter") {
            onClick()
          }
        }}
      >
        {action.title.toUpperCase()}
      </button>
    </Tippy>
  )
}

export default Action
