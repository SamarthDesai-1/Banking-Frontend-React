import React, { useState } from "react";
import Deshbord_Sidebar from "./Deshbord_Sidebar";
import "../style-css/Apply_fix_recurring.css";
import Deshbord_Navbar from "./Deshbord_Navbar";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";


//loading bar
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { toast } from "react-toastify";

function Apply_fix_recurring() {

  const [data, setData] = useState();
  const navigate = useNavigate();


  const [open, setOpen] = React.useState(false);

  const sessionToken = JSON.parse(sessionStorage.getItem("Token"));
  const sessionEmail = JSON.parse(sessionStorage.getItem("Email"));

  const handleData = async () => {
    setOpen(true)
    const data = await axios.post("http://localhost:5000/test/api/users/exists-fd", { sessionEmail, sessionToken }, {
      headers: {
        "Content-Type": "application/json",
      },
    }).then(async response => {
      if (response?.status === 200) {
        console.log(response);
        setData(response.data.Data[0]);
        navigate("/Deposit_status");
      }
    }).catch(e => {
      toast.error(e.response.data.msg);
    })
    setOpen(false)
  };



  return (
    <div className="Apply_fix_recurring">
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
      // onClick={handleClose}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <Deshbord_Navbar></Deshbord_Navbar>
      <div className="row">
        <div className="col-sm-3">
          <Deshbord_Sidebar></Deshbord_Sidebar>
        </div>
        <div className="col-sm-9">
          <div className="listi">
            <div className="containe-two col-md-8">
              <div className="contain">
                <div className="box">
                  <NavLink to="../Fix_Deposit_form">
                    {" "}
                    <h4 className="ms-3">Open Fixed Deposit</h4>
                  </NavLink>
                </div>
                {/* <div className="box">
                                <NavLink to=""><h4 className='ms-3'>Open Recurring Deposit</h4></NavLink>
                                </div> */}
                <div className="box">
                  <NavLink to="../View_rates">
                    <h4 className="ms-3">View All Rates</h4>
                  </NavLink>
                </div>
                <div className="box">

                  <NavLink onClick={handleData}><h4 className="ms-3">View Fix/Recurring Deposit Status</h4></NavLink>
                  {/* <NavLink to="">
                    {(data) ? navigate("/Deposit_status") : alert("testing") } 
                  </NavLink> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Apply_fix_recurring;
