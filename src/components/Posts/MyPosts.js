import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Post from "./Post"


export const MyPosts = () => {

    const [posts, setPosts] = useState([])
    const [currentUsersPosts, setCurrentUsersPosts] = ([])
    const user_id = parseInt(localStorage.getItem("token"))

    useEffect(
        () => {
            fetch(`http://localhost:8088/posts?user_id=${user_id}`)
                .then(res => res.json())
                .then((postsArray) => {
                    setPosts(postsArray)
                })
        }, []
    )



    return (
        <>
            {
                posts.map((post) => 
                    <Post class="post__item" key={post.id} post={post} />
                )
            }
        </>
    )
}