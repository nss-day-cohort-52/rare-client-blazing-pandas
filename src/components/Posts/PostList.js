import { useEffect, useState } from "react"


export const PostList = () => {

    const [posts, setPosts] = useState([])


    useEffect(
        () => {
            fetch(`http://localhost:8088/Posts`)
                .then(res => res.json())
                .then((postsArray) => {
                    setPosts(postsArray)
                })
        }, []
    )


    return (
        <>
            {
                posts.map((post) => <Post class="post__item" key={post.id} post={post} />)
            }
        </>
    )
}