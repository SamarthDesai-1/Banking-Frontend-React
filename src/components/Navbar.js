import React from 'react'
import '../style-css/Navbar.css'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand imgnav" href="#">Transact</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto  mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/About_us">About</NavLink>
              </li>
              <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="/Contect">Contect</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="#">Insurance</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/Help">Help</NavLink>
              </li>
            </ul>

            <div className="button">
            <input type="button" value="My Account" name="account" className="btn btn-primary m-2" />
            <button type="button" className="btn btn-outline-primary m-2">Explore</button>
            </div>

            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success" type="submit">Search</button>
            </form>

<NavLink to="/Signup_Signin"><input type="button" value="Login" name="account" className="btn btn-primary m-2"/>
</NavLink>

          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
