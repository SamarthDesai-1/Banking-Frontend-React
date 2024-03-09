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
  const [nameQuery, setNameQuery] = useState("");
  const [incomeQuery, setIncomeQuery] = useState("");
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
          setAccountData(response.data.Data);
          setOpen(false);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setOpen(false);
      }
    };
    fetchData();
  }, []);

  const handleSearchNameChange = (event) => {
    setNameQuery(event.target.value);
  };

  const handleSearchIncomeChange = (event) => {
    setIncomeQuery(event.target.value);
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
    const filteredResults = accountData.filter(
      (item) =>
        `${item.FirstName} ${item.LastName}`
          .toLowerCase()
          .includes(nameQuery.toLowerCase()) &&
        item.MonthlyIncome.toString().includes(incomeQuery)
    );
    setFilteredData(filteredResults);
  }, [nameQuery, incomeQuery, accountData]);

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
            <h2 className="mb-3">Create Account data</h2>
            <form className="d-flex adserch">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search by Name"
                aria-label="Search"
                value={nameQuery}
                onChange={handleSearchNameChange}
              />
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search by Monthly Income"
                aria-label="Search"
                value={incomeQuery}
                onChange={handleSearchIncomeChange}
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
            <table className="table table-striped">
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
                {filteredData.map((elem, index) => (
                  <tr key={index}>
                    <td className="text-deco">{index + 1}</td>
                    <td className="text-deco">
                      {elem.FirstName} {elem.LastName}
                    </td>
                    <td className="text-deco">{elem.Mobile}</td>
                    <td className="text-deco">{elem.DOB}</td>
                    <td className="text-deco">{elem.MonthlyIncome}</td>
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
