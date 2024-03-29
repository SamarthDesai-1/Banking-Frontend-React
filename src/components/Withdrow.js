import React, { useState } from "react";
import "../style-css/Withdrow.css";
import Deshbord_Sidebar from "./Deshbord_Sidebar";
import Deshbord_Navbar from "./Deshbord_Navbar";
import axios from "axios";
import swal from "sweetalert";
//loading bar
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Tostyfy from "./Tostyfy";

function Withdrow() {
  const [amount, setAmount] = useState();
  const [pin, setPin] = useState("");

  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();

  const handleData = async () => {
    const sessionEmail = JSON.parse(sessionStorage.getItem("Email"));
    const sessionToken = JSON.parse(sessionStorage.getItem("Token"));

    console.log(sessionEmail);
    console.log(sessionToken);

    console.log(`Amount : ${amount} Pin : ${pin}`);

    try {
      setOpen(true)
      if (amount !== undefined && pin !== "") {
        const data = await axios.post("http://localhost:5000/test/api/users/withdraw-funds", { sessionEmail, sessionToken, amount, pin }, {
          headers: {
            'Content-Type': 'application/json'
          }
        }).then(async response => {

          console.log(response);

          if (response?.status == 200) {
            const data = await axios.post("http://localhost:5000/test/api/users/customer-finance", { sessionEmail, sessionToken }, {
              headers: {
                "Content-Type": "application/json",
              },
            }).then(response => {
              console.log("Updated Data : ", response.data.data[0]);
              sessionStorage.setItem("AccountData", JSON.stringify(response.data.data[0]));
              navigate("/Deshbord")
            }).catch(e => console.log(e));
          }

          // setAmount();
          // setPin("")
          swal({
            icon: "success",
            text: '\u20B9 ' + `${amount}`  + ' Withdrow successfuly'
          });

        }).catch(e => {
          let msgFromServer = e.response.data.msg;
          console.log("Server says : ", msgFromServer);
          toast.error(msgFromServer);
          // return;
        })
      } else {
        toast.error("Fill the Withdrow funds details properly");
        // return;
      }
    } catch (error) { }
    setOpen(false)
  };

  return (
    <div className="Withdrow">
{/* <Tostyfy></Tostyfy> */}
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
        <div className="col-sm-6 pt-4 withdrowform">
          <form className="p-5 wdfom">
            <h2 className="">Withdraw Money</h2>
            <p>Enter the amount you eant to Withdrow.</p>
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
              value="Withdrow Money"
              onClick={handleData}
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Withdrow;
