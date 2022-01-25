import { TagLine } from "./TagLine"
import React, { useState, useEffect } from "react"
import { getTags } from "../Repos/TagsRepository"
import "./tags.css"
import { CreateTag } from "./TagCreation"


export const TagList = () => {
    const [tags, setTags] = useState([])

    useEffect(() => {
        getTags().then((tagInfo) => setTags(tagInfo))
    }, [])

    return <section className="flexside">
        <div>
            <h3>Tags</h3>
            {tags.map(tag => <TagLine label={tag.label} />)}
        </div>
        <CreateTag />
    </section>
}