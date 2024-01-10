import React from "react";
import style from './User.module.css';
import plugAvatar from '../../../assets/images/plugAvatar.jpg'
import {NavLink} from "react-router-dom";

const User = ({
                  user,
                  setFollow,
                  setUnFollow
              }) => {

    const follow = () => {
        setFollow(user.id)
    }

    const unFollow = () => {
        setUnFollow(user.id)
    }

    const setAvatar = (user.photos.large === null) ? plugAvatar :
        user.photos.large;

    const setStatus = (user.status === null) ? '' :
        `"${user.status}"`;

    return (

            <div className={style.userWrapper}>
                <div className={style.column}>
                    <div className={style.avatarWrapper}>
                        <img width={50} src={setAvatar} alt={user.name}/>
                    </div>
                </div>
                <div className={style.column}>
                    <div className={style.infoOfUser}>
                        <div className={style.nameWrapper}>
                            <span>{user.name}</span>
                        </div>
                        <NavLink className={style.userLink} to={'/profile/' + user.id} >Go to Profile</NavLink>
                        <div className={style.placeWrapper}>
                            {/*<span>{"user.placeFrom.city"}, </span>*/}
                            {/*<span>{"user.placeFrom.country"}</span>*/}
                        </div>
                    </div>
                    <div className={style.statusWrapper}>
                        <p>{setStatus}</p>
                    </div>
                    <div className={style.btnWrapper}>
                        <div className={style.followingBtn}>
                            {(user.following) ? <button className="red" onClick={unFollow}>Unfollow</button> :
                                <button className="green" onClick={follow}>Follow</button>}
                        </div>
                    </div>
                </div>
            </div>

    )
}

export default User;