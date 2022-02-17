import React, { useState, useEffect, useRef } from 'react'
import { useHistory } from "react-router-dom"
import { addPost } from '../Repos/PostsRepository'
import { getTags, addPostTag } from '../Repos/TagsRepository'


export const CreatePostsForm = () => {
    const [posts, setPosts] = useState([])
    const history = useHistory()
    const titleText = useRef()
    const imagePic = useRef()
    const contentText = useRef()
    const [tagList, setTagList] = useState([])
    const activeTags = []

    useEffect(() => {
        getTags().then((tagInfo) => setTagList(tagInfo))
    }, [])

    const tagToggle = (evt) => {
        const [, tagId] = evt.target.id.split("__")  //saves the tagId based on the identifier
        if (evt.target.checked) {
            activeTags.push(parseInt(tagId)) //if changed to checked, add the tag
        }
        else {
            activeTags.splice(activeTags.indexOf(tagId), 1) //if changed to untagged, find the index of the id, and then remove one element starting at that index
        }
    }

    const addPostTags = (postId, tags) => {
        tags.forEach(tag => {
            const postTag =
            {
                "post_id": postId,
                "tag_id": tag
            }
            addPostTag(postTag)
        })
        return postId
    }

    const createPost = () => {
        const postDate = new Date()
        const createdYear = postDate.getFullYear()
        const createdMonth = postDate.getMonth() + 1
        const createdDay = postDate.getDate()
        const twoDigit = (dateString) => {
            if (dateString.length < 2) {
                return `0${dateString}`
            } else {
                return dateString
            }
        }
        const postBuilder = {
            user: parseInt(localStorage.getItem('token')),
            category: 1,
            title: titleText.current.value,
            publication_date: `${createdYear}-${twoDigit(createdMonth)}-${twoDigit(createdDay)}`,
            image_url: imagePic.current.value,
            content: contentText.current.value,
            approved: 1
        }
        addPost(postBuilder)
            .then(response => addPostTags(response.id, activeTags))
            .then((id) => {
                history.push(`/posts/${id}`)
            })
    }

    return (

        <form className="createPostForm">
            <h2 className="createPostForm_title"> Create a new post!</h2>
            <fieldset>
                <div className="form-group" key="title">
                    <label htmlFor="title">Title:</label>
                    <input type="text" className="form-control" placeholder="Title" ref={titleText} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group" key="image_url">
                    <label htmlFor="image_url">Image:</label>
                    <input type="text" className="form-control" placeholder="Put an Image here" ref={imagePic} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group" key="content">
                    <label htmlFor="content">Content:</label>
                    <input type="text" className="form-control" placeholder="Write some stuff" ref={contentText} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group" key="tags">
                    <label htmlFor="content">Tags:</label>
                    {tagList.map(tag => {
                        return (
                            <>
                                {` ${tag.label}: `}<input type="checkbox" id={`tag__${tag.id}`} onChange={tagToggle} />
                            </>
                        )
                    })}
                </div>
            </fieldset>
            <button className="button is-link" type="submit" onClick={(event) => {
                event.preventDefault()
                createPost()
            }}>Submit</button>
        </form>
    )
}