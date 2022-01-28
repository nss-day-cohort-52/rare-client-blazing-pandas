import React, {useState, useEffect, useRef} from 'react'
import {useHistory } from "react-router-dom"


export const EditPostsForm = () => {
    const [posts, setPosts]= useState([])
    const [currentPost, setCurrentPost] = useState({})
    const history = useHistory()
    const titleText = useRef()
    const imagePic = useRef()
    const contentText = useRef()
    const [editedPost, setEditedPost] = useState({
        user_id: 0,        
        category_id: "", 
        title: "", 
        publication_date: "", 
        image_url: "", 
        content: "",
    })

    useEffect(() => {
        fetch(`http://localhost:8088/posts/${postId}`)
            .then(res => res.json())
            .then((postsArray) => {
                setCurrentPost(postsArray)
            })
    })

    const editPost = (event) => {
        event.preventDefault()
        const bookToEdit = {
            "user_id": currentPost.userId,
            "category_id": currentPost.category_id,
            "title": currentPost.dateStarted,
            "publication_date": Date.now(),
            "image_url": currentPost.entry,
            "content": currentPost.reRead, 
            "approved": 1
        }

        return fetch(`http://localhost:8088/posts/${postId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(bookToEdit)
        })
            .then(() => {
                history.push("/my-posts")
            }
            )
    }

    return (
        
        <form className="createPostForm">
            <h2 className="createPostForm_title"> Edit your post</h2>
            <fieldset>
                <div className="form-group" key="title">
                    <label htmlFor="title">Title:</label>
                    <input type="text" className="form-control" placeholder="Title" ref={titleText}/>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group" key="image_url">
                    <label htmlFor="image_url">Image:</label>
                    <input type="text" className="form-control" placeholder="Put an Image here" ref={imagePic}/>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group" key="content">
                    <label htmlFor="content">Content:</label>
                    <input type="text" className="form-control" placeholder="Write some stuff" ref={contentText}/>
                </div>
            </fieldset>
            <button className="button is-link" type="submit" onClick={(event) => 
                {event.preventDefault() 
                editPost()}}>Submit</button>
        </form>
    )
}