// import { useEffect, useState } from "react"

// export const getCategories = () => {
// const [categories, setCategories] = useState([])
//     useEffect(
//         () => {
//             fetch("http://localhost:8088/categories")
//                 .then(res => res.json())
//                 .then((categories) => {
//                     setCategories(categories)
//                 })

//         },[]
//     )
// }


export const getCategories = () => {
    return fetch("http://localhost:8088/categories")
        .then(res => res.json())
}

export const addCategory = category => {
    return fetch("http://localhost:8088/categories", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(category)
    }).then(getCategories)
}

export const getPostsByCategory = (id) => {
    return fetch(`http://localhost:8088/posts?category_id=${id}`)
    .then(res => res.json())
}
