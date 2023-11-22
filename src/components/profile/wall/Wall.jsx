import React from "react";
import s from './Wall.module.css'
import Post from "./post/Post";
import AddPost from "./addPost/AddPost";

const Wall = ({
                  profilePage,
                  addPost,
                  changeInputPost
              }) => {

    const postsElement = profilePage.posts.map(post => <Post key={post.id}
                                                 like={post.like}
                                                 dislike={post.dislike}
                                                 name={post.name}
                                                 post={post.text}
                                                 avatar={post.image}/>)
    return (
        <div className={s.wall}>
            <AddPost addPost={addPost}
                     changeInputPost={changeInputPost}
                     newTextPost={profilePage.newTextPost}/>
            <div className={s.myPosts}>
                {postsElement}
            </div>
        </div>
    );
}

export default Wall