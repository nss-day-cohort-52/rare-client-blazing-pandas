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
                        <p>{post.title}</p>
                        <p>{post.author}</p>
                        <p>Category</p>
                </div>

            }
        </>
    )
    
}