import React, { useState } from "react";
import Admin_Navbar from "./Admin_Navbar";
import Admin_Sidebar from "./Admin_Sidebar";
import "../../style-css/Admin/Create_Account_data.css";
import axios from "axios";
import { useEffect } from "react";
import Ad_User_Profile from "../Admin/Ad_User_Profile";
import { useNavigate } from "react-router-dom";
//loading bar
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

function Create_Account_data() {
  const [accountData, setAccountData] = useState([]);

  const [open, setOpen] = React.useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
        setOpen(true)
      const data = await axios
        .get("http://localhost:5000/test/api/users/get-account-data", {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          if (response?.status === 200) {
            console.log(response);
            setAccountData(response.data.Data);
            sessionStorage.setItem("AccountData", JSON.stringify(response.data.Data));
          }
        })
        .catch((e) => console.log(e));
        setOpen(false)
    };

    fetchData();
  }, []);

  const handleProfile = async (id) => {
    console.log("User index : ", id);
    const obj = accountData[id - 1]._id;
    console.log(obj);
    navigate(`/Ad_User_Profile/${id}`);
    console.log("Handle Profile");
};

const handleTransaction = async (id) => {
    console.log("User index : ", id);
    const obj = accountData[id - 1]._id;
    navigate(`/Ad_User_Transrction/${obj}`);
    console.log("Handle Transaction");
  };

  return (
    <div className="adcreat">
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
          <div className="createtable">
            <h2 className="mb-3">Create Account data</h2>
            <table class="table table-striped">
              <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Name</th>
                  <th scope="col">Mobile</th>
                  <th scope="col">DOB</th>
                  <th scope="col">MonthlyIncome</th>
                </tr>
              </thead>
              <tbody>
                {accountData.map((elem, index) => (
                  <tr key={index}>
                    <td className="text-deco">{index + 1}</td>
                    <td className="text-deco">
                      {elem.FirstName} {elem.LastName}
                    </td>
                    <td className="text-deco">{elem.Mobile}</td>
                    <td className="text-deco">{elem.DOB}</td>
                    <td className="text-deco">{elem.MonthlyIncome}</td>
                    <td className="text-deco">
                      <button className="btn btn-primary" onClick={() => handleProfile(index + 1)}>Profile</button>
                    </td>
                    <td>
                      {" "}
                      <button className="btn btn-primary" onClick={() => handleTransaction(index + 1)}>
                        Transaction
                      </button>{" "}
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

export default Create_Account_data;
