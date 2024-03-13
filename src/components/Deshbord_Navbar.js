import React from "react";
import "../style-css/DeshNavbar.css";
import { useNavigate } from 'react-router-dom';

import LogoutIcon from '@mui/icons-material/Logout';

function Deshbord_Navbar() {
  const navigate = useNavigate();
    
  const handleLogout = async () => {  
    function deleteMultipleFromSessionStorage(keys) {
      keys.forEach((key) => {
        sessionStorage.removeItem(key);
      });
    }
    const keysToDelete = ['Token', 'Email', 'AccountOpenData', 'AccountData', 'CardData', 'BalanceData'];
    deleteMultipleFromSessionStorage(keysToDelete);
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
            <LogoutIcon type="button" fontSize="large" className="fa-plus-circle" color="primary" style={{ marginRight: "30px" }} onClick={handleLogout}>
            </LogoutIcon>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Deshbord_Navbar;

