export const getPosts = () => {
    return fetch("http://localhost:8000/posts",{
        headers: {
            "Content-Type": "application/json", 
            "Authorization": `Token ${localStorage.getItem("token")}`
        },
    })
        .then(res => res.json())
}

export const addPost = post => {
    return fetch("http://localhost:8000/posts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json", 
            "Authorization": `Token ${localStorage.getItem("token")}`
        },
        body: JSON.stringify(post)
    }).then(res => res.json())
}

export const getSinglePost = (postId) => {
    return fetch(`http://localhost:8000/posts/${postId}`, {
        headers: {
            "Content-Type": "application/json", 
            "Authorization": `Token ${localStorage.getItem("token")}`
        },
    })
            .then(res => res.json())
}

export const getPostsByUser = (user_id) => {
    return fetch(`http://localhost:8000/posts?user_id=${user_id}`, {
        headers: {
            "Content-Type": "application/json", 
            "Authorization": `Token ${localStorage.getItem("token")}`
        },
    })
        .then(res => res.json())
}

export const getPostsByCategory = (category_id) => {
    return fetch(`http://localhost:8000/posts?category_id=${category_id}`, {
        headers: {
            "Content-Type": "application/json", 
            "Authorization": `Token ${localStorage.getItem("token")}`
        },
    })
        .then(res => res.json())
}

export const delete_post = (id) => {
    return fetch(`http://localhost:8000/posts/${id}`, {
        method: 'DELETE',
        headers: {
            "Content-Type": "application/json", 
            "Authorization": `Token ${localStorage.getItem("token")}`
        }})}