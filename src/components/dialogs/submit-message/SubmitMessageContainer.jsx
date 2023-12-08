import React from "react";
import {
    onchangeInputMessageActionCreation,
    submitMessageActionCreation
} from "../../../redux/dialogs-reducer";
import SubmitMessage from "./SubmitMessage";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeInput: (valueTextArea) => {
            let action = onchangeInputMessageActionCreation(valueTextArea);
            dispatch(action);
        },
        submitMessage: () => {
            let action = submitMessageActionCreation();
            dispatch(action);
        }
    }
}

const SubmitMessageContainer = connect(mapStateToProps, mapDispatchToProps) (SubmitMessage);

export default SubmitMessageContainer