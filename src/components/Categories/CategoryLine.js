import { useState } from "react"
import { deleteCategory, editCategory } from "../Repos/CategoriesRepository"

export const CategoryLine = ({ cat, sync }) => {
    const [editing, setEditing] = useState(false)
    const [cate, setCate] = useState(cat)
    const updateCate = (e) => {
        const copy = cate
        copy[e.target.name] = e.target.value //could do with a useRef in theory
        setCate(copy)
    }
    const flipEdit = () => setEditing(!editing)

    return <>
        <div>
            {editing ?
                <div className="field">
                    <label className="label">New Label: (previously {`${cat.label}`})</label>
                    <div className="control">
                        <input className="input" type="text" name="label" onChange={updateCate}/>
                    </div>
                    <button className="button is-link" type="submit" onClick={() => {
                        editCategory(cate).then(sync)
                        flipEdit()
                    }
                    }>Save</button>
                </div> : <>
                    <text>{cat.label}</text>
                    <button className="button is-link" type="submit" onClick={flipEdit}>edit</button>
                </>
            }
            <button className="button is-link is-light" type="submit" onClick={() => deleteCategory(cat.id).then(sync)}>delete</button>
        </div>
    </>
}