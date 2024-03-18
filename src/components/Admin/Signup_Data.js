import React, { useState, useEffect } from "react";
import Admin_Navbar from "./Admin_Navbar";
import Admin_Sidebar from "./Admin_Sidebar";
import "../../style-css/Admin/Signup_Data.css";
import axios from "axios";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import Tostyfy from "../Tostyfy";

function Signup_Data() {
  const [signupData, setSignupData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setOpen(true);
      try {
        const response = await axios.get(
          "http://localhost:5000/test/api/users/get-signup-data",
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (response.status === 200) {
          console.log(response);
          setSignupData(response.data.Data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
      setOpen(false);
    };
    fetchData();
  }, []);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  useEffect(() => {
    const filteredResults = signupData.filter((item) =>
      `${item.FirstName} ${item.LastName}  ${item.Email}`
        .toLowerCase()
        .includes(searchQuery.toLowerCase())
    );
    setFilteredData(filteredResults);
  }, [searchQuery, signupData]);

  return (
    <div className="adsign">
      {/* <Tostyfy></Tostyfy> */}
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
          <div className="signtable">
            <div className="row">
              <div className="col-md-6">
                <h2 className="mb-3">Signup data</h2>
              </div>
              <div className="col-md-6">
                <form className="d-flex adserch">
                  <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    value={searchQuery}
                    onChange={handleSearchChange}
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
                  <th className="text-deco" scope="col">
                    ID
                  </th>
                  <th className="text-deco" scope="col">
                    First Name
                  </th>
                  <th className="text-deco" scope="col">
                    Last Name
                  </th>
                  <th className="text-deco" scope="col">
                    Email
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredData.length > 0 ? (
                  filteredData.map((elem, index) => (
                    <tr key={index}>
                      <td className="text-deco">{index + 1}</td>
                      <td className="text-deco">{elem.FirstName}</td>
                      <td className="text-deco">{elem.LastName}</td>
                      <td className="text-deco">{elem.Email}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="4" className="text-center">
                      No matching results found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup_Data;
