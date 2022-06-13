import React from "react"
import "./BlackGeese.scss"

function BlackGeese({ geeseItem }) {
  return (
    <div className="geese__item" key={geeseItem}>
      {geeseItem}
    </div>
  )
}

export default BlackGeese
