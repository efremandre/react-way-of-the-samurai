import React from "react";
import s from './profileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div className={s.profileInfo}>
            <div className={s.mainAvatar}><img
                src="https://krd.mir-kvestov.ru/uploads/quests/7110/large/notreal_kosmos_photo1.jpg?1692275778"
                alt="Avatar"/></div>
            <div className="name">Andrew E.</div>
        </div>
    );
}

export default ProfileInfo