import react, {useRef} from "react"
import { addTag } from "../Repos/TagsRepository"

export const CreateTag = ({sync}) => {
    const newTag = useRef()
    const syncTags = sync //sync is the setter for the tags from taglist.js
    const CreateTag = () => {
        const fullTag = {"label":newTag.current.value} //pulls the text from the label input and adds it to a json object
        addTag(fullTag).then(sync) //takes the json object, posts it, then forces the taglist to update its list of tags
    }

    return <section>
        <h3>Create a new Tag</h3>
        <div className="field">
          <label className="label">Label</label>
          <div className="control">
            <input className="input" type="text" ref={newTag} />
          </div>
          <button className="button is-link" type="submit" onClick={() => CreateTag()}>Submit</button>
        </div>
    </section>
}