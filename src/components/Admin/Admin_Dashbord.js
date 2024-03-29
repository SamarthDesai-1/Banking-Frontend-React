import React from "react";
import "../../style-css/Admin/Admin_Dashbord.css";
import Admin_Navbar from "./Admin_Navbar";
import Admin_Sidebar from "./Admin_Sidebar";
import "../../style-css/Admin/Admin_Dashbord.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { Chart as Chartjs, defaults } from "chart.js/auto";
import { Bar, Doughnut, Line, Pie } from "react-chartjs-2";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import Tostyfy from "../Tostyfy";

function Admin_Dashbord() {
  const [data, setData] = useState();
  const [statusData, setStatusData] = useState();
  const sessionEmail = JSON.parse(sessionStorage.getItem("Email"));

  const [service, setServices] = useState([]);
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    const loadData = async () => {
      setOpen(true);
      try {
        await axios
          .post(
            "http://localhost:5000/test/api/users/get-data",
            { sessionEmail },
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          )
          .then(async (response) => {
            console.log(response);

            setData(response.data.Data);
            setStatusData(response.data.StatementStatus);

            console.log("Set Data : ", data);

            setOpen(true);
            await axios
              .post("http://localhost:5000/test/api/users/get-service", {
                headers: {
                  "Content-Type": "application/json",
                },
              })
              .then((response) => {
                console.log("Pie chart data : ", response);
                setServices(response.data.Data);
              })
              .catch((e) => console.log(e));
          })
          .catch((e) => console.log(e));
      } catch (e) {
        console.log("Try catch error : ", e);
      }
      setOpen(false);
    };
    loadData();
  }, []);

  return (
    <div className="adidas">
      {/* <Tostyfy></Tostyfy> */}
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        // onClick={handleClose}
      >
        <CircularProgress color="inherit" />
      </Backdrop>

      <Admin_Navbar></Admin_Navbar>
      <div className="row">
        <div className="col-sm-3">
          <Admin_Sidebar></Admin_Sidebar>
        </div>
        <div className="col-sm-9" style={{ zIndex: "-1" }}>
          <div className="cardrow row">
            <div className=" col-sm-3">
              <div className="box">
                <div class="card1 card text-white">
                  <img
                    className=""
                    src="././IMAGES/circle.png"
                    class="card-img"
                    alt="..."
                    style={{ backgroundColor: "#5d9ca1" }}
                  />
                  <div class="card-img-overlay">
                    <h3>
                      &#x20B9;
                      {data && data[0].balance}
                    </h3>
                    <p>Balance</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="box">
                <div class="card2 card text-white">
                  <img
                    className=""
                    src="./IMAGES/circle.png"
                    class="card-img"
                    alt="..."
                    style={{ backgroundColor: "#4c4272" }}
                  />
                  <div class="card-img-overlay">
                    <h3>
                      &#x20B9;
                      {statusData && statusData[0].totals[0]}
                    </h3>
                    <p>Debit Transaction</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="box">
                <div class="card3 card text-white">
                  <img
                    className=""
                    src="./IMAGES/circle.png"
                    class="card-img"
                    alt="..."
                    style={{ backgroundColor: "#7c4040" }}
                  />
                  <div class="card-img-overlay">
                    <h3>
                      &#x20B9;
                      {statusData && statusData[0].totals[1]}
                    </h3>
                    <p>Credit Transaction</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6" style={{ margin: "41px auto 0px auto" }}>
              <Line
                style={{ margin: "40px 0px 0px 51px" }}
                className="lichart"
                data={{
                  labels: data && data.map((elem, index) => elem.date),
                  datasets: [
                    {
                      label: "Credit Transaction",
                      data: data && data.map((elem) => elem.creditAmount),
                      backgroundColor: ["rgb(75, 192, 192)"],
                      borderColor: "rgb(75, 192, 192)",
                    },
                    {
                      label: "Debit Transaction",
                      data: data && data.map((elem) => elem.debitAmount),
                      backgroundColor: ["rgb(255, 99, 132)"],
                      borderColor: "rgb(255, 99, 132)",
                    },
                  ],
                }}
              />
            </div>
            <div
              className="col-md-6"
              style={{
                margin: "41px auto 0px auto",
                padding: "0px 90px 20px 90px",
              }}
            >
              <Doughnut
                className="circhart"
                data={{
                  labels: ["Fixed Deposits", "Debit Card", "Users"],
                  datasets: [
                    {
                      label: "Revenue",
                      data: [
                        service.FDusers,
                        service.debitPercent,
                        service.userPercent,
                      ],
                    },
                  ],
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admin_Dashbord;
