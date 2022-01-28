import React, {useState, useEffect, useRef} from 'react'
import { useParams } from 'react-router-dom'
import {useHistory } from "react-router-dom"
import { getCategories } from '../Repos/CategoriesRepository'



export const EditPostsForm = () => {
    const [posts, setPosts]= useState([])
    const [currentPost, setCurrentPost] = useState({})
    const history = useHistory()
    const titleText = useRef()
    const imagePic = useRef()
    const category = useRef()
    const contentText = useRef()
    const {postId} = useParams()
    const [categories, setCategories] = useState([])
    const syncCategories = () =>{
        getCategories().then((CategoryInfo) => setCategories(CategoryInfo))
    }

    useEffect(() => {
        syncCategories()
    }, [])


    useEffect(() => {
        fetch(`http://localhost:8088/posts/${postId}`)
            .then(res => res.json())
            .then((singlePost) => {
                setCurrentPost(singlePost)
            })
    }, [])

    const editPost = (event) => {
        const postToEdit = {
            "user_id": parseInt(localStorage.getItem("token")),
            "category_id": parseInt(category.current.value),
            "title": titleText.current.value,
            "publication_date": Date.now(),
            "image_url": imagePic.current.value,
            "content": contentText.current.value, 
            "approved": 1
        }

        return fetch(`http://localhost:8088/posts/${postId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(postToEdit)
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
                    <input type="text" className="form-control" placeholder="Title" ref={titleText} defaultValue={currentPost.title} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group" key="image_url">
                    <label htmlFor="image_url">Image:</label>
                    <input type="text" className="form-control" placeholder="Put an Image here" ref={imagePic} defaultValue={currentPost.image_url}/>
                </div>
            </fieldset>
            <div className="field">
                        <label htmlFor="categoryId" className="label">Category: </label>
                        <div className="control">
                            <div className="select">
                                <select name="categoryId"
                                    ref={category}>
                                    
                                    {categories.map(c => (
                                        <option key={c.id} value={c.id} selected={c.id === currentPost.category_id}>
                                            {c.label}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>
            <fieldset>
                <div className="form-group" key="content">
                    <label htmlFor="content">Content:</label>
                    <textarea type="text" className="form-control" placeholder="Write some stuff" ref={contentText} defaultValue={currentPost.content}></textarea>
                    
                </div>
            </fieldset>
            <button className="button is-link" type="submit" onClick={(event) => 
                {event.preventDefault() 
                editPost()}}>Submit</button>
        </form>
    )
}