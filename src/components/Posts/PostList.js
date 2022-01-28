import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { getPosts } from "../Repos/PostsRepository"
import Post from "./Post"


export const PostList = () => {

    const [posts, setPosts] = useState([])


    useEffect(
        () => {
            getPosts()
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