import React from "react"
import "./BlackGeese.scss"
import { useSelector } from "react-redux"
import { getGoose } from "../../../redux/game"

function BlackGeese() {
  const goose = useSelector(getGoose)
  const gooseClass = ["geese__item", `geese__item_${goose.personalClass}`]
  return <div className={gooseClass.join(" ")}>{goose.title}</div>
}

export default BlackGeese
