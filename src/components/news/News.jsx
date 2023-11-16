import React from "react";
import s from './News.module.css'

const News = () => {
    return (
        <div className={s.news}>
            <h2>News Page</h2>
            <div className={s.image}>
                <img src="https://www.marimedia.ru/media/news/147038/1318e92b889a15be8777484dcfc83483.jpg" alt="Cat"/>
            </div>
        </div>
    );
}

export default News