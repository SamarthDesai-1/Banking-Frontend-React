import React from 'react'
import "../style-css/Close_Account_Pending.css";
import { NavLink } from 'react-router-dom';

function Close_Account_Pending() {
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
      <div class="jumbotron jumbotron-fluid loanpedjomtext">
        <div class="container">
          <h1 class="display-5">Your Close Account application is pending</h1>
          <p class="lead">
            Kindly review pending Close Account requests. Urgent action required for timely processing. Thank you for your attention.
          </p>
          <NavLink to="/Deshbord"> 🏠 Go To Dashbord</NavLink>
        </div>
      </div>
    </div>
  )
}

export default Close_Account_Pending
