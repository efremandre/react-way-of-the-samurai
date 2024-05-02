import React from "react";
import {
    setFlag,
    setFollow,
    setPageNumber,
    setTotalCount,
    setUnFollow,
    setUsers,
    toggleFetching,
    togglePaginationNumber
} from "../../redux/users-reducer";
import {connect} from "react-redux";
import axios from "axios";
import Users from "./Users";

class UsersAPI extends React.Component {
    componentDidMount() {
        this.props.toggleFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.pageNumber}&count=${this.props.userCount}`, {
                withCredentials: true
            })
            .then(response => {
                this.props.toggleFetching(false);
                this.props.setUsers(response.data.items);
                this.props.setTotalCount(response.data.totalCount);
            })
    }

    onChangePagesPagination = (pageNumber) => {
        this.props.toggleFetching(true);
        this.props.setPageNumber(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.userCount}`, {
                withCredentials: true
            })
            .then(response => {
                this.props.toggleFetching(false);
                this.props.setUsers(response.data.items);
            })
    }

    getPaginationButtons = (startPeriod, endPeriod) => {
        this.props.togglePaginationNumber(startPeriod, endPeriod)
    }

    getFlag = (flagPositionPagiantion) => {
        this.props.setFlag(flagPositionPagiantion)
    }

    render() {

        return <Users users={this.props.users}
                      totalCount={this.props.totalCount}
                      userCount={this.props.userCount}
                      pageNumber={this.props.pageNumber}
                      onChangePagesPagination={this.onChangePagesPagination}
                      getPaginationButtons={this.getPaginationButtons}
                      getFlag={this.getFlag}
                      setFollow={this.props.setFollow}
                      setUnFollow={this.props.setUnFollow}
                      isFetching={this.props.isFetching}
                      displayedSpan={this.props.displayedSpan}
                      startPeriod={this.props.startPeriod}
                      flagPositionPagiantion={this.props.flagPositionPagiantion}/>
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPages.users,
        pageNumber: state.usersPages.pageNumber,
        userCount: state.usersPages.userCount,
        totalCount: state.usersPages.totalCount,
        isFetching: state.usersPages.isFetching,
        displayedSpan: state.usersPages.pagination.displayedSpan,
        startPeriod: state.usersPages.pagination.startPeriod,
        flagPositionPagiantion: state.usersPages.pagination.flagPositionPagiantion,
    }
}

const UsersContainer = connect(mapStateToProps, {
    setFollow, setUnFollow, setUsers, setPageNumber, setTotalCount, toggleFetching, togglePaginationNumber, setFlag
}) (UsersAPI);
export default UsersContainer;