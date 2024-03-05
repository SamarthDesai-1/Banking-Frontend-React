import React from 'react'
import '../style-css/DeshNavbar.css'


function Deshbord_Navbar() {
    return (
        <>
            <div className='deshnav'>
                <nav style={{ height: "70px" }} class="navbar navbar-expand-lg navbar-light bg-light">
                    <div class="container-fluid">
                        <a class="navbar-brand imgnav" href="#">Transect</a>
                    </div>
                    <div className="log-button">
                        <button className='btn btn-primary' style={{ marginRight: "30px" }}>Logout</button>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Deshbord_Navbar
