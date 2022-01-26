export const User = ({user}) => {
    return <>
        <div>
            <text>{`Username: ${user.username} First Name: ${user.first_name} Last Name: ${user.last_name}`}</text>
        </div>
    </>
}