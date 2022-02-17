import React, { useState, useEffect } from "react"
import { useHistory } from "react-router-dom"
import { getAuth } from "../auth/AuthManager"
import { getUsers } from "../Repos/UsersRepository"
import { User } from "./User"
import "./users.css"


export const UserList = () => {
    const [users, setUsers] = useState([])
    const [auth, setAuth] = useState({"auth":true})
    const syncUsers = () => {
        getUsers().then((userInfo) => setUsers(userInfo))
    }
    const history = useHistory()

    useEffect(() => {
        syncUsers()
        getAuth().then(res => setAuth(res.auth))
    }, [])
    useEffect(()=> {
        if (!auth.auth) {history.push('/')}
    }, [auth])

    return <section className="flexside">
        <div>
            <h3>Users</h3>
            {users?.map(user => <User key={`user_${user.id}`} user={user} />)}
        </div>
    </section>
}