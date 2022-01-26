import { useState } from "react"
import "./Post.css"
export default ({ post }) => {

    const [details, setdetails] = useState(false)


    return (
        <>
            {details
                ? <div>
                    <p>{post?.title}</p>
                    <p>{post.user.username}</p>
                    <p>Category</p>
                    <p>Publication date</p>
                    <p>Content</p>
                </div>
                : <div class="post">
                    <div>
                        <h2>{post?.title}</h2>
                    </div>
                    <div><img src={post.image_url} /></div> 
                    <div><p>{post.content} </p></div> 
                    <div>
                        <p>Author: {post.user.username}</p>
                    </div> 
                    <div>
                        <p>{post.category.label}</p>
                    </div>
                </div>

            }
        </>
    )

}