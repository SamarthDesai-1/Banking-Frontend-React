import React, { useState, useEffect } from "react";
import "../../style-css/Admin/Debit_Card_data.css";
import Admin_Navbar from "./Admin_Navbar";
import Admin_Sidebar from "./Admin_Sidebar";
import axios from "axios";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import Tostyfy from "../Tostyfy";

function Debit_Card_data() {
  const [cardData, setCardData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchQuery, setSearchNoQuery] = useState("");
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
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
      setOpen(false);
    };
    fetchData();
  }, []);

  const handleSearchAccountNoChange = (event) => {
    setSearchNoQuery(event.target.value);
  };

  useEffect(() => {
    const filteredResults = cardData.filter((item) =>
      `${item.FirstName} ${item.LastName} ${item.Email} ${item.DebitCardNumber} ${item.AccountNo}`
        .toLowerCase()
        .includes(searchQuery.toLowerCase())
    );
    setFilteredData(filteredResults);
  }, [searchQuery, cardData]);

  return (
    <div className="addebitcard">
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
          <div className="debittable">
            <div className="row">
              <div className="col-md-6">
                <h2 className="mb-3">Debit Card data</h2>
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
                  <th scope="col">Email</th>
                  <th scope="col">Account No</th>
                  <th scope="col">Debit Card Number</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map((elem, index) => (
                  <tr key={index}>
                    <td className="text-deco">{index + 1}</td>
                    <td className="text-deco">
                      {elem.FirstName} {elem.LastName}
                    </td>
                    <td className="text-deco">{elem.Email}</td>
                    <td className="text-deco">{elem.AccountNo}</td>
                    <td className="text-deco">{elem.DebitCardNumber}</td>
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
