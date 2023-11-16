import React from "react";
import s from './Wall.module.css'
import Post from "./post/Post";
import AddPost from "./addPost/AddPost";

const Wall = () => {
    const posts = [
        {id: 1, name: 'Kate', like: 10, dislike: 0, text: 'Hi', image: 'https://hi-news.ru/wp-content/uploads/2014/12/kosmonavt_luna_otdyh_1920x1200-650x406-1.jpg'},
        {id: 2, name: 'Tom', like: 11, dislike: 5, text: 'Hello', image: 'https://hi-news.ru/wp-content/uploads/2014/12/kosmonavt_luna_otdyh_1920x1200-650x406-1.jpg'},
        {id: 3, name: 'Dave', like: 5, dislike: 2, text: '....', image: 'https://hi-news.ru/wp-content/uploads/2014/12/kosmonavt_luna_otdyh_1920x1200-650x406-1.jpg'}
    ]

    const postsElement = posts.map(post => <Post key={post.id} like={post.like} dislike={post.dislike}  name={post.name} post={post.text} avatar={post.image}/>)

    return (
        <div className={s.wall}>
            <AddPost/>
            <div className={s.myPosts}>
                {postsElement}
            </div>
        </div>
    );
}

export default Wall