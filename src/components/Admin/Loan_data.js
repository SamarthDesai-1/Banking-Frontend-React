import React, { useEffect, useState } from "react";
import "../../style-css/Admin/Loan_data.css";
import Admin_Navbar from "./Admin_Navbar";
import Admin_Sidebar from "./Admin_Sidebar";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Loan_data() {
  const [data, setdata] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios
        .get("http://localhost:5000/test/api/users/get-loan-data", {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          setdata(response.data.Data);
        })
        .catch((e) => {
          console.log(e);
        });
    };
    fetchData();
  }, []);

  const handleStatus = (idx, string) => {
    console.log(idx);
    
    console.log(data[idx]);
    sessionStorage.setItem("LoanData", JSON.stringify(data[idx]));
    navigate("/Loan_Request");
  };

  return (
    <div className="londata">
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
                    // value={searchQuery}
                    // onChange={handleSearchAccountNoChange}
                  />
                  <button className="btn btn-outline-success" type="submit">
                    Search
                  </button>
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
                </tr>
              </thead>
              <tbody>
                {data.map((elem, index) => (
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
                      <button className="btn btn-info" style={{ color: "white" }} onClick={() => handleStatus(index, elem._id)}>Status</button>
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
