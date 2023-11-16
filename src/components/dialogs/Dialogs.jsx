import React from "react";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const User = ({name, id}) => {
    let path = `/dialogs/${id}`
    return (
        <div className={`${s.user} ${s.active}`}>
            <NavLink to={path}>{name}</NavLink>
        </div>
    )
}

const Message = ({message}) => {
    return (
        <div className={s.message}>{message}</div>
    )
}

const Dialogs = () => {
    const users = [
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

    return (
        <div className={s.dialogs}>
            <h2>Dialogs</h2>
            <div className={s.wrapper}>
                <div className={s.usersDialogs}>
                    <User name={users[0].name} id={users[0].id}/>
                    <User name={users[1].name} id={users[1].id}/>
                    <User name={users[2].name} id={users[2].id}/>
                    <User name={users[3].name} id={users[3].id}/>
                    <User name={users[4].name} id={users[4].id}/>
                    <User name={users[5].name} id={users[5].id}/>
                </div>
                <div className={s.chat}>
                    <Message message={messages[0].message}/>
                    <Message message={messages[1].message}/>
                    <Message message={messages[2].message}/>
                    <Message message={messages[3].message}/>
                </div>
            </div>
        </div>
    );
}

export default Dialogs