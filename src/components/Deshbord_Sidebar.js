import React, { useEffect } from "react";
import HomeIcon from "@mui/icons-material/Home";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PaidIcon from "@mui/icons-material/Paid";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import AddIcon from "@mui/icons-material/Add";
import "../style-css/Deshbord_Sidebar.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

//loading bar
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

function Deshbord_Sidebar() {
  // const [data, setData] = useState("");
  // const [image, setImage] = useState();
  const [open, setOpen] = React.useState(false);
  // const [count, setCount] = useState(0);

  // const sessionEmail = JSON.parse(sessionStorage.getItem("Email"));
  // const sessionToken = JSON.parse(sessionStorage.getItem("Token"));

  // let DataOBJ = undefined;

  // const [bool, setBool] = useState(true);

  // useEffect(() => {
  //   if (bool) {

  //     const fetchData = async () => {
  //       setOpen(true);
  //       console.log("Session Token : ", sessionToken);

  //       try {
  //         console.log("API execute soon");
  //         const response = await axios.post(
  //           "http://localhost:5000/test/api/users/customer-finance",
  //           { sessionEmail, sessionToken },
  //           {
  //             headers: {
  //               "Content-Type": "application/json",
  //             },
  //           }
  //         );
  //         console.log("API execute successfully");
  //         console.log(response);
  //         console.log("Response data : ", response.data.data[0]);

  //         console.log("Image Path : ", response.data.data[0].Photo);
  //         setData(response.data.data[0]);
  //         sessionStorage.setItem(
  //           "AccountData",
  //           JSON.stringify(response.data.data[0])
  //         );

  //         console.log("Data : ", data);
  //         setImage(response.data.data[0].Photo);

  //         let getData = true;
  //         const AccountData = await axios
  //           .post(
  //             "http://localhost:5000/test/api/users/customer-finance",
  //             { sessionToken, sessionEmail, getData },
  //             {
  //               headers: {
  //                 "Content-Type": "application/json",
  //               },
  //             }
  //           )
  //           .then((response) => {
  //             console.log("Response from BILLIOns : ", response);
  //             console.log("Account open data : ", response.data.Data[0]);
  //             sessionStorage.setItem(
  //               "AccountOpenData",
  //               JSON.stringify(response.data.Data[0])
  //             );
  //           });

  //           const CardData = await axios.post("http://localhost:5000/test/api/users/card-detail-fetcher" ,{ sessionEmail, sessionToken }, {
  //             headers: {
  //               'Content-Type': 'application/json',
  //             },
  //           }).then(response => {

  //             console.log("Response from debit card database : ", response);
  //             sessionStorage.setItem("CardData", JSON.stringify(response.data.Data[0]));

  //           }).catch((e) => console.log(e));

  //         } catch (error) {
  //           console.log("Error : ", error);
  //         }
  //       };

  //     setOpen(false);
  //     fetchData();
  //     setBool(false);
  //   }

  //   setCount(count + 1);
  // }, []);

  const [data, setData] = useState("");

  useEffect(() => {
    const fetchData = () => {
      const OBJ = JSON.parse(sessionStorage.getItem("AccountData"));
      console.log("OBJECT : ", OBJ);
      setData(OBJ);
    };

    fetchData();
  }, []);

  return (
    <div>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        // onClick={handleClose}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <div className="sidenav">
        <div className="row">
          <div className="tpart col-sm-12">
            <div className="sidebar">
              <div className="photo text-center pt-4">
                <img
                  src={data && `http://localhost:5000/uploads/${data.Photo}`}
                  width="100"
                  height="100"
                  style={{ borderRadius: "50%", objectFit: "cover" }}
                />
                <p className="mt-2">
                  {data && data.FirstName} {data && data.LastName}
                </p>
              </div>

              <div className="menubar ">
                <ul className="uimenu">
                  <li className="menuname">
                    <NavLink to="/Deshbord" className="linka">
                      Dashbord
                    </NavLink>
                    <HomeIcon
                      style={{ position: "relative", left: "140px" }}
                    ></HomeIcon>
                  </li>
                  <li className="menuname">
                    <NavLink to="/User_Profile" className="linka">
                      Profile
                    </NavLink>
                    <AccountCircleIcon
                      style={{ position: "relative", left: "169px" }}
                    ></AccountCircleIcon>
                  </li>
                  <li className="menuname">
                    <NavLink to="/Add_Money" className="linka">
                      Add Money
                    </NavLink>
                    <AddIcon
                      style={{ position: "relative", left: "126px" }}
                    ></AddIcon>
                  </li>
                  <li className="menuname">
                    <NavLink to="/Withdrow" className="linka">
                      Withdrow Money
                    </NavLink>
                    <RemoveOutlinedIcon
                      style={{ position: "relative", left: "82px" }}
                    ></RemoveOutlinedIcon>
                  </li>
                  <li className="menuname">
                    <NavLink to="/Account_Transfer" className="linka">
                      Transfer Fund
                    </NavLink>
                    <PaidIcon
                      style={{ position: "relative", left: "107px" }}
                    ></PaidIcon>
                  </li>
                  <li className="menuname">
                    <NavLink to="/Transection" className="linka">
                      Statement
                    </NavLink>
                    <FileCopyIcon
                      style={{ position: "relative", left: "132px" }}
                    ></FileCopyIcon>
                  </li>
                  <li className="menuname">
                    
                    {data && data.DebitCard === "No issue" ? (
                      <NavLink to="/Applydebit" className="linka">
                        Debit Card
                      </NavLink>
                    ) : (
                      <NavLink to="/Debitcard" className="linka">
                        Debit Card
                      </NavLink>
                    )}

                    <CreditCardIcon
                      style={{ position: "relative", left: "131px" }}
                    ></CreditCardIcon>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Deshbord_Sidebar;
