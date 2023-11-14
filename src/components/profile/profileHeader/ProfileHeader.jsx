import React from "react";
import s from './profileHeader.module.css'

const ProfileHeader = () => {
    return (
        <div className={s.profileHeader}>
            <img src="https://www.electronic-sirens.com/ru/wp-content/uploads/sites/8/2021/09/Yest-li-zvuk-v-kosmose-.jpg" alt="Spase"/>
        </div>
    );
}

export default ProfileHeader