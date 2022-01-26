export const getUsers = () => {
    return fetch("http://localhost:8088/users")
        .then(res => res.json())
}

export const addUser = user => {
    return fetch("http://localhost:8088/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    }).then(getUsers)
}