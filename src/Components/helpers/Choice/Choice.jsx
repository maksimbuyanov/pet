import React from "react"

function Choice({ positionClass, cardsArr }) {
  const className = ["choice"]
  if (positionClass) {
    className.push(positionClass)
  }
  const cards = cardsArr.map(card => {
    const titleClass = ["choice__title"]
    if (card.gradient) {
      titleClass.push(card.gradient)
    }
    return (
      <div className="choice__card">
        <ul className="choice__list">
          {card.listItems.map(listItem => (
            <li className="choice__item">{listItem}</li>
          ))}
        </ul>
        <div className={titleClass.join(" ")}>{card.title}</div>
      </div>
    )
  })
  return <div className={className.join(" ")}>{cards}</div>
}

export default Choice
