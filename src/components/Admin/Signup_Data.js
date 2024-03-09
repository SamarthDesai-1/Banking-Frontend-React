import React, { useState } from "react";
import Admin_Navbar from "./Admin_Navbar";
import Admin_Sidebar from "./Admin_Sidebar";
import "../../style-css/Admin/Signup_Data.css";
import { useEffect } from "react";
import axios from "axios";

//loading bar
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

function Signup_Data() {

  const [signupData, setSignupData] = useState([]);
  
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    const fetchData = async () => {
        setOpen(true)
      const data = await axios
        .get("http://localhost:5000/test/api/users/get-signup-data", {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          if (response?.status === 200) {
            console.log(response);
            setSignupData(response.data.Data);
          }
        })
        .catch((e) => console.log(e));
        setOpen(false)
    };

    fetchData();
  }, []);

  return (
    <div className="adsign">
         <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        // onClick={handleClose}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <Admin_Navbar></Admin_Navbar>
      <div className="row">
        <div className="col-sm-3">
          <Admin_Sidebar></Admin_Sidebar>
        </div>
        <div className="col-sm-9">
          <div className="signtable">
            <h2 className="mb-3">Signup data</h2>
            <table class="table table-striped">
              <thead>
                <tr>
                  <th className="text-deco" scope="col">ID</th>
                  <th className="text-deco" scope="col">First Name</th>
                  <th className="text-deco" scope="col">Last Name</th>
                  <th className="text-deco" scope="col">Email</th>
                </tr>
              </thead>
              <tbody>
                {signupData.map((elem, index) => (
                  <tr key={index}>
                    <td className="text-deco">{index + 1}</td>
                    <td className="text-deco">{elem.FirstName}</td>
                    <td className="text-deco">{elem.LastName}</td>
                    <td className="text-deco">{elem.Email}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup_Data;
