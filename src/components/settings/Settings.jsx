import React from "react";
import s from './Settings.module.css'

const Settings = () => {
    return (
        <div className={s.settings}>
            <h2>Settings Page</h2>
            <div className={s.image}>
                <img src="https://kartinki.pics/pics/uploads/posts/2022-09/thumbs/1663011907_5-kartinkin-net-p-kotenok-za-kompyuterom-instagram-5.jpg" alt="Cat"/>
            </div>
        </div>
    );
}

export default Settings