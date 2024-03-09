import React from 'react'
import { NavLink } from 'react-router-dom'
import '../../style-css/Admin/Admin_Navbar.css'

function Admin_Navbar() {
  return (
    <div className='adnav'>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
      <a className="navbar-brand imgnav" href="#">Transact</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">

        <form className="d-flex adserch">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>

        <NavLink to=""><input type="button" value="Logout" name="account" className="adlogbtn btn btn-primary m-2" />
        </NavLink>

      </div>
    </div>
  </nav>
  </div>
  )
}

export default Admin_Navbar
