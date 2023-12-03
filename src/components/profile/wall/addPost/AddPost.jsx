import s from "./AddPost.module.css";
import React from "react";

const AddPost = ({
                     setChange,
                     newPost,
                     newTextPost
                 }) => {

    let textArea = React.createRef()
    const onSetChange = () => {
        let text = textArea.current.value;
        setChange(text);
    }

    const onNewPost = () => {
        newPost();
    }

    return (
        <div className={s.addpost}>
            <textarea className={s.input}
                      onChange={onSetChange}
                      ref={textArea}
                      value={newTextPost}
                      rows="2"
                      placeholder='Write new Post...'/>
            <button className={s.button}
                    onClick={onNewPost}>Enter
            </button>
        </div>
    );
}

export default AddPost