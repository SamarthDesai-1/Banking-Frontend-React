import React, { useState, useEffect } from "react";
import Deshbord_Sidebar from "./Deshbord_Sidebar";
import Deshbord_Navbar from "./Deshbord_Navbar";
import "../style-css/Debitcard.css";
import axios from "axios";

function Debitcard() {

  const [data, setData] = useState("");

  useEffect(() => {
    
    const OBJ = JSON.parse(sessionStorage.getItem("CardData"));
    console.log("OBJECT : ", OBJ);
    setData(OBJ);


  }, [])

  return (
    <div className="debitcard">
      <Deshbord_Navbar></Deshbord_Navbar>
      <div className="row">
        <div className="col-sm-3">
          <Deshbord_Sidebar></Deshbord_Sidebar>
        </div>
        <div className="col-sm-9">
          <div class="card text-white debit">
            <img src="/IMAGES/dabitcard.png" class="card-img" alt="..." />
            <div class="card-img-overlay">
              <p className="cvv">CVV/ {data && data.CVV}</p>
              <p className="expire">EX:- {data && data.ExpiryDate.substring(0,10)}</p>
              <h4 className="cardno">
                {data && data.DebitCardNumber.match(/.{1,4}/g).map((group, index) => (
                  <span key={index}>
                    {group} {/* Add a space after each group */}
                  </span>
                ))}
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Debitcard;
