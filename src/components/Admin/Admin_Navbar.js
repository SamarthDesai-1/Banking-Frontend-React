import React from "react";
import { NavLink } from "react-router-dom";
import "../../style-css/Admin/Admin_Navbar.css";
import { useNavigate } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";
import Tostyfy from "../Tostyfy";

function Admin_Navbar() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    function deleteMultipleFromSessionStorage(keys) {
      keys.forEach((key) => {
        sessionStorage.removeItem(key);
      });
    }
    const keysToDelete = ['Token', 'Email'];
    deleteMultipleFromSessionStorage(keysToDelete);
    navigate("/Signup_Signin");
  };
  return (
    <div className="adnav">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand imgnav" href="#">
            Transact
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <LogoutIcon
              type="button"
              name="account"
              color="primary"
              className="adlogbtn fa-plus-circle"
              fontSize="large"
              style={{ marginTop: "11px" }}
              onClick={handleLogout}
            ></LogoutIcon>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Admin_Navbar;

