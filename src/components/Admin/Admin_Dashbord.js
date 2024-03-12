import React from "react";
import "../../style-css/Admin/Admin_Dashbord.css";
import Admin_Navbar from "./Admin_Navbar";
import Admin_Sidebar from "./Admin_Sidebar";
import '../../style-css/Admin/Admin_Dashbord.css'

function Admin_Dashbord() {
  return (
    <div className="adidas">
      <Admin_Navbar></Admin_Navbar>
      <div className="row">
        <div className="col-sm-3">
          <Admin_Sidebar></Admin_Sidebar>
        </div>
        <div className="col-sm-9">
          <div className="cardrow row">
            <div className=" col-sm-3">
              <div className="box">
                <div class="card1 card text-white">
                  <img
                    className=""
                    src="././IMAGES/circle.png"
                    class="card-img"
                    alt="..."
                    style={{ backgroundColor: "#5d9ca1" }}
                  />
                  <div class="card-img-overlay">
                    <h3>
                    &#x20B9;
                    {/* {accountData && accountData.Balance} */}
                    </h3>
                    <p>Balance</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="box">
                <div class="card2 card text-white">
                  <img
                    className=""
                    src="./IMAGES/circle.png"
                    class="card-img"
                    alt="..."
                    style={{ backgroundColor: "#4c4272" }}
                  />
                  <div class="card-img-overlay">
                 
                    <h3>
                    &#x20B9;
                    {/* {credit && credit.totalAmount} */}
                      </h3>
                    <p>Credit Transection</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="box">
                <div class="card3 card text-white">
                  <img
                    className=""
                    src="./IMAGES/circle.png"
                    class="card-img"
                    alt="..."
                    style={{ backgroundColor: "#7c4040" }}
                  />
                  <div class="card-img-overlay">
                    <h3>
                      &#x20B9;
                      {/* {accountData &&
                        credit &&
                        accountData.Balance - credit.totalAmount} */}
                    </h3>
                    <p>Debit Transection</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admin_Dashbord;
