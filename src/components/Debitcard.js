import React, { useState, useEffect } from "react";
import Deshbord_Sidebar from "./Deshbord_Sidebar";
import Deshbord_Navbar from "./Deshbord_Navbar";
import "../style-css/Debitcard.css";
import axios from "axios";
import Tostyfy from "./Tostyfy";

import { loadStripe } from '@stripe/stripe-js';

/** Apply Joi validation on account and cvv */

function Debitcard() {

  const sessionToken = JSON.parse(sessionStorage.getItem("Token"));
  const sessionEmail = JSON.parse(sessionStorage.getItem("Email"));

  const [data, setData] = useState("");

  const [account, setAccount] = useState("");
  const [cvv, setCvv] = useState("");
  const [amount, setAmount] = useState("");

  useEffect(() => {
    const OBJ = JSON.parse(sessionStorage.getItem("CardData"));
    console.log("OBJECT : ", OBJ);
    setData(OBJ);
  }, []);

  const handelPayment = async () => {

    if (!account && !cvv && !amount) {
      alert("Please fill the form for payment");
      return;
    }
    else if (account.charAt(0) == "-") {
      alert("Invalid account number");
      return;
    }
    const stripe = await loadStripe("pk_test_51Oun1nSIvL8Yx8zdMzLtTsXGqniB582J2wFugoLlfMzxhUYwDz0PrfBjTxDFVmmCWVRsFEv68f3slhDYPc3ZZFq200gMxKUZJz");  
    console.log("pay with card");

    const body = {
      AccountNo: account,
      Amount: amount,
      CVV: cvv
    };
    console.log(body);

    const array = [];
    array.push(body);

    console.log(JSON.stringify(body));

    const response = await axios.post("http://localhost:5000/test/api/users/create-checkout-session", { array, sessionToken, sessionEmail }, {
      headers: {
        "Content-Type": "application/json"
      }
    });

    console.log(response);
    const session = await response.data.Data.id;

    const result = stripe.redirectToCheckout({
      sessionId: session
    });

    if (result.error) {
      console.log(result.error);
    }

  };

  return (
    <div className="debitcard">
      {/* <Tostyfy></Tostyfy> */}
      <Deshbord_Navbar></Deshbord_Navbar>
      <div className="row">
        <div className="col-sm-3">
          <Deshbord_Sidebar></Deshbord_Sidebar>
        </div>
        <div className="col-sm-9">
          <div class="card text-white debit">
            <img src="/IMAGES/dabitcard.png" class="card-img" alt="..." />
            <div class="card-img-overlay">
              <p className="cvv">CVV/ {data && data.CVV.substring(0, 3)}</p>
              <p className="expire">
                EX:- {data && data.ExpiryDate.substring(0, 10)}
              </p>
              <h4 className="cardno">
                {data &&
                  data.DebitCardNumber.match(/.{1,4}/g).map((group, index) => (
                    <span key={index}>
                      {group} {/* Add a space after each group */}
                    </span>
                  ))}
              </h4>
            </div>
          </div>

          <div className="form-section">
            <input type="text" placeholder="Account No" onChange={(e) => setAccount(e.target.value)} />
            <input type="text" placeholder="Amount" onChange={(e) => setAmount(e.target.value)} />
            <input type="password" placeholder="CVV" maxLength={3} onChange={(e) => setCvv(e.target.value)} />
            <button className="btn btn-success" onClick={handelPayment}>Pay with debit card</button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Debitcard;
