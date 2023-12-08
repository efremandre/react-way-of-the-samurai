import React from "react";
import Wall from "./Wall";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage,
    }
}

const WallContainer = connect(mapStateToProps) (Wall);

export default WallContainer