import { TagLine } from "./TagLine"
import React, { useState, useEffect } from "react"
import { getTags } from "../Repos/TagsRepository"
import "./tags.css"
import { CreateTag } from "./TagCreation"


export const TagList = () => {
    const [tags, setTags] = useState([])
    const syncTags = () =>{
        getTags().then((tagInfo) => setTags(tagInfo))
    }

    useEffect(() => {
        syncTags()
    }, [])

    return <section className="flexside">
        <div>
            <h3>Tags</h3>
            {tags.map(tag => <TagLine key={`tag_${tag.id}`}label={tag.label} />)}
        </div>
        <CreateTag sync={syncTags}/>
    </section>
}