export const getPosts = () => {
    return fetch("http://localhost:8088/posts")
        .then(res => res.json())
}

export const addPost = post => {
    return fetch("http://localhost:8088/posts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(post)
    }).then(res => res.json())
}

export const getSinglePost = (postId) => {
    return fetch(`http://localhost:8088/posts/${postId}`)
            .then(res => res.json())
}

export const getPostsByUser = (user_id) => {
    return fetch(`http://localhost:8088/posts?user_id=${user_id}`)
        .then(res => res.json())
}

export const getPostsByCategory = (category_id) => {
    return fetch(`http://localhost:8088/posts?category_id=${category_id}`)
        .then(res => res.json())
}

export const delete_post = (id) => {
    return fetch(`http://localhost:8088/posts/${id}`, {method: 'DELETE'})}