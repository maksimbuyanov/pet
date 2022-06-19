import React from "react"
import "./Nav.scss"
import { useSelector } from "react-redux"
import { nav_steps } from "../../helpers/text"
import { getStep } from "../../../redux/initializing"

function Nav() {
  const step = useSelector(getStep)
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
