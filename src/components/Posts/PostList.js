import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Post from "./Post"


export const PostList = () => {

    const [posts, setPosts] = useState([])


    useEffect(
        () => {
            fetch(`http://localhost:8088/posts`)
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
                    <Post class="post__item" key={post.id} post={post} sync={""} />
                )
            }
        </>
    )
}