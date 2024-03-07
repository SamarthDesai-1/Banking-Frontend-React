import React from "react";
import "../style-css/Account_Transfer.css";
import Deshbord_Navbar from "./Deshbord_Navbar";
import Deshbord_Sidebar from "./Deshbord_Sidebar";
import { useState } from "react";
import axios from "axios";

//loading bar
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

function Account_Transfer() {
  const [amount, setAmount] = useState();
  const [pin, setPin] = useState("");
  const [msg, setMsg] = useState("");
  const [recevier, setRecevierAccount] = useState("");

  const [open, setOpen] = React.useState(false);

  const handleData = async () => {
    console.log("Handle data");

    const sessionEmail = JSON.parse(sessionStorage.getItem("Email"));
    const sessionToken = JSON.parse(sessionStorage.getItem("Token"));

    console.log(sessionEmail);
    console.log(sessionToken);

    console.log(amount);
    console.log(pin);
    console.log(msg);
    console.log(recevier);

    try {
      setOpen(true);
      if (
        amount !== undefined &&
        pin !== undefined &&
        msg !== undefined &&
        recevier !== undefined
      ) {
        const data = await axios
          .post(
            "http://localhost:5000/test/api/users/tranfer-funds",
            { sessionEmail, sessionToken, amount, pin, msg, recevier },
            {
              "Content-Type": "application/json",
            }
          )
          .then((response) => {
            console.log(response);

            // setAmount();
            // setPin("");
            // setMsg("");
            // setRecevierAccount("");
          })
          .catch((e) => {
            let msgFromServer = e.response.data.msg;
            console.log("Server says : ", msgFromServer);
            alert(msgFromServer);
            return;
          });
      } else {
        alert("Fill fields properly");
        return;
      }
      setOpen(false);
    } catch (error) {}
  };

  return (
    <div className="account">
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
        <div className="col-sm-5 accountform">
          <form className="p-5">
            <h2 className="">Account Transfer</h2>
            <p>Enter the amount you want to Transfer.</p>
            <div class="mb-3 mt-5">
              <label for="exampleInputEmail1" class="form-label">
                Account Number (Recevier)
              </label>
              <input
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                required
                onChange={(e) => setRecevierAccount(e.target.value)}
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">
                Message
              </label>
              <textarea
                type="text"
                class="form-control"
                id="exampleInputPassword1"
                required
                onChange={(e) => setMsg(e.target.value)}
              />
            </div>

            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">
                Amount
              </label>
              <input
                type="number"
                class="form-control"
                id="exampleInputPassword1"
                required
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>

            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">
                PIN
              </label>
              <input
                type="password"
                class="form-control pin-only"
                id="exampleInputPassword1"
                required
                maxLength={4}
                onChange={(e) => setPin(e.target.value)}
              />
            </div>

            <button type="button" class="btn btn-dark" onClick={handleData}>
              Transfer
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Account_Transfer;
