import React from "react";
import "../style-css/Footer.css";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <div className="Footer">
      <div className="footer-section">
        <div className="items">
          <div className="section">
            <ul>
              <b>
                {" "}
                <h3>TOP LINKS</h3>
              </b>
              <li>View Personal Cards</li>
              <li>Terms and Conditions</li>
              <li>Schedule of Fees and Charges</li>
            </ul>
          </div>
          <div className="section">
            <ul>
              <b>
                <h3>BUSINESS LINKS</h3>
              </b>
              <li>View Corporate Cards</li>
              <li>Corporate Travel</li>
              <li>Merchant Know Your Customer</li>
              <li>Corporate Know Your Customer</li>
              <li>Know Your Customer</li>
            </ul>
          </div>
          <div className="section">
            <ul>
              <b>
                <h3>COMPANY INFORMATION</h3>
              </b>
              <li>Vision and Mission Statement</li>
              <li>Customer Service Committee</li>
              <li>Complaints</li>
              <li>Careers</li>
              <li>COVID-19 FAQs</li>
            </ul>
          </div>
          <div className="section">
            <ul>
              <b>
                <h3>POLICY AND REGULATION</h3>
              </b>
              <li>Notice Board</li>
              <li>Financial Disclosure</li>
              <li>Our Codes and Policies</li>
              <li>Do Not Call Registry</li>
              <li>Card Fraud</li>
              <li>Regulatory Notifications</li>
            </ul>
          </div>
        </div>

        <div className="footer-section">
          <h2>Transact Payments.</h2>
          <div className="border-style"></div>
          <div className="footer-1">
            <p>Website Rules and Regulations</p>
            <p>Trademarks</p>
            <p>Privacy Centre</p>
            <p>Sitemap</p>
            <NavLink to="/Signup_Signin" style={{ textDecoration: "none" }}>
              <p>Adimn Login</p>
            </NavLink>
          </div>
          <div className="footer-2">
            <h5>Copyright © 2023 Transact payments Company | Transact Corp.</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
