import React, { useState, useEffect } from "react";
import Deshbord_Sidebar from "./Deshbord_Sidebar";
import Deshbord_Navbar from "./Deshbord_Navbar";
import "../style-css/Debitcard.css";
import axios from "axios";
import { toast } from "react-toastify";
import { loadStripe } from '@stripe/stripe-js';
import BlockIcon from '@mui/icons-material/Block';
//loading bar
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import Tooltip from '@mui/material/Tooltip';
import { useNavigate } from "react-router-dom";


function Debitcard() {

  const navigate = useNavigate();

  const sessionToken = JSON.parse(sessionStorage.getItem("Token"));
  const sessionEmail = JSON.parse(sessionStorage.getItem("Email"));

  const [data, setData] = useState("");
  const [open, setOpen] = React.useState(false);
  const [account, setAccount] = useState("");
  const [cvv, setCvv] = useState("");
  const [amount, setAmount] = useState("");

  useEffect(() => {
    const OBJ = JSON.parse(sessionStorage.getItem("CardData"));
    console.log("OBJECT : ", OBJ);
    setData(OBJ);
  }, []);

  const handelPayment = async () => {
    try {
      if (account == "" || cvv === "" || amount === "") {
        toast.error("Please fill the form for payment");
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
      setOpen(true)
      console.log(JSON.stringify(body));
      const response = await axios.post("http://localhost:5000/test/api/users/create-checkout-session", { array, sessionToken, sessionEmail }, {
        headers: {
          "Content-Type": "application/json"
        }
      }).catch((e) => {
        toast.error(e.response.data.msg);
      });
      setOpen(false)


      console.log(response);
      const session = await response.data.Data.id;

      const result = stripe.redirectToCheckout({
        sessionId: session
      });
    } catch (e) {
      console.log("Error : ", e);
    }

  };


  const [reason, setReason] = useState("");
  const handleBlock = async () => {
    console.log("Handle block");

    try {
      
      if (reason === "") {
        toast.error("Please fill the form for payment");
        return;
      }
      
      /** API for block card */
      const data = await axios.post("http://localhost:5000/test/api/users/block-card", { sessionEmail, sessionToken }, {
        headers: {
          "Content-Type": "application/json"
        },
      }).then((response) => {

        if (response?.status == 200) navigate("/PINvarify");
  
      });

    } catch (error) {
      console.log("Error : ", error);
    }
  };

  return (
    <div className="debitcard">

      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Block Debit Card</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <form>
                <div class="mb-3">
                  <label for="message-text" class="col-form-label">Reason</label>
                  <textarea class="form-control" id="message-text" onChange={(e) => setReason(e.target.value)}></textarea>
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" class="btn btn-danger" onClick={handleBlock}>Block</button>
            </div>
          </div>
        </div>
      </div>


      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
      // onClick={handleClose}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <Deshbord_Navbar></Deshbord_Navbar>
      <div className="row">
        <div className="col-sm-3">
          <Deshbord_Sidebar></Deshbord_Sidebar>
        </div>
        <div className="col-sm-9 dcardform">

          <Tooltip title="Block dabit card" arrow data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo"><BlockIcon className="blockcard"></BlockIcon></Tooltip>


          <div className="row">


            <div className="col-md-7">


              <div class="card text-white debit" style={{ border: "none" }}>
                <img src="/IMAGES/dabitcard.png" class="card-img ddcardimg" alt="..." />
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
            </div>

            <div className="col-md-4" >
              <form className="m-4 dcardform">
                <div class="mb-3">
                  <input type="text" onChange={(e) => setAccount(e.target.value)} placeholder="Account No" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div class="mb-3">
                  <input type="number" placeholder="Amount" onChange={(e) => setAmount(e.target.value)} class="form-control" id="exampleInputPassword1" />
                </div>
                <div class="mb-3">
                  <input type="password" maxLength={3} placeholder="CVV" onChange={(e) => setCvv(e.target.value)} class="form-control" id="exampleInputPassword1" />
                </div>
                <button type="button" className="btn btn-success" style={{ width: "100%" }} onClick={handelPayment}>Pay with debit card</button>
              </form>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}

export default Debitcard;
