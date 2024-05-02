import React from "react";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUsersProfile} from "../../redux/profile-reducer";
import {toggleFetching} from "../../redux/users-reducer";
import {useParams} from "react-router-dom";

export function withRouter(Children){
    return(props)=>{
        const match  = {params: useParams()};
        return <Children {...props}  match={match}/>
    }
}

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId

        if (!userId) userId = 9707

        this.props.toggleFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(response => {
                this.props.setUsersProfile(response.data);
                this.props.toggleFetching(false);
            })
    }

    render() {
        return <Profile {...this.props}
                        profile={this.props.profile}
                        isFetching={this.props.isFetching}
                        isAuth={this.props.isAuth}/>
    }
}

const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        isFetching: state.usersPages.isFetching,
        isAuth: state.auth.isAuth,
    }
}

const WhitsUrlContainerComponent = withRouter(ProfileContainer)
export default connect(mapStateToProps, {setUsersProfile, toggleFetching})(WhitsUrlContainerComponent)