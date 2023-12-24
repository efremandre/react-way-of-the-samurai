import React from 'react';
import s from './Header.module.css'
import logoImg from '../../assets/images/logo.png'

const Header = () => {
  return (
          <header className={`${s.header} header`}>
              <div className={s.logo}>
                  <img src={logoImg} alt="Logo" width='100'/>
              </div>
              <h1 className={s.name}>&lt;My Connect/&gt;</h1>
          </header>
  )
}

export default Header