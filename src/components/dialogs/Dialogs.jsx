import React from "react";
import s from './Dialogs.module.css'
import Message from "./message/Message";
import User from "./user/User";

const Dialogs = ({dialogs, messages}) => {

    const dialogsElements = dialogs.map (user => <User key={user.id} name={user.name} id={user.id}/>)
    const messagesElements = messages.map (message => <Message key={message.message} message={message.message}/>)

    return (
        <div className={s.dialogs}>
            <h2>Dialogs</h2>
            <div className={s.wrapper}>
                <div className={s.usersDialogs}>
                    {dialogsElements}
                </div>
                <div className={s.chat}>
                    {messagesElements}
                </div>
            </div>
        </div>
    );
}

export default Dialogs