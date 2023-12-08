import React from "react";
import s from './Dialogs.module.css'
import Message from "./message/Message";
import User from "./user/User";
import SubmitMessageContainer from "./submit-message/SubmitMessageContainer";

const Dialogs = ({ dialogsPage }) => {

    const dialogsElements = dialogsPage.dialogs.map(user => <User key={user.id}
                                                                  name={user.name}
                                                                  id={user.id}/>)

    const messagesElements = dialogsPage.messages.map(message => <Message key={message.message}
                                                                          message={message.message}
                                                                          clas={message?.class}/>)

    return (
        <div className={s.dialogs}>
            <h2>Dialogs</h2>
            <div className={s.wrapper}>
                <div className={s.usersDialogs}>
                    {dialogsElements}
                </div>
                <div className={s.chat}>
                    <div className={s.chatMessage}>
                        {messagesElements}
                    </div>
                    <SubmitMessageContainer />
                </div>
            </div>
        </div>
    );
}

export default Dialogs