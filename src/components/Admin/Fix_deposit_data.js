import React, { useState } from "react";
import Admin_Navbar from "./Admin_Navbar";
import Admin_Sidebar from "./Admin_Sidebar";
import "../../style-css/Admin/Fix_deposit_data.css";
import { useEffect } from "react";
import axios from "axios";

//loading bar
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

function Fix_deposit_data() {

  const [fdData, setFDdata] = useState([]);
  
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    const fetchData = async () => {
        setOpen(true)
      const data = await axios
        .get("http://localhost:5000/test/api/users/get-fd-data", {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          if (response?.status == 200) {
            console.log(response);
            setFDdata(response.data.Data);
          }
        })
        .catch((e) => {
          console.log(e);
        });
        setOpen(false)
    };

    fetchData();
  }, []);

  return (
    <div className="fixdeposit">
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
          <div className="fixtable">
            <h2 className="mb-3">Fix Deposit data</h2>
            <table class="table table-striped">
              <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Accout No</th>
                  <th scope="col">Email</th>
                  <th scope="col">FD Amount</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
                {fdData.map((elem, index) => (
                  <tr key={index}>
                    <td className="text-deco">{index + 1}</td>
                    <td className="text-deco">{elem.AccountNo}</td>
                    <td className="text-deco">{elem.Email}</td>
                    <td className="text-deco">{elem.Balance}</td>
                    <td className="text-deco">
                      {" "}
                      <button className="btn btn-primary">View</button>{" "}
                    </td>
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

export default Fix_deposit_data;
