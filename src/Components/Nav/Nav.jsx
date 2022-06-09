import React from "react"
import "./Nav.scss"
import { useSelector } from "react-redux"
import { nav_steps } from "../helpers/text"

function Nav(props) {
  const step = useSelector(s => s.initializing.step)
  const navItems = nav_steps.map((text, index) => {
    const styles = ["nav__item"]
    if (step === index) {
      styles.push("nav__item_active")
    }
    return (
      <li className={styles.join(" ")} key={text}>
        {text}
      </li>
    )
  })
  return <ul className="nav">{navItems}</ul>
}

export default Nav
