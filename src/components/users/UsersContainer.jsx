import React from "react";
import {
    setFollow,
    setPageNumber,
    setTotalCount,
    setUnFollow,
    setUsers,
    toggleFetching
} from "../../redux/users-reducer";
import {connect} from "react-redux";
import axios from "axios";
import Users from "./Users";

class UsersAPI extends React.Component {
    componentDidMount() {
        this.props.toggleFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.pageNumber}&count=${this.props.userCount}`)
            .then(response => {
                this.props.toggleFetching(false);
                this.props.setUsers(response.data.items);
                this.props.setTotalCount(response.data.totalCount);
            })
    }

    onChangePagesPagination = (pageNumber) => {
        this.props.toggleFetching(true);
        this.props.setPageNumber(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.userCount}`)
            .then(response => {
                this.props.toggleFetching(false);
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
                      setUnFollow={this.props.setUnFollow}
                      isFetching={this.props.isFetching}/>
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPages.users,
        pageNumber: state.usersPages.pageNumber,
        userCount: state.usersPages.userCount,
        totalCount: state.usersPages.totalCount,
        isFetching: state.usersPages.isFetching,
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         setFollow: (userId) => {
//             dispatch(followingtActionCreation(userId))
//         },
//         setUnFollow: (userId) => {
//             dispatch(unfollowingtActionCreation(userId))
//         },
//         setUsers: (users) => {
//             dispatch(setUsersActionCreation(users))
//         },
//         setPageNumber: (pageNumber) => {
//             dispatch(setPageNumberActionCreation(pageNumber))
//         },
//         setTotalCount: (totalCount) => {
//             dispatch(setTotalCountActionCreation(totalCount))
//         },
//         toggleFetching: (isFetching) => {
//             dispatch(toggleFetchingActionCreation(isFetching))
//         },
//     }
// }

const UsersContainer = connect(mapStateToProps, {
    setFollow, setUnFollow, setUsers, setPageNumber, setTotalCount, toggleFetching,
}) (UsersAPI);
export default UsersContainer;