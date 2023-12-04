import React from "react";
import {
    addPostActionCreation,
    onchangeInputPostActionCreation
} from "../../../../redux/profile-reducer.js";
import AddPost from "./AddPost";

const AddPostContainer = ({
                     dispatch,
                     newTextPost
                 }) => {

    const setChange = (text) => {
        const onchangeInputPost = onchangeInputPostActionCreation(text);
        dispatch(onchangeInputPost);
    }

    const newPost = () => {
        const addPost = addPostActionCreation()
        dispatch(addPost);
    }
    return (<AddPost setChange={setChange} newPost={newPost} newTextPost={newTextPost}/>);
}

export default AddPostContainer