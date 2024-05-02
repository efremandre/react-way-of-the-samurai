import React from "react";
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";

const Navbar = () => {
  return (
      <div className='navbar'>
          {}
          <nav className={s.nav}>
              <ul>
                  <li><NavLink className={s.link} to="/profile">Profile</NavLink></li>
                  <li><NavLink className={s.link} to="/dialogs">Messages</NavLink></li>
                  <li><NavLink className={s.link} to="/users">Users</NavLink></li>
                  <li><NavLink className={s.link} to="/news">News</NavLink></li>
                  <li><NavLink className={s.link} to="/music">Music</NavLink></li>
                  <li><NavLink className={s.link} to="/settings">Settings</NavLink></li>
              </ul>
          </nav>
      </div>
  )
}

export default Navbar