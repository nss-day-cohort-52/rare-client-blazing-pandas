import React, { useState, useEffect } from "react"
import { getAuth } from "../auth/AuthManager"
import { getUsers } from "../Repos/UsersRepository"
import { User } from "./User"
import "./users.css"


export const UserList = () => {
    const [users, setUsers] = useState([])
    const [isAdmin, setAdmin] = useState(false)
    const syncUsers = () =>{
        getUsers().then((userInfo) => setUsers(userInfo))
    }

    useEffect(() => {
        syncUsers()
        getAuth().then(setAdmin)
    }, [])

    return <section className="flexside">
        <div>
            <h3>Users</h3>
            {users.map(user => <User key={`user_${user.id}`} user={user} />)}
        </div>
    </section>
}