import React from "react";
import "../../style-css/Admin/Admin_Dashbord.css";
import Admin_Navbar from "./Admin_Navbar";
import Admin_Sidebar from "./Admin_Sidebar";

function Admin_Dashbord() {
  return (
    <div className="adidas">
      <Admin_Navbar></Admin_Navbar>
      <div className="row">
        <div className="col-sm-3">
          <Admin_Sidebar></Admin_Sidebar>
        </div>
        <div className="col-sm-9">{/* content hear */}</div>
      </div>
    </div>
  );
}

export default Admin_Dashbord;
