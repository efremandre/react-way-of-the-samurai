import React from "react";
import {
    followingtActionCreation, setPageNumberActionCreation, setTotalCountActionCreation,
    setUsersActionCreation,
    unfollowingtActionCreation
} from "../../redux/users-reducer";
import {connect} from "react-redux";
import axios from "axios";
import Users from "./Users";

class UsersAPI extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.pageNumber}&count=${this.props.userCount}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalCount(response.data.totalCount);
            })
    }

    onChangePagesPagination = (pageNumber) => {
        this.props.setPageNumber(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.userCount}`)
            .then(response => {
                this.props.setUsers(response.data.items);
            })
    }

    render() {

        return <Users users={this.props.users}
                      totalCount={this.props.totalCount}
                      userCount={this.props.userCount}
                      pageNumber={this.props.pageNumber}
                      onChangePagesPagination={this.onChangePagesPagination}
                      setFollow={this.props.setFollow}
                      setUnFollow={this.props.setUnFollow}/>
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPages.users,
        pageNumber: state.usersPages.pageNumber,
        userCount: state.usersPages.userCount,
        totalCount: state.usersPages.totalCount,
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
        setPageNumber: (pageNumber) => {
            dispatch(setPageNumberActionCreation(pageNumber))
        },
        setTotalCount: (totalCount) => {
            dispatch(setTotalCountActionCreation(totalCount))
        },
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps) (UsersAPI);
export default UsersContainer;