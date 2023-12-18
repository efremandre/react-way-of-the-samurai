import React from "react";
import {
    followingtActionCreation,
    setUsersActionCreation,
    unfollowingtActionCreation
} from "../../redux/users-reducer";
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
        setUsers: (users) => {
            dispatch(setUsersActionCreation(users))
        },
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps) (Users);
export default UsersContainer;