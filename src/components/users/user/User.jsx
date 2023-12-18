import React from "react";
import style from './User.module.css';

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

    return (
        <div key={user.id} className={style.userWrapper}>
            <div className={style.column}>
                <div className={style.avatarWrapper}>
                    <img src={user.avatarUrl} alt={user.name}/>
                </div>
            </div>
            <div className={style.column}>
                <div className={style.infoOfUser}>
                    <div className={style.nameWrapper}>
                        <span>{user.name} </span>
                        <span>{user.surname}</span>
                    </div>
                    <div className={style.placeWrapper}>
                        <span>{user.placeFrom.city}, </span>
                        <span>{user.placeFrom.country}</span>
                    </div>
                </div>
                <div className={style.statusWrapper}>
                    <p>"{user.status}"</p>
                </div>
                <div className={style.btnWrapper}>
                    <div className={style.followingBtn}>
                        {(user.following) ? <button className="red"  onClick={unFollow}>Unfollow</button> :
                            <button className="green" onClick={follow}>Follow</button>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default User;