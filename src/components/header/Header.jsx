import React from "react";
import s from './Header.module.css'

const Header = () => {
  return (
          <header className={`${s.header} header`}>
              <div className={s.logo}>
                  <img src="https://static.rfstat.com/logo-presets/2116/thumbnail_dddf4458299b_1x.webp" alt="Logo" width='100'/>
              </div>
              <h1 className={s.name}>&lt;My Connect/&gt;</h1>
          </header>
  )
}

export default Header