import React from "react";
import s from './Profile.module.css'
import ProfileHeader from "./profileHeader/ProfileHeader";
import ProfileInfo from "./profileInfo/ProfileInfo";
import WallContainer from "./wall/WallContainer";

const Profile = (props) => {
    return (
        <div className={s.profile}>
            {props.isFetching ? <div className="preloader">
                <div className="preloaderWrappper">
                    <div className="spinner"></div>
                </div>
            </div> : null}
            <ProfileHeader/>
            <ProfileInfo profile={props.profile}/>
            <WallContainer />
        </div>
    );
}

export default Profile