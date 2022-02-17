import { Link, useHistory } from "react-router-dom"

export const User = ({user}) => {
    return <>
        <div className="userbox">
            <Link to={`/Users/${user.user.id}`}>{`${user.user.username}`}</Link> 
            <p>{`Name: ${user.user.first_name} ${user.user.last_name}`}</p>
            <p>{`Role: ${user.user.is_staff ? "Admin":"User"}`}</p>
        </div>
    </>
}