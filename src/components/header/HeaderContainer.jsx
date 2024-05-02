import React from 'react';
import s from './Header.module.css'
import logoImg from '../../assets/images/logo.png'
import Header from "./Header";
import {setAuthMeAC} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import axios from "axios";

class HeaderContainer extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true,
        })
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {email, id, login} = response.data.data
                    this.props.setAuthMeAC({email, id, login})
                }
            })
    }

    render() {
        return <Header {...this.state} isAuth={this.props.isAuth} data={this.props.data}/>
    }
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        data: state.auth.data,
    }
}

export default connect(mapStateToProps, {setAuthMeAC})(HeaderContainer)