import React from "react";
import s from './Profile.module.css'
import ProfileHeader from "./profileHeader/ProfileHeader";
import ProfileInfo from "./profileInfo/ProfileInfo";
import WallContainer from "./wall/WallContainer";
import StoreContext from "../../StoreContext";

const Profile = () => {
    return (
        <div className={s.profile}>
            <ProfileHeader/>
            <ProfileInfo/>
            <StoreContext.Consumer>
                {store => (
                    <WallContainer profilePage={store.getState().profilePage}/>
                )}
            </StoreContext.Consumer>
        </div>
    );
}

export default Profile