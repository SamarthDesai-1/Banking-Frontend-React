import React from 'react'
import { NavLink } from 'react-router-dom'
import "../style-css/Close_Account_Rejected.css";

function Close_Account_Rejected() {
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
    <div class="jumbotron jumbotron-fluid loanreject">
      <div class="container">
        <h1 class="display-5">Your Close Account application is Rejected</h1>
        <p class="lead">
        Due to some reason your previous account close application is rejected by click on the below link to fill the form again.
        </p>
        <NavLink to="/Close_Account_Rejected_Form">Go To Account Form</NavLink>
      </div>
    </div>
  </div>
  )
}

export default Close_Account_Rejected
