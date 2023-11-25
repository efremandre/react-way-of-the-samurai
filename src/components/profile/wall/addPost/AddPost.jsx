import s from "./AddPost.module.css";
import React from "react";

const AddPost = ({
                     dispatch,
                     newTextPost
                 }) => {

    let textArea = React.createRef()
    const setChange = () => {
        let text = textArea.current.value;
        dispatch({
            type: 'ONCHANGE-INPUT-POST',
            text: text
        });
    }

    const newPost = () => {
        dispatch({type: 'ADD-NEW-POST'});
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