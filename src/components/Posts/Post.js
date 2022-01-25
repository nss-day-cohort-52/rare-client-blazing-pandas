import { useState } from "react"
export default ({post}) => {
    
    const [details, setdetails] = useState(false)


    return (
        <>
            { details
                ? <div>
                        <p>{post?.title}</p>
                        <p>Author</p>
                        <p>Category</p>
                        <p>Publication date</p>
                        <p>Content</p>
                </div>
                : <div>
                        <h3>{post.title}</h3> <img src={post.image_url} /> <p>{post.user.username}</p> <p>{post.category.label}</p>
                </div>

            }
        </>
    )
    
}