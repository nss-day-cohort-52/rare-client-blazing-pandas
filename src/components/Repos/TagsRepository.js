export const getTags = () => {
    return fetch("http://localhost:8000/tags")
        .then(res => res.json())
}

export const addTag = tag => {
    return fetch("http://localhost:8000/tags", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(tag)
    }).then(getTags)
}

export const addPostTag = postTag => {
    return fetch("http://localhost:8000/postTags", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(postTag)
    }).then(getTags)
}