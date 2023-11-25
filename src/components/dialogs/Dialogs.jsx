import React from "react";
import s from './Dialogs.module.css'
import Message from "./message/Message";
import User from "./user/User";

const Dialogs = ({
                     dialogsPage,
                     dispatch
                 }) => {

    const dialogsElements = dialogsPage.dialogs.map(user => <User key={user.id}
                                                                  name={user.name}
                                                                  id={user.id}/>)
    const messagesElements = dialogsPage.messages.map(message => <Message key={message.message}
                                                                          message={message.message}
                                                                          clas={message?.class}/>)

    let textAreaValue = React.createRef()

    const setChange = () => {
        let text = textAreaValue.current.value;
        dispatch({
            type: 'ONCHANGE-INPUT-MESSAGE',
            text: text
        });
    }

    const addMessage = () => {
        dispatch({type: 'SUBMIT-MESSAGE'});
    }

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
                    <div className={s.addMessage}>
                        <textarea className={s.input}
                                  onChange={setChange}
                                  ref={textAreaValue}
                                  placeholder='Write message...'
                                  value={dialogsPage.newTextMessage}
                                  rows="3"/>
                        <button className={s.button}
                                onClick={addMessage}>Submit
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dialogs