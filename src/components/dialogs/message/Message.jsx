import React from "react";
import s from './../Dialogs.module.css'

const Message = ({message, clas}) => {

    return (
        <div className={(clas) ? `${s.message} ${s.meMessage}` : s.message}>{message}</div>
    )
}

export default Message