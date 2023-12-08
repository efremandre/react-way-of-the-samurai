import React from "react";
import s from './Profile.module.css'
import ProfileHeader from "./profileHeader/ProfileHeader";
import ProfileInfo from "./profileInfo/ProfileInfo";
import WallContainer from "./wall/WallContainer";

const Profile = () => {
    return (
        <div className={s.profile}>
            <ProfileHeader/>
            <ProfileInfo/>
            <WallContainer />
        </div>
    );
}

export default Profile