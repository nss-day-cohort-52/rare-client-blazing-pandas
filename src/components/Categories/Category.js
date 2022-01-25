import { useEffect, useState } from "react"

export const getCategories = () => {
const [categories, setCategories] = useState([])
    useEffect(
        () => {
            fetch("http://localhost:8088/categories")
                .then(res => res.json())
                .then((categories) => {
                    setCategories(categories)
                })

        },[]
    )
}