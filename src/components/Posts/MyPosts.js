import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { getPostsByUser } from "../Repos/PostsRepository"
import Post from "./Post"


export const MyPosts = () => {

    const [posts, setPosts] = useState([])
    const [currentUsersPosts, setCurrentUsersPosts] = ([])
    const user_id = parseInt(localStorage.getItem("token"))

    const syncPosts = () => {
        getPostsByUser(user_id).then(posts => setPosts(posts))
    }

    useEffect(() =>{
        syncPosts()
        }, []
    )



    return (
        <>
            {
                posts.map((post) => 
                    <Post class="post__item" key={post.id} post={post} sync={syncPosts}  />
                )
            }
        </>
    )
}