import React, { useState } from "react";
import Deshbord_Navbar from "./Deshbord_Navbar";
import Deshbord_Sidebar from "./Deshbord_Sidebar";
import "../style-css/Add_Money.css";
import axios from "axios";
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";

//loading bar
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import Tostyfy from "./Tostyfy";

function Add_Money() {
  /** Add loading bar at here */

  const [accountNo, setAccountNo] = useState("");
  const [amount, setAmount] = useState();
  const [pin, setPin] = useState("");

  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();

  const handleData = async () => {
    const sessionEmail = JSON.parse(sessionStorage.getItem("Email"));
    const sessionToken = JSON.parse(sessionStorage.getItem("Token"));

    console.log(sessionEmail);
    console.log(sessionToken);

    console.log(
      `AccountNo : ${accountNo} Amount : ${typeof amount} Pin : ${pin}`
    );

    try {
      setOpen(true);
      if (accountNo !== "" && amount !== undefined && pin !== "") {
        /** Call API for add funds */

        const data = await axios
          .post(
            "http://localhost:5000/test/api/users/add-funds",
            { sessionToken, sessionEmail, accountNo, amount, pin },
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          )
          .then(async (response) => {
            console.log(response);

            if (response?.status == 200) {
              const data = await axios
                .post(
                  "http://localhost:5000/test/api/users/customer-finance",
                  { sessionEmail, sessionToken },
                  {
                    headers: {
                      "Content-Type": "application/json",
                    },
                  }
                )
                .then((response) => {
                  console.log("Updated Data : ", response.data.data[0]);
                  sessionStorage.setItem(
                    "AccountData",
                    JSON.stringify(response.data.data[0])
                    );
                    navigate("/Deshbord")
                })
                .catch((e) => console.log(e));
            }
            // setAccountNo("");
            // setAmount("");
            // setPin("");
            swal({
              icon: "success",
              text: "\u20B9 " + `${amount}` + " added successfully",
            });
          })
          .catch((e) => {
            let msgFromServer = e.response.data.msg;
            console.log("Server says : ", msgFromServer);
            toast.error(msgFromServer);
            // return;
          });
      } else {
        toast.error("Fill the add funds details properly");
        // return;
      }
    } catch (error) {
      console.log("try catch error : ", error);
    }
    setOpen(false);
  };

  return (
    <div className="money">
     {/* <Tostyfy></Tostyfy> */}
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
        <div className="col-sm-6 pt-4 addform">
          <form className=" p-4 admfom">
            <h2 className="">Add Money</h2>
            <p>Enter the amount you want to add.</p>
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
              class="btn btn-primary"
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
