import React, { useEffect, useRef, useState } from "react"
import { Link, useHistory } from "react-router-dom"
import { getAuth } from "../auth/AuthManager"
import { PostList } from "../Posts/PostList"
import "./NavBar.css"
import Logo from "./rare.jpeg"


export const NavBar = ({ token, setToken }) => {
  const history = useHistory()
  const navbar = useRef()
  const hamburger = useRef()
  const [auth, setAuth] = useState(false)

  useEffect(()=>getAuth().then(setAuth),[])

  const showMobileNavbar = () => {
    hamburger.current.classList.toggle('is-active')
    navbar.current.classList.toggle('is-active')
  }

  return (
    <nav className="navbar is-success mb-3" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="/">
          <img src={Logo} height="3rem" /> <h1 className="title is-4">Rare Publishing</h1>
        </a>

        <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" onClick={showMobileNavbar} ref={hamburger}>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div className="navbar-menu" ref={navbar}>
        <div className="navbar-start">
          {
            token
              ?
              <>
                <Link to="/tags" className="navbar-item">Tag Management</Link>
                <Link to="/PostList" className="navbar-item">All Posts</Link>
                <Link to="/categories" className="navbar-item">Category Management</Link>
                <Link to="/createPost" className="navbar-item">Create Posts</Link>
                {auth.auth ? <Link to="/Users" className="navbar-item">User Management</Link> : null}
                <Link to="/my-posts" className="navbar-item">My Posts</Link>
              </>
              :
              ""
          }
        </div>



        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              {
                token
                  ?
                  <button className="button is-outlined" onClick={() => {
                    setToken('')
                    history.push('/login')
                  }}>Logout</button>
                  :
                  <>
                    <Link to="/register" className="button is-link">Register</Link>
                    <Link to="/login" className="button is-outlined">Login</Link>
                  </>
              }
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
