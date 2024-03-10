import React, { useState, useEffect } from "react";
import Admin_Navbar from "./Admin_Navbar";
import Admin_Sidebar from "./Admin_Sidebar";
import "../../style-css/Admin/Create_Account_data.css";
import axios from "axios";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { useNavigate } from "react-router-dom";

function Create_Account_data() {
  const navigate = useNavigate();
  const [accountData, setAccountData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setOpen(true);
      try {
        const response = await axios.get(
          "http://localhost:5000/test/api/users/get-account-data",
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (response.status === 200) {
          console.log(response);
          sessionStorage.setItem(
            "AccountData",
            JSON.stringify(response.data.Data)
          );
          setAccountData(response.data.Data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
      setOpen(false);
    };
    fetchData();
  }, []);

  const handleSearchNameChange = (event) => {
    setSearchQuery(event.target.value);
  };

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

  useEffect(() => {
    const filteredResults = accountData.filter((item) =>
      `${item.FirstName} ${item.LastName} ${item.Email} ${item.AccountNo} ${item.Mobile}`
        .toLowerCase()
        .includes(searchQuery.toLowerCase())
    );
    setFilteredData(filteredResults);
  }, [searchQuery, accountData]);

  return (
    <div className="adcreat">
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <Admin_Navbar />
      <div className="row">
        <div className="col-sm-3">
          <Admin_Sidebar />
        </div>
        <div className="col-sm-9">
          <div className="createtable">
            <div className="row">
              <div className="col-md-6">
                <h2 className="mb-3">Create Account data</h2>
              </div>
              <div className="col-md-6">
                <form className="d-flex adserch">
                  <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    value={searchQuery}
                    onChange={handleSearchNameChange}
                  />
                  <button className="btn btn-outline-success" type="submit">
                    Search
                  </button>
                </form>
              </div>
            </div>

            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Name</th>
                  <th scope="col">Account No</th>
                  <th scope="col">Email</th>
                  <th scope="col">Mobile</th>
                  <th scope="col">Profile</th>
                  <th scope="col">Transection</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map((elem, index) => (
                  <tr key={index}>
                    <td className="text-deco">{index + 1}</td>
                    <td className="text-deco">
                      {elem.FirstName} {elem.LastName}
                    </td>
                    <td className="text-deco">{elem.AccountNo}</td>
                    <td className="text-deco">{elem.Email}</td>
                    <td className="text-deco">{elem.Mobile}</td>
                    <td className="text-deco">
                      <button
                        className="btn btn-primary"
                        onClick={() => handleProfile(index + 1)}
                      >
                        Profile
                      </button>
                    </td>
                    <td>
                      {" "}
                      <button
                        className="btn btn-primary"
                        onClick={() => handleTransaction(index + 1)}
                      >
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
