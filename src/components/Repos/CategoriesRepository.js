export const getCategories = () => {
    return fetch("http://localhost:8000/categories", {
        method: "GET",
        headers:{
            "Authorization": `Token ${localStorage.getItem("token")}`
        }
    })
        .then(res => res.json())
}

export const addCategory = category => {
    return fetch("http://localhost:8000/categories", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Token ${localStorage.getItem("token")}`
        },
        body: JSON.stringify(category)
    }).then(getCategories)
}

export const getPostsByCategory = (id) => {
    return fetch(`http://localhost:8000/posts?category_id=${id}`)
    .then(res => res.json())
}
