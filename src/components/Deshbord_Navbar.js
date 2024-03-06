import React from "react";
import "../style-css/DeshNavbar.css";
import { useNavigate } from 'react-router-dom';

function Deshbord_Navbar() {
  const navigate = useNavigate();
    
  const handleLogout = async () => {  
    sessionStorage.clear();
    console.log("Logout");
    navigate("/Signup_Signin");
  };

  return (
    <>
      <div className="deshnav">
        <nav
          style={{ height: "70px" }}
          class="navbar navbar-expand-lg navbar-light bg-light"
        >
          <div class="container-fluid">
            <a class="navbar-brand imgnav" href="#">
              Transect
            </a>
          </div>
          <div className="log-button">
            <button type="button" className="btn btn-primary" style={{ marginRight: "30px" }} onClick={handleLogout}>
              Logout
            </button>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Deshbord_Navbar;
