import React from "react";
import Deshbord_Sidebar from "./Deshbord_Sidebar";
import "../style-css/Apply_fix_recurring.css";
import Deshbord_Navbar from "./Deshbord_Navbar";
import { NavLink } from "react-router-dom";
import axios from "axios";

function Apply_fix_recurring() {

  return (
    <div className="Apply_fix_recurring">
      <Deshbord_Navbar></Deshbord_Navbar>
      <div className="row">
        <div className="col-sm-3">
          <Deshbord_Sidebar></Deshbord_Sidebar>
        </div>
        <div className="col-sm-9">
          <div className="listi">
            <div className="containe-two col-md-8">
              <div className="contain">
                <div className="box">
                  <NavLink to="../Fix_Deposit_form">
                    {" "}
                    <h4 className="ms-3">Open Fixed Deposit</h4>
                  </NavLink>
                </div>
                {/* <div className="box">
                                <NavLink to=""><h4 className='ms-3'>Open Recurring Deposit</h4></NavLink>
                                </div> */}
                <div className="box">
                  <NavLink to="../View_rates">
                    <h4 className="ms-3">View All Rates</h4>
                  </NavLink>
                </div>
                <div className="box">
                  <NavLink to="../Deposit_status">
                    <h4 className="ms-3">View Fix/Recurring Deposit Status</h4>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Apply_fix_recurring;
