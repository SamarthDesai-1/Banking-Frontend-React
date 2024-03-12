import React, { useState } from "react";
import "../style-css/PINvarify.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// loading bar
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { toast } from "react-toastify";
import swal from "sweetalert";

function PINvarify() {
  const [data, setData] = useState("");
  const [image, setImage] = useState();

  const [pin, setPin] = useState("");
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();

  const verifyPIN = async () => {
    console.log("User click verify PIN");

    const PIN = pin;

    if (PIN === "") {
      toast.error("Enter PIN first to access your profile");
      return;
    }

    const sessionEmail = JSON.parse(sessionStorage.getItem("Email"));
    const sessionToken = JSON.parse(sessionStorage.getItem("Token"));

    console.log(PIN);
    try {
      setOpen(true);
      const response = await axios
        .post(
          "http://localhost:5000/test/api/users/verify-pin",
          { PIN, sessionEmail, sessionToken },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((response) => {
          setOpen(true);
          if (response?.status === 200) {
            setOpen(true);
            console.log(response);

            /** call API's here */

            const fetchData = async () => {
              setOpen(true);
              console.log("Session Token : ", sessionToken);

              try {
                setOpen(true);
                console.log("API execute soon");
                const response = await axios.post(
                  "http://localhost:5000/test/api/users/customer-finance",
                  { sessionEmail, sessionToken },
                  {
                    headers: {
                      "Content-Type": "application/json",
                    },
                  }
                );
                setOpen(true);
                console.log("API execute successfully");
                console.log(response);
                console.log("Response data : ", response.data.data[0]);
                console.log("Image Path : ", response.data.data[0].Photo);
                setData(response.data.data[0]);
                sessionStorage.setItem(
                  "AccountData",
                  JSON.stringify(response.data.data[0])
                );

                console.log("Data : ", data);
                setImage(response.data.data[0].Photo);
                setOpen(true);
                let getData = true;
                const AccountData = await axios
                  .post(
                    "http://localhost:5000/test/api/users/customer-finance",
                    { sessionToken, sessionEmail, getData },
                    {
                      headers: {
                        "Content-Type": "application/json",
                      },
                    }
                  )
                  .then((response) => {
                    setOpen(true);
                    console.log("Response from BILLIOns : ", response);
                    console.log("Account open data : ", response.data.Data[0]);
                    sessionStorage.setItem(
                      "AccountOpenData",
                      JSON.stringify(response.data.Data[0])
                    );
                  });
                setOpen(true);
                const CardData = await axios
                  .post(
                    "http://localhost:5000/test/api/users/card-detail-fetcher",
                    { sessionEmail, sessionToken },
                    {
                      headers: {
                        "Content-Type": "application/json",
                      },
                    }
                  )
                  .then((response) => {
                    console.log(
                      "Response from debit card database : ",
                      response
                    );
                    sessionStorage.setItem(
                      "CardData",
                      JSON.stringify(response.data.Data[0])
                    );
                    
                  })
                  .catch((e) => console.log(e));

                /** display amount API */
                setOpen(true);
                const balanceData = await axios
                  .post(
                    "http://localhost:5000/test/api/users/get-debit-data",
                    { sessionEmail },
                    {
                      headers: {
                        "Content-Type": "application/json",
                      },
                    }
                  )
                  .then((response) => {
                    console.log(response);
                    sessionStorage.setItem(
                      "BalanceData",
                      JSON.stringify(response.data.Data)
                    );
                    navigate("/Deshbord");
                  })
                  .catch((e) => console.log(e));

              } catch (error) {
                console.log("Error : ", error);
              }
            };

            fetchData();
          }
        })
        .catch(async (e) => {
          console.log(e.response.data.msg);
          console.log("Error : ", e);
          toast.error(e.response.data.msg);
        });
    } catch (e) {
      console.log("Error : ", e);
      toast.error("Invalid PIN");
    }
    setOpen(false);
  };

  const forgetPIN = async () => {
    setOpen(true);
    const sessionToken = JSON.parse(sessionStorage.getItem("Token"));
    const sessionEmail = JSON.parse(sessionStorage.getItem("Email"));
    console.log("User click forget PIN");
  

    const data = await axios
      .post(
        "http://localhost:5000/test/api/users/forget-pin",
        { sessionToken, sessionEmail },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        swal({
          text: "Check your inbox mail and enter OTP below for authentication.",
          icon: "info",
          dangerMode: false,
        })
        .then(() => {
          if (response?.status == 200) {
            console.log(response); 
            navigate("/ForgetPINOTP");
          }
        });
      })
      .catch((e) => console.log("Error : ", e));
      
    setOpen(false);
  };

  return (
    <div className="pin">
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        // onClick={handleClose}
      >
        <CircularProgress color="inherit" />
      </Backdrop>

      <div class="container">
        <div class="box-1">
          <div class="image-section">
            <img src="./IMAGES/PINvarify.png" alt="" class="admin-image" />
          </div>
          <div class="form-section">
            <form>
              <input
                type="password"
                class="format"
                placeholder="PIN"
                maxlength="4"
                name="pin"
                onChange={(e) => setPin(e.target.value)}
              />
              <br />
              <div class="btn-section">
                <input
                  type="button"
                  value="Verify"
                  class="btn"
                  name="subbtn"
                  onClick={verifyPIN}
                />
                <input
                  type="button"
                  value="Forget PIN"
                  class="btn-primary"
                  onClick={forgetPIN}
                />
              </div>
            </form>
          </div>
        </div>

        <div class="box-2">
          <h1 class="big-font">Privacy & Policy</h1>
          <p>
            A Personal Identification Number (PIN) is a numeric or alphanumeric
            code used as a security measure to authenticate a user's identity,
            typically in electronic transactions or access control systems. PINs
            are widely used in various contexts, including banking, mobile
            devices, email accounts, and access to physical facilities.
          </p>
          <p>
            Privacy and policy, often referred to as privacy policies, are legal
            documents or statements that outline how an organization collects,
            uses, manages, and protects the personal information of individuals.
            Privacy policies are essential for maintaining transparency and
            establishing trust between businesses and their users or customers..
          </p>
          <br />
          <br />
          <div class="liner"></div>
          <h3>Transact Banking Company.</h3>
        </div>
      </div>
    </div>
  );
}

export default PINvarify;
