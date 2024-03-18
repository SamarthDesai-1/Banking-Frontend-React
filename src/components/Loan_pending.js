import React, { useEffect, useState } from "react";
import "../style-css/Loan_pending.css";
import { NavLink } from "react-router-dom";
import Tostyfy from "./Tostyfy";

function Loan_pending() {
  return (
    <div
      className="jum "
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      {/* <Tostyfy></Tostyfy> */}
      <div class="jumbotron jumbotron-fluid jomtext">
        <div class="container">
          <h1 class="display-4">Your loan application is pending</h1>
          <p class="lead">
            Kindly review pending loan requests. Urgent action required for timely processing. Thank you for your attention.
          </p>
          <NavLink to="/Deshbord"> 🏠 Go To Dashbord</NavLink>
        </div>
      </div>
    </div>
  );
}

export default Loan_pending;
