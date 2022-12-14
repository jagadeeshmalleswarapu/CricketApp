import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
// import PreventBack from './PreventBack'
import '../css/nav.css'
import ProfileService from '../services/ProfileService'


function NavBar() {

  const [name, setName] = useState('')
  const [d, setd] = useState('')
  useEffect(()=>{
    ProfileService.getProfile(localStorage.getItem("showName").toString()).then((res)=>{
      setd(res.data)
    })
    if(localStorage.getItem('showName')){
      setName(localStorage.getItem('showName').toString().split("@")[0])
    }
  },[])

    const navigate = useNavigate()
  return (
    <div>

<nav className="navbar fixed-top">
        <div className="container-fluid">
          <Link to="/nav" className="navbar-brand">
            <h3 style={{color:'white'}}>Cricket Player App</h3>
          </Link>
          <span style={{
          paddingLeft:'770px'}} >
            <a id='uname' href="/">
            Home
            </a>
          </span>
          <span>
            <a id='uname' href="/profile">
            {d.firstName}
            </a>
          </span>
          <button
            className="navbar-toggler bg-white text-white"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="offcanvas offcanvas-end "
            tabindex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                DashBoard
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <a className="nav-link" href="/favorites">
                    Favorites
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/recommend">
                    Recommendations
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    to="/nav"
                    id="offcanvasNavbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    More
                  </Link>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="offcanvasNavbarDropdown"
                  >
                    <li>
                      <Link className="dropdown-item" to="/stat">
                        Statistics
                      </Link>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/rank">
                        Ranking
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/News">
                        News
                      </a>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/score">
                      Live Score
                      </Link>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    
                    <li>
                      <button 
                       className="dropdown-item"
                       onClick={()=>{
                         localStorage.removeItem('jagadeesh')
                         navigate('/login')
                       }}
                       >
                        LogOut
                      </button>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

    </div>
  )
}

export default NavBar