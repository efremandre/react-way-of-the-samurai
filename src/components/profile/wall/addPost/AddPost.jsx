import s from "./AddPost.module.css";
import React from "react";

const AddPost = () => {
    return (
        <div className={s.addpost}>
            <form action="#">
                <textarea cols="30" rows="3"></textarea>
                <button type="submit">Отправить</button>
            </form>
        </div>
    );
}

export default AddPost