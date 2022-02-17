// export const TagLine = ({label}) => {
//     return <>
//         <div>
//             <text>{label}</text>
//             <button className="button is-link" type="submit" >edit</button>
//             <button className="button is-link is-light" type="submit" >delete</button>
//         </div>
//     </>
// }

import { useState } from "react"
import { deleteTag, editTag } from "../Repos/TagsRepository"

export const TagLine = ({ cat, sync }) => {
    const [editing, setEditing] = useState(false)
    const [tag, setTag] = useState(ta)
    const updateTag = (e) => {
        const copy = tag
        copy[e.target.name] = e.target.value //could do with a useRef in theory
        setTag(copy)
    }
    const flipEdit = () => setEditing(!editing)

    return <>
        <div>
            {editing ?
                <div className="field">
                    <label className="label">New Label: (previously {`${ta.label}`})</label>
                    <div className="control">
                        <input className="input" type="text" name="label" onChange={updateTag}/>
                    </div>
                    <button className="button is-link" type="submit" onClick={() => {
                        editTag(tag).then(sync)
                        flipEdit()
                    }
                    }>Save</button>
                </div> : <>
                    <text>{ta.label}</text>
                    <button className="button is-link" type="submit" onClick={flipEdit}>edit</button>
                </>
            }
            <button className="button is-link is-light" type="submit" onClick={() => deleteTag(ta.id).then(sync)}>delete</button>
        </div>
    </>
}