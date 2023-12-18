import React from "react";
import User from "./user/User";
import axios from "axios";

const Users = ({
                   users,
                   setFollow,
                   setUnFollow,
                   setUsers
               }) => {

    if (users.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                setUsers(response.data.items)
            })
    }

    return (
        <div>
            {users.map(user => < User user={user}
                                      setFollow={setFollow}
                                      setUnFollow={setUnFollow}/>)}
        </div>
    )
}

export default Users;