import React from "react";
import {
    onchangeInputMessageActionCreation,
    submitMessageActionCreation
} from "../../../redux/dialogs-reducer";
import SubmitMessage from "./SubmitMessage";

const SubmitMessageContainer = ({
                           dialogsPage,
                           dispatch
                       }) => {

    const changeInput = (valueTextArea) => {
        let action = onchangeInputMessageActionCreation(valueTextArea);
        dispatch(action);
    }

    const submitMessage = () => {
        let action = submitMessageActionCreation();
        dispatch(action);
    }

    return (
        <SubmitMessage dialogsPage={dialogsPage}
                       submitMessage={submitMessage}
                       changeInput={changeInput}/>
    );
}

export default SubmitMessageContainer