import React from "react"
import "./Status.scss"
import { useSelector } from "react-redux"
import { getCafeName, getCash } from "../../../redux/initializing"
import { getClients, getRounds, getShowTable } from "../../../redux/game"
import { moneySplitter } from "../../helpers/parser"
import refreshSvg from "../../../image/refresh.svg"

function Status() {
  const cash = useSelector(getCash)
  const round = useSelector(getRounds)
  const cafeName = useSelector(getCafeName)
  const clients = useSelector(getClients)
  const isShowTable = useSelector(getShowTable)

  const onClickRefresh = () => {
    window.location.reload()
  }

  return (
    <div className="game__status status">
      <div className="status__cafe-name">{cafeName}</div>
      <div className="status__info">
        <div className="status__step">{round}</div>
        <div className="status__cash">{moneySplitter(cash)}</div>
        <div className="status__clients">{clients}</div>
        {isShowTable && (
          <button
            className="status__refresh"
            type="button"
            onClick={onClickRefresh}
          >
            <img src={refreshSvg} alt="Обновить" className="status__img" />
          </button>
        )}
      </div>
    </div>
  )
}

export default Status
