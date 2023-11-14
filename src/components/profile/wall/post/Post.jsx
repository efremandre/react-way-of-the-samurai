import s from "./post.module.css";
import React from "react";

const Post = ({name, avatar, post}) => {
    return (
        <div className={s.post}>
            <div className={s.info}>
                <div className={s.avatar}>
                    <img src={avatar} alt={name}/>
                </div>
                <div className={s.name}>
                    <p>{name}</p>
                </div>
            </div>
            <div className={s.postValue}>
                <p>{post}</p>
            </div>
        </div>
    );
}

export default Post