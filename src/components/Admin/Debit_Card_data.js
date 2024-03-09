import React, { useState } from "react";
import "../../style-css/Admin/Debit_Card_data.css";
import Admin_Navbar from "./Admin_Navbar";
import Admin_Sidebar from "./Admin_Sidebar";
import { useEffect } from "react";
import axios from "axios";

function Debit_Card_data() {
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await axios
        .get("http://localhost:5000/test/api/users/get-debit-card-data", {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          if (response?.status === 200) {
            console.log(response);
            setCardData(response.data.Data);
          }
        })
        .catch((e) => console.log(e));
    };

    fetchData();
    
  }, []);

  return (
    <div className="addebitcard">
      <Admin_Navbar></Admin_Navbar>
      <div className="row">
        <div className="col-sm-3">
          <Admin_Sidebar></Admin_Sidebar>
        </div>
        <div className="col-sm-9">
          <div className="debittable">
            <h2 className="mb-3">Debit Card data</h2>
            <table class="table table-striped">
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
                {cardData.map((elem, index) => (
                  <tr key={index}>
                    <td className="text-deco">{index + 1}</td>
                    <td className="text-deco">{elem.AccountNo}</td>
                    <td className="text-deco">{elem.CardIssuer}</td>
                    <td className="text-deco">{elem.Email}</td>
                    <td className="text-deco">
                      {elem.ExpiryDate.substring(0, 10)}
                    </td>
                    <td className="text-deco">{elem.FirstName} {elem.LastName}</td>
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
