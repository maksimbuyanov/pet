import React from "react"
import "./BlackGeese.scss"
import { useSelector } from "react-redux"
import { getActions, getGeese } from "../../../redux/game"

function BlackGeese() {
  const geese = useSelector(getGeese)
  const actions = useSelector(getActions).map(action => action.title)
  const geeseCards = geese.map(geeseItem => {
    const isGooseLose = !actions.include(geeseItem.enemy)

    return (
      <div
        className={isGooseLose ? "geese__item geese_item_lose" : "geese__item"}
        key={geeseItem.title}
      >
        {geeseItem.title}
      </div>
    )
  })
  return <div className="geese game__geese">{geeseCards}</div>
}

export default BlackGeese
