import React from "react";
import {
    addPostActionCreation,
    onchangeInputPostActionCreation
} from "../../../../redux/profile-reducer.js";
import AddPost from "./AddPost";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        newTextPost: state.profilePage.newTextPost,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        setChange: (text) => {
            const onchangeInputPost = onchangeInputPostActionCreation(text);
            dispatch(onchangeInputPost);
        },
        newPost: () => {
            const addPost = addPostActionCreation()
            dispatch(addPost);
        },
    }
}

const AddPostContainer = connect(mapStateToProps, mapDispatchToProps) (AddPost);

export default AddPostContainer