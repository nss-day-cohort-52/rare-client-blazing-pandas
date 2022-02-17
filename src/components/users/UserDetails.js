import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getSingleUser } from "../Repos/UsersRepository"
import { HumanDate } from "../utils/HumanDate"

export const UserDetails = () => {
    const {userId} = useParams()
    const [user, setUser] = useState({})

    useEffect(()=> {
        getSingleUser(userId).then(setUser)
    },[])


    return <>
        <div>
            <text>test</text>
            <p>{`Username: ${user.user?.username}`}</p>
            {user.user?.image_url !== "" ? <img src={`${user.profile_image_url}`}/>:null}
            <p>{`Full Name: ${user.user?.first_name} ${user.user?.last_name}`}</p>
            <p>{`Bio: ${user.bio}`}</p>
            <p>{`Created On: ${user.user?.date_joined}`}</p>
        </div>
    </>
}