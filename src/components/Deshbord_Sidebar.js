import React, { useEffect } from "react";
import HomeIcon from "@mui/icons-material/Home";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PaidIcon from "@mui/icons-material/Paid";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import AddIcon from "@mui/icons-material/Add";
import "../style-css/Deshbord_Sidebar.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import LockClockIcon from '@mui/icons-material/LockClock';
import CancelIcon from '@mui/icons-material/Cancel';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
//loading bar
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import GTranslateIcon from '@mui/icons-material/GTranslate';
import Tostyfy from "./Tostyfy";
function Deshbord_Sidebar() {
  
  const [open, setOpen] = React.useState(false);

  const [data, setData] = useState("");

  useEffect(() => {
    const fetchData = () => {
      const OBJ = JSON.parse(sessionStorage.getItem("AccountData"));
      console.log("OBJECT : ", OBJ);
      setData(OBJ);
    };

    fetchData();
  }, []);

  return (
    <div>
      {/* <Tostyfy></Tostyfy> */}
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
      // onClick={handleClose}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <div className="sidenav">
        <div className="row">
          <div className="tpart col-sm-12">
            <div className="sidebar">
            

              <div className="menubar ">
                <ul className="uimenu">
                  <li className="menuname">
                    <HomeIcon
                      // style={{ position: "relative", left: "140px" }}
                    ></HomeIcon>
                    <NavLink to="/Deshbord" className="linka">
                      Dashbord
                    </NavLink>
                  </li>
                  <li className="menuname">
                    <AccountCircleIcon
                      // style={{ position: "relative", left: "169px" }}
                    ></AccountCircleIcon>
                    <NavLink to="/User_Profile" className="linka">
                      Profile
                    </NavLink>
                  </li>
                  <li className="menuname">
                    <AddIcon
                      // style={{ position: "relative", left: "126px" }}
                    ></AddIcon>
                    <NavLink to="/Add_Money" className="linka">
                      Add Money
                    </NavLink>
                  </li>
                  <li className="menuname">
                    <RemoveOutlinedIcon
                      // style={{ position: "relative", left: "82px" }}
                    ></RemoveOutlinedIcon>
                    <NavLink to="/Withdrow" className="linka">
                      Withdrow Money
                    </NavLink>
                  </li>
                  
                  <li className="menuname">
                    <PaidIcon
                      // style={{ position: "relative", left: "107px" }}
                    ></PaidIcon>
                    <NavLink to="/Account_Transfer" className="linka">
                      Transfer Fund
                    </NavLink>
                  </li>

                  <li className="menuname">
                    <FileCopyIcon
                      // style={{ position: "relative", left: "132px" }}
                    ></FileCopyIcon>
                    <NavLink to="/Transection" className="linka">
                      Statement
                    </NavLink>
                  </li>
                  <li className="menuname">

                  <CreditCardIcon
                      // style={{ position: "relative", left: "131px" }}
                    ></CreditCardIcon>
                    {data && data.DebitCard === "No issue" ? (
                      <NavLink to="/Applydebit" className="linka">
                        Debit Card
                      </NavLink>
                    ) : (
                      <NavLink to="/Debitcard" className="linka">
                        Debit Card
                      </NavLink>
                    )}

                   
                  </li>
                  <li className="menuname">
                    <LockClockIcon
                      // style={{ position: "relative", left: "53px" }}
                    ></LockClockIcon>
                    <NavLink to="/Apply_fix_recurring" className="linka">
                      Fix Deposits
                    </NavLink>
                  </li>
                  <li className="menuname">
                    <CurrencyExchangeIcon
                      // style={{ position: "relative", left: "131px" }}
                    ></CurrencyExchangeIcon>
                    <NavLink to="/Apply_Loan" className="linka">
                      Apply Loan
                    </NavLink>
                  </li>

                  <li className="menuname">
                    <CancelIcon
                      // style={{ position: "relative", left: "6px" }}
                    ></CancelIcon>
                    <NavLink to="/Account_close" className="linka">
                      Account Close
                    </NavLink>
                  </li>


                  {/* <li className="menuname">
                    <CancelIcon
                      // style={{ position: "relative", left: "6px" }}
                    ></CancelIcon>
                    <NavLink to="/PhonePe" className="linka">
                      Phone Pe
                    </NavLink>
                  </li> */}


                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Deshbord_Sidebar;
