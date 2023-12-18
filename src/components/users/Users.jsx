import React from "react";
import style from './Users.module.css'
import User from "./user/User";

const Users = ({
                   users,
                   setFollow,
                   setUnFollow
               }) => {
    return (
        <div>
            {users.map(user => < User user={user}
                                      setFollow={setFollow}
                                      setUnFollow={setUnFollow}/>)}
        </div>
    )
}

export default Users;