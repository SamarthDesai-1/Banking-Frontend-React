import React, { useEffect, useState } from "react";
import "../style-css/DeshNavbar.css";
import { NavLink, useNavigate } from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';
import FullscreenIcon from '@mui/icons-material/Fullscreen';

import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';

function Deshbord_Navbar() {
  const navigate = useNavigate();
  const [isFullScreen, setIsFullScreen] = useState(false);

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

  const [data, setData] = useState("");

  useEffect(() => {
    const fetchData = () => {
      const OBJ = JSON.parse(sessionStorage.getItem("AccountData"));
      console.log("OBJECT : ", OBJ);
      setData(OBJ);
    };

    fetchData();
  }, []);


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
    <>
      <div className="deshnav">
        <nav
          style={{ height: "70px" }}
          class="navbar navbar-expand-lg navbar-light bg-light"
        >
          <div class="container-fluid">
            <a class="navbar-brand imgnav" href="#">
              Transact
            </a>
            <div className="collapse navbar-collapse ms-5" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto  mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link active" aria-current="page" to="/About_us">About</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link active" aria-current="page" to="/Contect">Contact</NavLink>
                </li>

                <li className="nav-item">
                  <NavLink className="nav-link active" aria-current="page" to="/Help">Help</NavLink>
                </li>
              </ul>

            </div>
          </div>

          <div className="photo text-center pt-4 d-flex ">
            <img
              src={data && `http://localhost:5000/uploads/${data.Photo}`}
              width="55"
              height="55"
              style={{ borderRadius: "50%", objectFit: "cover" }}
            />
            <p className="cont mt-2">
              {data && data.FirstName} {data && data.LastName}
            </p>
          </div>

          <div className="log-button">
            <Tooltip title={isFullScreen ? 'Exit Fullscreen' : 'Full Screen'} arrow>
              <FullscreenIcon type="button" className=" fullscreen" onClick={handleFullScreen}>
              </FullscreenIcon>
            </Tooltip>
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

