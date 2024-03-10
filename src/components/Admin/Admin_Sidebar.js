import React from "react";
import "../../style-css/Admin/Admin_Sidebar.css";
import { NavLink } from "react-router-dom";
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AddCardIcon from '@mui/icons-material/AddCard';
import EnergySavingsLeafIcon from '@mui/icons-material/EnergySavingsLeaf';
import ContactsIcon from '@mui/icons-material/Contacts';

function Admin_Sidebar() {
  return (
    <div>
      <div className="adsidenav">
        <div className="row">
          <div className="tpart col-sm-12">
            <div className="sidebar">
              <div className="photo text-center pt-4">
                <NavLink
                  to="/Admin_Dashbord"
                  className="linka"
                  style={{
                    textDecoration: "none",
                    color: "rgb(135, 135, 135)",
                  }}
                >
                  <h2>Dashbord</h2>
                </NavLink>
              </div>

              <div className="menubar ">
                <ul className="uimenu">
                  <li className="menuname">
                    <NavLink to="/Signup_Data" className="linka">
                      Signup Data
                    </NavLink>
                    <GroupAddIcon
                      style={{ position: "relative", left: "130px" }}
                    ></GroupAddIcon>
                  </li>
                  <li className="menuname">
                    <NavLink to="/Create_Account_data" className="linka">
                      Create Account Data
                    </NavLink>
                    <AccountCircleIcon
                      style={{ position: "relative", left: "59px" }}
                    ></AccountCircleIcon>
                  </li>
                  <li className="menuname">
                    <NavLink to="/Debit_Card_data" className="linka">
                      DebitCard issue Data
                    </NavLink>
                    <AddCardIcon
                      style={{ position: "relative", left: "58px" }}
                    ></AddCardIcon>
                  </li>
                  <li className="menuname">
                    <NavLink to="/Fix_deposit_data" className="linka">
                      Fix Deposit Data
                    </NavLink>
                    <EnergySavingsLeafIcon
                      style={{ position: "relative", left: "100px" }}
                    ></EnergySavingsLeafIcon>
                  </li>
                  <li className="menuname">
                    <NavLink to="/Contect_data" className="linka">
                      Contact Data
                    </NavLink>
                    <ContactsIcon
                      style={{ position: "relative", left: "120px" }}
                    ></ContactsIcon>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admin_Sidebar;
