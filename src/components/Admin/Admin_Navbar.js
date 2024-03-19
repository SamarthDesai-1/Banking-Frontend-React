import React,{useState} from "react";
import { NavLink } from "react-router-dom";
import "../../style-css/Admin/Admin_Navbar.css";
import { useNavigate } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";
import Tostyfy from "../Tostyfy";
import FullscreenIcon from '@mui/icons-material/Fullscreen';

import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';

function Admin_Navbar() {
  const navigate = useNavigate();
  const [isFullScreen, setIsFullScreen] = useState(false);

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

  const handleFullScreen = () => {
    if (!isFullScreen) {
      // Fullscreen mode
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
      } else if (document.documentElement.webkitRequestFullscreen) { /* Safari */
        document.documentElement.webkitRequestFullscreen();
      } else if (document.documentElement.msRequestFullscreen) { /* IE11 */
        document.documentElement.msRequestFullscreen();
      }
    } else {
      // Exit fullscreen
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) { /* Safari */
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) { /* IE11 */
        document.msExitFullscreen();
      }
    }
    setIsFullScreen(!isFullScreen); // Toggle fullscreen state
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

          <div className="log-button ffscreen">
            <Tooltip title={isFullScreen ? 'Exit Fullscreen' : 'Full Screen'} arrow>
              <FullscreenIcon type="button" className=" fullscreen" onClick={handleFullScreen}>
              </FullscreenIcon>
            </Tooltip>
          </div>

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

