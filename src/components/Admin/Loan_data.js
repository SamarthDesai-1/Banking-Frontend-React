import React, { useEffect, useState } from "react";
import "../../style-css/Admin/Loan_data.css";
import Admin_Navbar from "./Admin_Navbar";
import Admin_Sidebar from "./Admin_Sidebar";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import Tostyfy from "../Tostyfy";

function Loan_data() {
  const [data, setdata] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const [statusData, setStatusData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setOpen(true);
      const response = await axios
        .get("http://localhost:5000/test/api/users/get-loan-data", {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          console.log(response);
          setdata(response.data.Data);
          setStatusData(response.data.StatusData);
          console.log("Status Data : ", statusData);
        })
        .catch((e) => {
          console.log(e);
        });
      setOpen(false);
    };
    fetchData();
  }, []);


  useEffect(() => {
    const filteredResults = data.filter((item) =>
      `${item.FirstName}  ${item.LastName}  ${item.AccountNo} ${item.Profession} ${item.Employee}`
        .toLowerCase()
        .includes(searchQuery.toLowerCase())
    );
    setFilteredData(filteredResults);
  }, [searchQuery, data]);

  
  const handleStatus = (idx, string) => {
    console.log(idx);

    console.log(data[idx]);
    sessionStorage.setItem("LoanData", JSON.stringify(data[idx]));
    navigate("/Loan_Request");
  };


  const handleSearchAccountNoChange = (event) => {
    setSearchQuery(event.target.value);
  };

  
  return (
    <div className="londata">
      {/* <Tostyfy></Tostyfy> */}
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <Admin_Navbar></Admin_Navbar>
      <div className="row">
        <div className="col-sm-3">
          <Admin_Sidebar></Admin_Sidebar>
        </div>
        <div className="col-sm-9">
          <div className="loantable">
            <div className="row">
              <div className="col-md-6">
                <h2 className="mb-3">Loan data</h2>
              </div>
              <div className="col-md-6">
                <form className="d-flex adserch">
                  <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  value={searchQuery}
                  onChange={handleSearchAccountNoChange}
                  />
                 
                </form>
              </div>
            </div>

            <table class="table table-striped">
              <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Name</th>
                  <th scope="col">Account No</th>
                  <th scope="col">Profession</th>
                  <th scope="col">Reason</th>
                  <th scope="col">Employee</th>
                  <th scope="col">Status</th>
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
                    <td className="text-deco">{elem.Profession}</td>
                    <td className="text-deco">{elem.Reason}</td>
                    <td className="text-deco">{elem.Employee}</td>
                    <td>
                      <button
                        className="btn btn-info"
                        style={{ color: "white" }}
                        onClick={() => handleStatus(index, elem._id)}
                      >
                        Status
                      </button>
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

export default Loan_data;

