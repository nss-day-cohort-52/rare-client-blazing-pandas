import react, {useRef} from "react"
import { addCategory } from "../Repos/CategoriesRepository"

export const CreateCategory = ({sync}) => {
    const newCategory = useRef()
    const syncCategories = sync //sync is the setter for the categorys from categorylist.js
    const CreateCategory = () => {
        const fullCategory = {"label":newCategory.current.value} //pulls the text from the label input and adds it to a json object
        addCategory(fullCategory).then(sync) //takes the json object, posts it, then forces the categorylist to update its list of categorys
    }

    return <section>
        <h3>Create a new Category</h3>
        <div className="field">
          <label className="label">Label</label>
          <div className="control">
            <input className="input" type="text" ref={newCategory} />
          </div>
          <button className="button is-link" type="submit" onClick={() => CreateCategory()}>Submit</button>
        </div>
    </section>
}