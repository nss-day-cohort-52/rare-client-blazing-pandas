import { CategoryLine } from "./CategoryLine"
import React, { useState, useEffect } from "react"
import { getCategories } from "../Repos/CategoriesRepository"
import "./category.css"
import { CreateCategory } from "./Category"


export const CategoryList = () => {
    const [categories, setCategories] = useState([])
    const syncCategories = () =>{
        getCategories().then((categoryInfo) => setCategories(categoryInfo))
    }

    useEffect(() => {
        syncCategories()
    }, [])

    return <section className="flexside">
        <div>
            <h3>Categories</h3>
            {categories.map(category => <CategoryLine key={`category_${category.id}`}label={category.label} />)}
        </div>
        <CreateCategory sync={syncCategories}/>
    </section>
}