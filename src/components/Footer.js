import React from "react";
import "../style-css/Footer.css";
import { NavLink } from "react-router-dom";
import MarkunreadOutlinedIcon from "@mui/icons-material/MarkunreadOutlined";
import PhoneInTalkOutlinedIcon from "@mui/icons-material/PhoneInTalkOutlined";

function Footer() {
  return (
    <div className="Footer">
      <div className="footer-section">
        <div className="items">
        <div className="section">
            <ul>
              <b>
                <h3>Transact Bank</h3>
              </b>
              <p style={{color:"#4895ef"}}> Provide a guide to online banking services, including how to set up online accounts, make transactions, pay bills, transfer funds, and manage finances securely over the internet.  </p>
            </ul>
          </div>
          <div className="section">
            <ul>
              <b>
                {" "}
                <h3>TOP LINKS</h3>
              </b>
              <NavLink to="/PINvarify" style={{ textDecoration: "none" }}> <li>View Personal Cards</li></NavLink> 
              <li>Terms and Conditions</li>
            </ul>
          </div>
          <div className="section">
            <ul>
              <b>
                <h3>QUICK LINKS</h3>
              </b>
              <NavLink to="/Signup_Signin" style={{ textDecoration: "none" }}><li>Signup</li></NavLink>
              <NavLink to="/" style={{ textDecoration: "none" }}><li>Home</li></NavLink>
              <NavLink to="/About_us" style={{ textDecoration: "none" }}><li>About us</li></NavLink>
              <NavLink to="/Contect" style={{ textDecoration: "none" }}><li>Contact</li></NavLink>
              <NavLink to="/Help" style={{ textDecoration: "none" }}><li>Help</li></NavLink>
              <NavLink to="/Create_Account" style={{ textDecoration: "none" }}><li>Create Account</li></NavLink>
            </ul>
          </div>
         
          <div className="section me-5">
            <ul>
              <b>
                <h3>Support Assistanse</h3>
              </b>
              <div  className="tag d-flex">
                        <div style={{color:"#4895ef"}} className='me-2'><PhoneInTalkOutlinedIcon ></PhoneInTalkOutlinedIcon></div>
                        <div style={{color:"#4895ef"}} className=''>0265 400907</div>
                    </div>

                    <div  className="tag d-flex">
                        <div style={{color:"#4895ef"}} className='me-2'><MarkunreadOutlinedIcon ></MarkunreadOutlinedIcon></div>
                        <div style={{color:"#4895ef"}} className=''>support@Transact.in</div>
                    </div>

            </ul>
          </div>
        </div>

        <div className="footer-section">
          <h2>Transact Payments.</h2>
          <div className="border-style"></div>
          <div className="footer-1">
          <NavLink to="/PINvarify" style={{ textDecoration: "none" }}> <p>Accounts Trasfer</p></NavLink>
          <NavLink to="/PINvarify" style={{ textDecoration: "none" }}><p>Deposit</p></NavLink>
          <NavLink to="/PINvarify" style={{ textDecoration: "none" }}><p>Withdraw</p></NavLink>
          <NavLink to="/PINvarify" style={{ textDecoration: "none" }}> <p>Debit Card</p></NavLink>
            <NavLink to="/Signup_Signin" style={{ textDecoration: "none" }}>
              <p>Signup</p>
            </NavLink>
          </div>
          <div className="footer-2">
            <h5>Copyright © 2023 Transact payments Bank | Transact Bank</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;