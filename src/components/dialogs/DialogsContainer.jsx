import React from "react";
import s from './Dialogs.module.css'
import Message from "./message/Message";
import User from "./user/User";
import SubmitMessageContainer from "./submit-message/SubmitMessageContainer";
import StoreContext from "../../StoreContext";

const DialogsContainer = () => {

    return (
        <StoreContext.Consumer>
            {(store) => {
                const dialogsElements = store.getState().dialogsPage.dialogs.map(user => <User key={user.id}
                                                                              name={user.name}
                                                                              id={user.id}/>)

                const messagesElements = store.getState().dialogsPage.messages.map(message => <Message key={message.message}
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
                                <SubmitMessageContainer dialogsPage={store.getState().dialogsPage}
                                                        dispatch={store.dispatch}/>
                            </div>
                        </div>
                    </div>
                )
            }
            }
        </StoreContext.Consumer>
    );
}

export default DialogsContainer