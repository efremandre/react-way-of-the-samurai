import React from "react";
import s from './Music.module.css'

const Music = () => {
    return (
        <div className={s.music}>
            <h2>Music Page</h2>
            <div className={s.image}>
                <img src="https://avatars.dzeninfra.ru/get-zen_doc/1855206/pub_5f0ea5b156213a00254c5254_5f0ea66beab2774149bd7589/scale_1200" alt="Cat"/>
            </div>
        </div>
    );
}

export default Music