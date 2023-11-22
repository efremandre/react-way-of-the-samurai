import React from "react";
import s from './Profile.module.css'
import ProfileHeader from "./profileHeader/ProfileHeader";
import ProfileInfo from "./profileInfo/ProfileInfo";
import Wall from "./wall/Wall";

const Profile = ({
                     profilePage,
                     addPost,
                     changeInputPost
                 }) => {

    return (
        <div className={s.profile}>
            <ProfileHeader/>
            <ProfileInfo/>
            <Wall profilePage={profilePage}
                  addPost={addPost}
                  changeInputPost={changeInputPost}/>
        </div>
    );
}

export default Profile