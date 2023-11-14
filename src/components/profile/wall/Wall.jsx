import React from "react";
import s from './wall.module.css'
import Post from "./post/Post";
import AddPost from "./addPost/AddPost";

const Wall = () => {
    return (
        <div className={s.wall}>
            <AddPost/>
            <div className={s.myPosts}>
                <Post name={'Kate'} post={'Hello'} avatar={'https://hi-news.ru/wp-content/uploads/2014/12/kosmonavt_luna_otdyh_1920x1200-650x406-1.jpg'}/>
                <Post name={'Tom'} post={'Hello 2'} avatar={'https://hi-news.ru/wp-content/uploads/2014/12/kosmonavt_luna_otdyh_1920x1200-650x406-1.jpg'}/>
                <Post name={'Dave'} post={'Hello 3'} avatar={'https://hi-news.ru/wp-content/uploads/2014/12/kosmonavt_luna_otdyh_1920x1200-650x406-1.jpg'}/>
            </div>
        </div>
    );
}

export default Wall