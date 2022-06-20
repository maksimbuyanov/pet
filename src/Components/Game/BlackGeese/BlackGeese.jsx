import React from "react"
import "./BlackGeese.scss"
import { useSelector } from "react-redux"
import { getActionsLength, getGeese } from "../../../redux/game"

function BlackGeese() {
  const geese = useSelector(getGeese)
  const actions = useSelector(getActionsLength).map(action => action.title)
  const geeseCards = geese.map(geeseItem => {
    const isGooseLose = !actions.includes(geeseItem.enemy)
    const gooseClass = ["geese__item", `geese__item_${geeseItem.personalClass}`]
    if (isGooseLose) {
      gooseClass.push(`geese__item_lose`)
    }

    return (
      <div className={gooseClass.join(" ")} key={geeseItem.title}>
        {geeseItem.title}
      </div>
    )
  })
  return <div className="geese game__geese">{geeseCards}</div>
}

export default BlackGeese
