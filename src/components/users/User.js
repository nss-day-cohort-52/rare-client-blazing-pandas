import { Link, useHistory } from "react-router-dom"

export const User = ({user}) => {
    return <>
        <div>
            <Link to={`/Users/${user.id}`}>{`${user.username}`}</Link> 
            <p>{`First Name: ${user.first_name} Last Name: ${user.last_name}`}</p>
        </div>
    </>
}