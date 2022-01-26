import React, {useState, useEffect, useRef} from 'react'
import {useHistory } from "react-router-dom"


export const CreatePostsForm = () => {
    const [posts, setPosts]= useState([])
    const history = useHistory()
    const titleText = useRef()
    const imagePic = useRef()
    const contentText = useRef()

    const createPost = () => {
       const postBuilder = {
        user_id: parseInt(localStorage.getItem('token')),
        category_id: 1,
        title: titleText.current.value,
        publication_date: Date.now(),
        image_url: imagePic.current.value,
        content: contentText.current.value,
        approved: 1
        }
        const fetchOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(postBuilder)
        }
        return fetch("http://localhost:8088/posts", fetchOptions)
            .then(response => response.json())
            .then((response) => {
                history.push(`/posts/${response.id}`)
            })
    }

    return (
        
        <form className="createPostForm">
            <h2 className="createPostForm_title"> Create a new post!</h2>
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
                createPost()}}>Submit</button>
        </form>
    )
}