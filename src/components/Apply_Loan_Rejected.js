import React from 'react'
import '../style-css/Apply_Loan_Rejected.css'
import { NavLink } from 'react-router-dom'

function Apply_Loan_Rejected() {
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
      <div class="jumbotron jumbotron-fluid aplloanre">
        <div class="container">
          <h1 class="display-5">Your Loan application is Rejected</h1>
          <p class="lead">
            Due to some reason your Loan application is rejected by click on the below link to fill the form again.
          </p>
          <NavLink to="/Loan_pending_Form">Go To Loan Form</NavLink>
        </div>
      </div>
    </div>
  )
}

export default Apply_Loan_Rejected
