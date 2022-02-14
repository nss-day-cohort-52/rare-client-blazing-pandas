export const getUsers = () => {
    return fetch("http://localhost:8000/users")
        .then(res => res.json())
}
export const getSingleUser = (id) => {
    return fetch(`http://localhost:8000/users/${id}`)
        .then(res => res.json())
}

export const addUser = user => {
    return fetch("http://localhost:8000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    }).then(getUsers)
}