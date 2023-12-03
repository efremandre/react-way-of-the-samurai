import React from "react";
import s from './Wall.module.css'
import Post from "./post/Post";
import AddPostContainer from "./addPost/AddPostContainer";

const Wall = ({
                  profilePage,
                  dispatch
              }) => {

    const postsElement = profilePage.posts.map(post => <Post key={post.id}
                                                 like={post.like}
                                                 dislike={post.dislike}
                                                 name={post.name}
                                                 post={post.text}
                                                 avatar={post.image}/>)
    return (
        <div className={s.wall}>
            <AddPostContainer newTextPost={profilePage.newTextPost}
                     dispatch={dispatch}/>
            <div className={s.myPosts}>
                {postsElement}
            </div>
        </div>
    );
}

export default Wall