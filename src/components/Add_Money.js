import React, { useState } from "react";
import Deshbord_Navbar from "./Deshbord_Navbar";
import Deshbord_Sidebar from "./Deshbord_Sidebar";
import "../style-css/Add_Money.css";
import axios from "axios";

//loading bar
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

function Add_Money() {
  /** Add loading bar at here */

  const [accountNo, setAccountNo] = useState("");
  const [amount, setAmount] = useState();
  const [pin, setPin] = useState("");


  const [open, setOpen] = React.useState(false);

  const handleData = async () => {
    const sessionEmail = JSON.parse(sessionStorage.getItem("Email"));
    const sessionToken = JSON.parse(sessionStorage.getItem("Token"));

    console.log(sessionEmail);
    console.log(sessionToken);

    console.log(`AccountNo : ${accountNo} Amount : ${typeof amount} Pin : ${pin}`);

    try {
      setOpen(true)
      if (accountNo !== "" && amount !== undefined && pin !== "") {
        /** Call API for add funds */

        const data = await axios.post("http://localhost:5000/test/api/users/add-funds", { sessionToken, sessionEmail, accountNo, amount, pin }, {
          headers: {
            'Content-Type': 'application/json'
          }
        }).then(response => {
          console.log(response);
          setAccountNo("");
          setAmount("");
          setPin("");
        }).catch(e => {
          let msgFromServer = e.response.data.msg;
          console.log("Server says : ", msgFromServer);
          alert(msgFromServer);
          return;
        });
      }
      else {
        alert("Fill the add funds details properly");
        return;
      }
    } catch (error) {
      console.log("try catch error : ", error);
    }
    setOpen(false)
   
  };

  return (
    <div className="money">
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
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
        <div className="col-sm-6 addform">
          <form className="p-5">
            <h2 className="">Add Money</h2>
            <p>Enter the amount you eant to add.</p>
            <div class="mb-3 mt-5">
              <label for="exampleInputEmail1" class="form-label">
                Account Number
              </label>
              <input
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                required
                maxLength={14}
                onChange={(e) => setAccountNo(e.target.value)}
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

            <input
              type="button"
              class="btn btn-dark"
              value="Deposit"
              onClick={handleData}
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Add_Money;
