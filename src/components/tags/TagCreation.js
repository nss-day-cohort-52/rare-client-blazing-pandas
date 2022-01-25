import react, {useRef} from "react"
import { addTag } from "../Repos/TagsRepository"

export const CreateTag = ({sync}) => {
    const newTag = useRef()
    const syncTags = sync
    const CreateTag = () => {
        const fullTag = {"label":newTag.current.value}
        addTag(fullTag).then(sync)
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