import React from "react";
import User from "./user/User";
import style from "./Users.module.css";

const Users = (props) => {

    let pagesCount = Math.ceil(props.totalCount / props.userCount);
    let maxFlagCurrent = pagesCount / 10
    let flagPositionPagiantion = props.flagPositionPagiantion
    let startPeriod = props.startPeriod
    let endPeriod = props.displayedSpan
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(<li key={i} className={(props.pageNumber === i) ? 'active' : ''}
                       onClick={() => {
                           props.onChangePagesPagination(i)
                       }}>{i}</li>);
    }


    const lastNumber = pages.pop()
    let paginationNumber = pages.slice(startPeriod, endPeriod)

    const prevSetPagination = () => {
        flagPositionPagiantion-=1
        startPeriod -= 10
        endPeriod -= 10
        props.getFlag(flagPositionPagiantion)
        props.getPaginationButtons(startPeriod, endPeriod)
    }

    const nextSetPagination = () => {
        flagPositionPagiantion+=1
        startPeriod += 10
        endPeriod += 10
        props.getFlag(flagPositionPagiantion)
        props.getPaginationButtons(startPeriod, endPeriod)
    }

    return (
        <>
            <div className={style.usersWrapper}>
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
            <div className={style.paginationWrapper}>
                {(flagPositionPagiantion <= 0) ?
                    null :
                    <button onClick={prevSetPagination}>-10</button>
                }
                <ul className={style.paginationList}>
                    {paginationNumber} ... {lastNumber}
                </ul>
                {(flagPositionPagiantion >= maxFlagCurrent) ?
                    null :
                    <button onClick={nextSetPagination}>+10</button>
                }
            </div>
        </>
    )
}


export default Users;