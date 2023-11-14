import s from "./addPost.module.css";
import React from "react";

const AddPost = () => {
    return (
        <div className={s.addpost}>
            <form action="#">
                <input type="text"/>
                <button type="submit">Отправить</button>
            </form>
        </div>
    );
}

export default AddPost