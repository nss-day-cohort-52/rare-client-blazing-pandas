import react, {useRef} from "react"

export const CreateTag = () => {
    const newTag = useRef()

    return <section>
        <h3>Create a new Tag</h3>
        <div className="field">
          <label className="label">Label</label>
          <div className="control">
            <input className="input" type="text" ref={newTag} />
          </div>
          <button className="button is-link" type="submit" >Submit</button>
        </div>
    </section>
}