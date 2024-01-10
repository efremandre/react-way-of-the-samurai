import React from "react";
import s from './ProfileInfo.module.css'
import plugAvatar from "../../../assets/images/plugAvatar.jpg";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <div>Loading</div>
    }

    const setAvatar = (props.profile.photos.large === null) ? plugAvatar :
        props.profile.photos.large;
    const setAboutMe = (props.profile.aboutMe === null) ? null :
        <p>About Me: {props.profile.aboutMe}</p>

    return (
        <div className={s.profileInfo}>
            <div className={s.mainAvatar}>
                <img src={setAvatar} alt="Avatar"/>
            </div>
            <div className={s.bio}>
                <div className={s.name}>
                    {props.profile.fullName}
                    <div className={s.job}>{(!props.profile.lookingForAJob) ? <p>Loocking for Job</p> : null}</div>
                </div>
                <div className={s.status}>
                    {setAboutMe}

                </div>
                <div className={s.contacts}>
                    {(props.profile.contacts.github !== null) ? <a href={props.profile.contacts.github}>My GitHub</a> : null}
                    {(props.profile.contacts.facebook !== null) ? <a href={props.profile.contacts.facebook}>My Facebook</a> : null}
                    {(props.profile.contacts.website !== null) ? <a href={props.profile.contacts.website}>My Website</a> : null}
                    {(props.profile.contacts.vk !== null) ? <a href={props.profile.contacts.vk}>My VK</a> : null}
                    {(props.profile.contacts.twitter !== null) ? <a href={props.profile.contacts.twitter}>My Tw</a> : null}
                    {(props.profile.contacts.instagram !== null) ? <a href={props.profile.contacts.instagram}>My Inst</a> : null}
                    {(props.profile.contacts.youtube !== null) ? <a href={props.profile.contacts.youtube}>My YouTube</a> : null}
                    {(props.profile.contacts.mainLink !== null) ? <a href={props.profile.contacts.mainLink}>My MainLink</a> : null}
                </div>
            </div>
        </div>
    );
}

export default ProfileInfo