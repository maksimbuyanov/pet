import React from "react"
import "./Status.scss"
import { useSelector } from "react-redux"
import { getCafeName, getCash } from "../../../redux/initializing"
import { getClients, getRounds } from "../../../redux/game"
import { moneySplitter } from "../../helpers/parser"

function Status() {
  const cash = useSelector(getCash)
  const round = useSelector(getRounds)
  const cafeName = useSelector(getCafeName)
  const clients = useSelector(getClients)

  return (
    <div className="game__status status">
      <div className="status__cafe-name">{cafeName}</div>
      <div className="status__info">
        <div className="status__step">{round}</div>
        <div className="status__cash">{moneySplitter(cash)}</div>
        <div className="status__clients">{clients}</div>
      </div>
    </div>
  )
}

export default Status
