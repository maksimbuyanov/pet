import React from "react"
import "./Choice.scss"
import { useDispatch } from "react-redux"
import { nextStep } from "../../../redux/initializingActionsCreators"
import { shuffle } from "../../helpers/parser"

function Choice({ positionClass, cardsArr }) {
  const dispatch = useDispatch()
  const className = ["choice"]
  if (positionClass) {
    className.push(positionClass)
  }
  const gradientsName = shuffle(["red", "blue", "green", "orange"])
  const cards = cardsArr.map(card => {
    const { cost, title, listItems } = card
    const isArray = Array.isArray(listItems)
    const titleClass = ["choice__title"]
    const gradient = gradientsName.pop()
    if (gradient) {
      titleClass.push(`choice__title_${gradient}`)
    }
    const onCardClick = () => {
      dispatch(
        nextStep({
          title,
          cost,
        })
      )
    }
    return (
      <div
        className="choice__card"
        onClick={onCardClick}
        key={title}
        role="button"
        tabIndex="0"
        onKeyDown={e => {
          if (e.code === "Enter") {
            onCardClick()
          }
        }}
      >
        {isArray ? (
          <ul className="choice__list">
            {listItems.map(listItem => (
              <li className="choice__item" key={listItem}>
                {listItem}
              </li>
            ))}
          </ul>
        ) : (
          <span className="choice__item choice__item_text">{listItems}</span>
        )}

        <div className={titleClass.join(" ")}>{title}</div>
      </div>
    )
  })
  return <div className={className.join(" ")}>{cards}</div>
}

export default Choice
