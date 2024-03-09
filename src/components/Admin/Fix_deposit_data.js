import React, { useState, useEffect } from "react";
import Admin_Navbar from "./Admin_Navbar";
import Admin_Sidebar from "./Admin_Sidebar";
import "../../style-css/Admin/Fix_deposit_data.css";
import axios from "axios";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

function Fix_deposit_data() {
  const [fdData, setFDData] = useState([]);
  const [accountNoQuery, setAccountNoQuery] = useState("");
  const [nameQuery, setNameQuery] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setOpen(true);
      try {
        const response = await axios.get(
          "http://localhost:5000/test/api/users/get-fd-data",
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (response.status === 200) {
          console.log(response);
          setFDData(response.data.Data);
          setOpen(false);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setOpen(false);
      }
    };
    fetchData();
  }, []);

  const handleSearchAccountNoChange = (event) => {
    setAccountNoQuery(event.target.value);
  };

  const handleSearchNameChange = (event) => {
    setNameQuery(event.target.value);
  };

  const filteredData = fdData.filter((item) =>
    item.AccountNo.toLowerCase().includes(accountNoQuery.toLowerCase()) &&
    `${item.FirstName} ${item.LastName} ${item.Email}`.toLowerCase().includes(nameQuery.toLowerCase())
  );

  return (
    <div className="fixdeposit">
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
          <div className="fixtable">
            <h2 className="mb-3">Fix Deposit data</h2>
            <form className="d-flex adserch">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search by Account Number"
                aria-label="Search"
                value={accountNoQuery}
                onChange={handleSearchAccountNoChange}
              />
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search by Email"
                aria-label="Search"
                value={nameQuery}
                onChange={handleSearchNameChange}
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Account No</th>
                  <th scope="col">Email</th>
                  <th scope="col">FD Amount</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map((elem, index) => (
                  <tr key={index}>
                    <td className="text-deco">{index + 1}</td>
                    <td className="text-deco">{elem.AccountNo}</td>
                    <td className="text-deco">{elem.Email}</td>
                    <td className="text-deco">{elem.Balance}</td>
                    <td className="text-deco">
                      <button className="btn btn-primary">View</button>
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
