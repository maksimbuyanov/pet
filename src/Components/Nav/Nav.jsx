import React from "react"
import "./Nav.scss"
import { useSelector } from "react-redux"

function Nav(props) {
  const step = useSelector(s => s.initializing.step)
  return (
    <ul className="nav">
      <li className="nav__item">
        <span className="nav__item_before-border" />
        Первый
        <span className="nav__item_after-border" />
      </li>
      <li className="nav__item">
        <span className="nav__item_before-border" />
        Второй
        <span className="nav__item_after-border" />
      </li>
      <li className="nav__item">Третьий</li>
      <li className="nav__item">Четвертый</li>
      <li className="nav__item">Пятый</li>
      <li className="nav__item">Шестой</li>
      <li className="nav__item">Седьмой</li>
      <li className="nav__item">Восьмой</li>
      <li className="nav__item">Девятый</li>
      {step}
    </ul>
  )
}

export default Nav
