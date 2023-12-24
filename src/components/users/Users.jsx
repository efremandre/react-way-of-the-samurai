import React from "react";
import User from "./user/User";
import style from "./Users.module.css";

const Users = (props) => {

    let pagesCount = Math.ceil(props.totalCount / props.userCount);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(<li key={i} className={(props.pageNumber === i) ? 'active' : ''}
                       onClick={() => {
                           props.onChangePagesPagination(i)
                       }}>{i}</li>);
    }

    return (
        <>
            <div className={style.usersWrapper} >
                {props.isFetching ? <div className={style.preloader}>
                    <div className={style.preloaderWrappper}>
                        <div className={style.spinner}></div>
                    </div>
                </div> : null}
                <div className={style.users}>
                    {props.users.map(user => < User
                        key={user.id}
                        user={user}
                        setFollow={props.setFollow}
                        setUnFollow={props.setUnFollow}/>)}
                </div>
            </div>
            <ul className={style.paginationList}>
                {pages}
            </ul>
        </>
    )
}


export default Users;