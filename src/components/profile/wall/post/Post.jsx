import s from "./Post.module.css";
import React from "react";

const Post = ({name, avatar, post, like, dislike}) => {
    return (
        <div className={s.post}>
            <div className={s.postBody}>
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
            <div className={s.reaction}>
                <button className={s.like}>like {like}</button>
                <button className={s.dislike}>dislike {dislike}</button>
            </div>
        </div>
    );
}

export default Post