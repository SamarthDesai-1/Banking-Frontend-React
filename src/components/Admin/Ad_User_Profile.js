import React, { useEffect, useState } from "react";
import "../../style-css/Admin/Ad_User_Profile.css";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";

import Tostyfy from "../Tostyfy";
//loading bar
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

function Ad_User_Profile() {
  const { userId } = useParams();
  const [customerData, setCustomerData] = useState([]);
  const [accountData, setAccountData] = useState();

  const [open, setOpen] = React.useState(false);

  const [image, setImage] = useState("");

  useEffect(() => {
    const storedArray = JSON.parse(sessionStorage.getItem("AccountData"));
    setAccountData();

    if (Array.isArray(storedArray)) {
      const desiredIndex = userId - 1;
      const desiredObject = storedArray[desiredIndex];

      console.log(desiredObject);
      setAccountData(desiredObject);
    }

    const fetchData = async () => {
      setOpen(true);
      /** call customer detail api */
      await axios
        .get("http://localhost:5000/test/api/users/get-customer-data", {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          if (response?.status === 200) {
            console.log(response.data.Data[userId - 1]);
            setCustomerData(response.data.Data[userId - 1]);
          }
        })
        .catch((e) => console.log(e));
      setOpen(false);
    };

    fetchData();
  }, []);

  return (
    <div className="aduserprofile">
      {/* <Tostyfy></Tostyfy> */}
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        // onClick={handleClose}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <div
        style={{
          minHeight: "100vh",
          backgroundColor: "#f3f4f6",
          display: "grid",
          gridTemplateRows: "auto 1fr auto",
          color: "#111",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div style={{ padding: "20px", maxWidth: "1200px", margin: "20px auto" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              paddingTop: "20px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "20px",
                width: "70vw",
              }}
            >
              <img
                src={
                  accountData &&
                  `http://localhost:5000/uploads/${accountData.Photo}`
                }
                width="100"
                height="100"
                style={{ borderRadius: "50%", objectFit: "cover" ,position:"absolute",left:"55px",marginBottom:"20px",}}
              />
              <div style={{ display: "grid", gridGap: "5px" }}>
                <h1
                  style={{ fontSize: "1.5rem", fontWeight: "bold", margin: 0 }}
                >{`${accountData && accountData.FirstName} ${
                  accountData && accountData.LastName
                }`}</h1>
                <p style={{ fontSize: "0.875rem", margin: 0, color: "#666" }}>
                  Customer ID : {!accountData ? "Waiting..." : accountData._id}
                </p>
              </div>
            </div>
            {/* /* content */}
          </div>
        </div>
        <div style={{ borderTop: "1px solid #ddd", padding: "20px 0" }}>
          <div className="d-flex">
            <h2
              style={{ fontWeight: "bold", color: "#666", marginLeft: "37px" }}
              className=""
            >
              Balance
            </h2>
            <h2 className="ms-5">₹{customerData && customerData.Balance}</h2>
          </div>

          <hr />
          <div
            style={{ padding: "0 20px", maxWidth: "1200px", margin: "0 auto" }}
          >
            <h2
              style={{
                fontSize: "1.25rem",
                fontWeight: "bold",
                margin: "0 0 10px",
              }}
            >
              Account Details
            </h2>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: "10px",
              }}
            ></div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "auto 1fr",
                gap: "10px",
              }}
            >
              <div
                style={{
                  fontSize: "0.875rem",
                  fontWeight: "bold",
                  color: "#666",
                }}
              >
                Account Number
              </div>
              <div style={{ marginLeft: "230px" }}>
                {accountData && accountData.AccountNo}
              </div>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "auto 1fr",
                gap: "10px",
              }}
            >
              <div
                style={{
                  fontSize: "0.875rem",
                  fontWeight: "bold",
                  color: "#666",
                }}
              >
                Account Type
              </div>
              <div style={{ marginLeft: "254px" }}>
                {accountData && accountData.AccountType}
              </div>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "auto 1fr",
                gap: "10px",
              }}
            >
              <div
                style={{
                  fontSize: "0.875rem",
                  fontWeight: "bold",
                  color: "#666",
                }}
              >
                IFSC
              </div>
              <div style={{ marginLeft: "322px" }}>
                {accountData && accountData.IFSC}
              </div>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "auto 1fr",
                gap: "10px",
              }}
            >
              <div
                style={{
                  fontSize: "0.875rem",
                  fontWeight: "bold",
                  color: "#666",
                }}
              >
                MICR
              </div>
              <div style={{ marginLeft: "316px" }}>
                {accountData && accountData.MICR}
              </div>
            </div>
            <hr />

            <h2
              style={{
                fontSize: "1.25rem",
                fontWeight: "bold",
                margin: "0 0 10px",
              }}
            >
              Personal Details
            </h2>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "auto 1fr",
                gap: "10px",
              }}
            >
              <div
                style={{
                  fontSize: "0.875rem",
                  fontWeight: "bold",
                  color: "#666",
                }}
              >
                First Name
              </div>
              <div style={{ marginLeft: "275px" }}>
                {accountData && accountData.FirstName}
              </div>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "auto 1fr",
                gap: "10px",
              }}
            >
              <div
                style={{
                  fontSize: "0.875rem",
                  fontWeight: "bold",
                  color: "#666",
                }}
              >
                Last Name
              </div>
              <div style={{ marginLeft: "277px" }}>
                {accountData && accountData.LastName}
              </div>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "auto 1fr",
                gap: "10px",
              }}
            >
              <div
                style={{
                  fontSize: "0.875rem",
                  fontWeight: "bold",
                  color: "#666",
                }}
              >
                Mobile Number
              </div>
              <div style={{ marginLeft: "243px" }}>
                {accountData && accountData.Mobile}
              </div>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "auto 1fr",
                gap: "10px",
              }}
            >
              <div
                style={{
                  fontSize: "0.875rem",
                  fontWeight: "bold",
                  color: "#666",
                }}
              >
                Email Address
              </div>
              <div style={{ marginLeft: "251px" }}>
                {accountData && accountData.Email}
              </div>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "auto 1fr",
                gap: "10px",
              }}
            >
              <div
                style={{
                  fontSize: "0.875rem",
                  fontWeight: "bold",
                  color: "#666",
                }}
              >
                Pancard Number
              </div>
              <div style={{ marginLeft: "231px" }}>
                {accountData && accountData.PanCard}
              </div>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "auto 1fr",
                gap: "10px",
              }}
            >
              <div
                style={{
                  fontSize: "0.875rem",
                  fontWeight: "bold",
                  color: "#666",
                }}
              >
                Aadhar Card Number
              </div>
              <div style={{ marginLeft: "199px" }}>
                {accountData && accountData.AadharCard}
              </div>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "auto 1fr",
                gap: "10px",
              }}
            >
              <div
                style={{
                  fontSize: "0.875rem",
                  fontWeight: "bold",
                  color: "#666",
                }}
              >
                Nominee
              </div>
              <div style={{ marginLeft: "289px" }}>
                {accountData && accountData.Nominee}
              </div>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "auto 1fr",
                gap: "10px",
              }}
            >
              <div
                style={{
                  fontSize: "0.875rem",
                  fontWeight: "bold",
                  color: "#666",
                }}
              >
                Nominee Aadhar Card Number
              </div>
              <div style={{ marginLeft: "132px" }}>
                {accountData && accountData.NomineeAadharCard}
              </div>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "auto 1fr",
                gap: "10px",
              }}
            >
              <div
                style={{
                  fontSize: "0.875rem",
                  fontWeight: "bold",
                  color: "#666",
                }}
              >
                Address
              </div>
              <div style={{ marginLeft: "297px" }}>
                {accountData && accountData.Address}
              </div>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "auto 1fr",
                gap: "10px",
              }}
            >
              <div
                style={{
                  fontSize: "0.875rem",
                  fontWeight: "bold",
                  color: "#666",
                }}
              >
                Date of Birth
              </div>
              <div style={{ marginLeft: "268px" }}>
                {accountData && accountData.DOB}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ad_User_Profile;
