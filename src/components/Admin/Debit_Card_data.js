import React, { useState, useEffect } from "react";
import "../../style-css/Admin/Debit_Card_data.css";
import Admin_Navbar from "./Admin_Navbar";
import Admin_Sidebar from "./Admin_Sidebar";
import axios from "axios";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

function Debit_Card_data() {
  const [cardData, setCardData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [accountNoQuery, setAccountNoQuery] = useState("");
  const [nameQuery, setNameQuery] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setOpen(true);
      try {
        const response = await axios.get(
          "http://localhost:5000/test/api/users/get-debit-card-data",
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (response.status === 200) {
          console.log(response);
          setCardData(response.data.Data);
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

  useEffect(() => {
    const filteredResults = cardData.filter(
      (item) =>
        item.AccountNo.toString().includes(accountNoQuery) &&
        `${item.FirstName} ${item.LastName}`
          .toLowerCase()
          .includes(nameQuery.toLowerCase())
    );
    setFilteredData(filteredResults);
  }, [accountNoQuery, nameQuery, cardData]);

  return (
    <div className="addebitcard">
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
          <div className="debittable">
            <h2 className="mb-3">Debit Card data</h2>
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
                placeholder="Search by Name"
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
                  <th scope="col">Card Issuer</th>
                  <th scope="col">Email</th>
                  <th scope="col">Expiry Date</th>
                  <th scope="col">Name</th>
                  <th scope="col">Mobile</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map((elem, index) => (
                  <tr key={index}>
                    <td className="text-deco">{index + 1}</td>
                    <td className="text-deco">{elem.AccountNo}</td>
                    <td className="text-deco">{elem.CardIssuer}</td>
                    <td className="text-deco">{elem.Email}</td>
                    <td className="text-deco">
                      {elem.ExpiryDate.substring(0, 10)}
                    </td>
                    <td className="text-deco">
                      {elem.FirstName} {elem.LastName}
                    </td>
                    <td className="text-deco">{elem.Mobile}</td>
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

export default Debit_Card_data;
