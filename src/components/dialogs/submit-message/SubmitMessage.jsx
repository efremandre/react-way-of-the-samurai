import React from "react";
import s from './SubmitMessage.module.css'

const SubmitMessage = ({
                           dialogsPage,
                           changeInput,
                           submitMessage
                       }) => {


    let textArea = React.createRef()

    const onChangeInput = () => {
        let valueTextArea = textArea.current.value;
        changeInput(valueTextArea);
    }

    const onSubmitMessage = () => {
        submitMessage();
    }

    return (
        <div className={s.addMessage}>
                        <textarea className={s.input}
                                  onChange={onChangeInput}
                                  ref={textArea}
                                  placeholder='Write message...'
                                  value={dialogsPage.newTextMessage}
                                  rows="3"/>
            <button className={s.button}
                    onClick={onSubmitMessage}>Submit
            </button>
        </div>
    );
}

export default SubmitMessage