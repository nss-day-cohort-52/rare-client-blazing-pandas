import { useState } from "react"
export default ({Post}) => {
    
    const [details, setdetails] = useState(false)


    return (
        <>
            { details
                ? <div>
                        <p>Title</p>
                        <p>Author</p>
                        <p>Category</p>
                        <p>Publication date</p>
                        <p>Content</p>
                </div>
                : <div>
                        <p>Post Title</p>
                        <p>Author Name</p>
                        <p>Category</p>
                </div>

            }
        </>
    )
    
}