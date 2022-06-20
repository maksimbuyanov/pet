import React from "react"
import Tippy from "@tippyjs/react"
// eslint-disable-next-line import/no-extraneous-dependencies
import "tippy.js/dist/tippy.css"
// eslint-disable-next-line import/no-extraneous-dependencies
import "tippy.js/themes/light.css"

import "./Actions.scss"
import { useDispatch } from "react-redux"
import { applyAction } from "../../../redux/game"

function Action({ action }) {
  const dispatch = useDispatch()
  const [status, setStatus] = React.useState(true)
  const onClick = () => {
    if (status) {
      dispatch(applyAction(action))
      setStatus(false)
    }
  }

  return (
    <Tippy
      theme="light"
      content={action.effect}
      arrow={Boolean(1)}
      animation="fade"
      duration={300}
    >
      <button
        className={
          status ? `actions__item` : `actions__item actions__item_disabled`
        }
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
