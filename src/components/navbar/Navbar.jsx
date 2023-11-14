import React from "react";
import s from './Navbar.module.css'

const Navbar = () => {
  return (
      <nav className={`${s.navbar} navbar`}>
          <ul>
              <li><a className={`${s.link} active`} href="#">Profile</a></li>
              <li><a className={s.link} href="#">Messages</a></li>
              <li><a className={s.link} href="#">News</a></li>
              <li><a className={s.link} href="#">Music</a></li>
              <li><a className={s.link} href="#">Settings</a></li>
          </ul>
      </nav>
  )
}

export default Navbar