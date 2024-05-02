import React from 'react';
import s from './Header.module.css'
import logoImg from '../../assets/images/logo.png'
import {NavLink} from "react-router-dom";

const Header = ({isAuth}) => {
  return (
          <header className={`${s.header} header`}>
              {(!isAuth) ? <NavLink to='/profile'>Login In</NavLink> :
                  <div className={s.logo}>
                  <img src={logoImg} alt="Logo" width='100'/>
              </div>}
              <h1 className={s.name}>&lt;My Connect/&gt;</h1>
          </header>
  )
}

export default Header