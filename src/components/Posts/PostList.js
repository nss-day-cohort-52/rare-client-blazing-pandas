import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { getCategories, getPostsByCategory } from "../Repos/CategoriesRepository"
import { getPosts } from "../Repos/PostsRepository"
import Post from "./Post"


export const PostList = () => {

    const [posts, setPosts] = useState([])
    const [categories, setCategories] = useState([])
    const [filterCategory, setFilter] = useState(0)
    const [filterPosts, setFilterPosts] = useState([])


    useEffect(
        () => {
            getPosts()
                .then((postsArray) => {
                    setPosts(postsArray)
                })
        }, []
    )

    useEffect(() => {
        getCategories()
            .then(setCategories)
    }, [])

    const postFilter = (event) => {
        if (event.target.value === "0") {
            getPosts()
            .then((postsArray) => {
                setPosts(postsArray)
        })} 
        else {
            getPostsByCategory(event.target.value)
            .then((postsArray) => {
                setPosts(postsArray)
        })
        }
    }
    return (
        <>
            <div className="categoryFilter">
                <select id="category" onChange={(event) => {
                    postFilter(event)
                }}
                    defaultValue=""
                    name="category"
                    className="filterDropdown"
                >
                    <option key="category--0" value={0}>Category Select</option>
                    {categories.map((category) => 
                        <option key={category.id} value= {category.id}>
                            {category.label}
                            </option>
                    )}
                </select>
            </div>
            {
                posts.map((post) => 
                    <Post class="post__item" key={post.id} post={post} sync={""} />
                )
            }
        </>
    )
}