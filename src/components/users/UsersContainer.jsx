import React from "react";
import {followingtActionCreation, unfollowingtActionCreation} from "../../redux/users-reducer";
import {connect} from "react-redux";
import Users from "./Users";

const mapStateToProps = (state) => {
    return {
        users: state.usersPages.users,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setFollow: (userId) => {
            dispatch(followingtActionCreation(userId))
        },
        setUnFollow: (userId) => {
            dispatch(unfollowingtActionCreation(userId))
        },
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps) (Users);
export default UsersContainer;