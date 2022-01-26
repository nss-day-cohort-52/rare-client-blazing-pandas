import React, { useState } from "react"
import { Route, Redirect } from "react-router-dom"
import { ApplicationViews } from "./ApplicationViews"
import { NavBar } from "./nav/NavBar"
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"
import {TagList} from "./tags/TagList"
import { PostList } from "./Posts/PostList"
import Post from "./Posts/Post"
import { CreatePostsForm } from "./Posts/CreatePostForm"
import { UserList } from "./users/UserList"

export const Rare = () => {
  const [token, setTokenState] = useState(localStorage.getItem('token'))

  const setToken = (newToken) => {
    localStorage.setItem('token', newToken)
    setTokenState(newToken)
  }

  return <>
    {
      token
        ?
        <>
          <Route>
            <NavBar token={token} setToken={setToken} />
            <ApplicationViews />
          </Route>
          <Route exact path="/tags">
            <TagList/>
          </Route>
        </>
        :
        <Redirect to="/login" />
    }

    <Route exact path="/login" >
      <NavBar token={token} setToken={setToken} />
      <Login token={token} setToken={setToken} />
    </Route>
    
    <Route exact path="/PostList">
      <PostList />
    </Route>
    <Route exact path="/posts/:postId(\d+)">
      <Post />
    </Route>
    <Route exact path="/createPost">
      <CreatePostsForm />
      </Route>
    <Route exact path="/Users">
      <UserList />
    </Route>
    
    <Route path="/register" exact>
      <NavBar token={token} setToken={setToken} />
      <Register token={token} setToken={setToken} />
    </Route>

  </>
}
