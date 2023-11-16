import React from "react";
import s from './Dialogs.module.css'
import Message from "./message/Message";
import User from "./user/User";

const Dialogs = () => {
    const dialogs = [
        {id: 1, name: 'Viktor'},
        {id: 2, name: 'Sveta'},
        {id: 3, name: 'Anna'},
        {id: 4, name: 'Valera'},
        {id: 5, name: 'Dima'},
        {id: 6, name: 'Sergey'}
    ]

    const messages = [
        {id: 1, message: 'Yo'},
        {id: 2, message: 'hi!'},
        {id: 3, message: 'How are you?'},
        {id: 4, message: 'fine and you?'},
    ]

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