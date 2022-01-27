import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { useLocation, useParams } from "react-router-dom/cjs/react-router-dom.min"
import "./Post.css"


export default ({ post }) => {

    const [details, setDetails] = useState(false)
    const [currentPost, setCurrentPost] = useState({})
    const { postId } = useParams()
    const location = useLocation()


    useEffect(
        () => {
        fetch(`http://localhost:8088/posts/${postId}`)
            .then(res => res.json())
            .then((postDetails) => {
                setCurrentPost(postDetails)
            })
        }, []
    )

    useEffect(() => {
        if (postId) {
            setDetails(true)
        }
    }, [])

    return (
        <>
            {details
                ? 
                <div class="post">
                    <p>{currentPost?.title}</p>
                    <p>{currentPost?.category?.label}</p>
                    <img src={currentPost?.image_url}></img>
                    <p>Author: {currentPost?.user?.username}</p>
                    <p>{currentPost?.content}</p>
                    <p>{currentPost?.publication_date}</p>
                </div>
                    : 
                <div class="post">
                    { (location.pathname === "/my-posts") ? <><div><button>delete</button></div> <div><button>edit</button></div></>: null} 
                    <div>
                        <Link to={`/posts/${post?.id}`} >
                            <h2>{post?.title}</h2>
                        </Link>
                    </div>
                    <div><img src={post?.image_url} /></div> 
                    <div><p>{post?.content} </p></div> 
                    <div>
                        <p>Author: {post?.user?.username}</p>
                    </div> 
                    <div>
                        <p>{post?.category.label}</p>
                    </div>
                </div>

            }
        </>
    )

}