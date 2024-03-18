import React from "react";
import "../../style-css/Admin/Admin_Sidebar.css";
import { NavLink } from "react-router-dom";
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AddCardIcon from '@mui/icons-material/AddCard';
import EnergySavingsLeafIcon from '@mui/icons-material/EnergySavingsLeaf';
import ContactsIcon from '@mui/icons-material/Contacts';
import CancelIcon from '@mui/icons-material/Cancel';
import Tostyfy from "../Tostyfy";

function Admin_Sidebar() {
  return (
    <div>
      {/* <Tostyfy></Tostyfy> */}
      <div className="adsidenav">
        <div className="row">
          <div className="tpart col-sm-12">
            <div className="adsidebar">
              <div className="photo text-center pt-4">
                <NavLink
                  to="/Admin_Dashbord"
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
                    <GroupAddIcon
                      style={{marginLeft:"3px" }}
                    ></GroupAddIcon>
                    <NavLink to="/Signup_Data" className="linka">
                      Signup Data
                    </NavLink>
                  </li>
                  <li className="menuname">
                    <AccountCircleIcon
                      // style={{ position: "relative", left: "59px" }}
                    ></AccountCircleIcon>
                    <NavLink to="/Create_Account_data" className="linka">
                      Create Account Data
                    </NavLink>
                  </li>
                  <li className="menuname">
                    <AddCardIcon
                      // style={{ position: "relative", left: "58px" }}
                    ></AddCardIcon>
                    <NavLink to="/Debit_Card_data" className="linka">
                      DebitCard issue Data
                    </NavLink>
                  </li>
                  <li className="menuname">
                    <EnergySavingsLeafIcon
                      // style={{ position: "relative", left: "100px" }}
                    ></EnergySavingsLeafIcon>
                    <NavLink to="/Fix_deposit_data" className="linka">
                      Fix Deposit Data
                    </NavLink>
                  </li>
                  <li className="menuname">
                    <ContactsIcon
                      // style={{ position: "relative", left: "120px" }}
                    ></ContactsIcon>
                    <NavLink to="/Contect_data" className="linka">
                      Contact Data
                    </NavLink>
                  </li>
                  <li className="menuname">
                    <ContactsIcon
                      // style={{ position: "relative", left: "147px" }}
                    ></ContactsIcon>
                    <NavLink to="/Loan_data" className="linka">
                      Loan Data
                    </NavLink>
                  </li>
                  <li className="menuname">
                    <CancelIcon
                      // style={{ position: "relative", left: "69px" }}
                    ></CancelIcon>
                    <NavLink to="/Account_close_data" className="linka">
                      Account Close Data
                    </NavLink>
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
