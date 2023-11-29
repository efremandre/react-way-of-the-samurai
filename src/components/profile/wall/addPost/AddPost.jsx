import s from "./AddPost.module.css";
import React from "react";
import {
    addPostActionCreation,
    onchangeInputPostActionCreation
} from "../../../../redux/profile-reducer.js";

const AddPost = ({
                     dispatch,
                     newTextPost
                 }) => {

    let textArea = React.createRef()
    const setChange = () => {
        let text = textArea.current.value;
        const onchangeInputPost = onchangeInputPostActionCreation(text);
        dispatch(onchangeInputPost);
    }

    const newPost = () => {
        const addPost = addPostActionCreation()
        dispatch(addPost);
        textArea.current.value = '';
    }

    return (
        <div className={s.addpost}>
            <textarea className={s.input}
                      onChange={setChange}
                      ref={textArea}
                      value={newTextPost}
                      rows="2"
                      placeholder='Write new Post...'/>
            <button className={s.button}
                    onClick={newPost}>Enter
            </button>
        </div>
    );
}

export default AddPost