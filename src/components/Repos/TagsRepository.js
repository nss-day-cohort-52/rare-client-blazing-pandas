export const getTags = () => {
    return fetch("http://localhost:8000/tags",{
        headers: {
            "Authorization": `Token ${localStorage.getItem("token")}`
        }
    })
        .then(res => res.json())
}

export const addTag = tag => {
    return fetch("http://localhost:8000/tags", {
        method: "POST",
        headers: {
            "Authorization": `Token ${localStorage.getItem("token")}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(tag)
    }).then(getTags)
}

export const addPostTag = postTag => {
    return fetch("http://localhost:8000/postTags", {
        method: "POST",
        headers: {
            "Authorization": `Token ${localStorage.getItem("token")}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(postTag)
    }).then(getTags)
}
export const editTag = tag => {
    return fetch(`http://localhost:8000/tags/${tag.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Token ${localStorage.getItem("token")}`
        },
        body: JSON.stringify(tag)
    })
}

export const deleteTag = (id) => {
    return fetch(`http://localhost:8000/tags/${id}`, {
        method: "DELETE",
        headers: {
            "Authorization": `Token ${localStorage.getItem("token")}`
        }
    })
}