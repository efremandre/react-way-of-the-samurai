import React from "react";
import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div className={s.profileInfo}>
            <div className={s.mainAvatar}><img
                src=""
                alt="Avatar"/></div>
            <div className="name">Andrew E.</div>
        </div>
    );
}

export default ProfileInfo