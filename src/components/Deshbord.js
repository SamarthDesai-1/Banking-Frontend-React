import React, { useState } from "react";
import Deshbord_Navbar from "./Deshbord_Navbar";
import Deshbord_Sidebar from "./Deshbord_Sidebar";
import "../style-css/Deshbord.css";
import { useEffect } from "react";
import axios from "axios";

import { Chart as Chartjs, defaults } from "chart.js/auto";
import { Bar, Doughnut, Line, Pie } from "react-chartjs-2";

// //chart import line
// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
//   PieChart, Pie, ResponsiveContainer
// } from "recharts";

// //chart import line
// const data = [
//   {
//     name: "Page A",
//     uv: 4000,
//     pv: 2400,
//     amt: 2400,
//   },
//   {
//     name: "Page B",
//     uv: 3000,
//     pv: 1398,
//     amt: 2210,
//   },
//   {
//     name: "Page C",
//     uv: 2000,
//     pv: 9800,
//     amt: 2290,
//   },
//   {
//     name: "Page D",
//     uv: 2780,
//     pv: 3908,
//     amt: 2000,
//   },
//   {
//     name: "Page E",
//     uv: 1890,
//     pv: 4800,
//     amt: 2181,
//   },
//   {
//     name: "Page F",
//     uv: 2390,
//     pv: 3800,
//     amt: 2500,
//   },
//   {
//     name: "Page G",
//     uv: 3490,
//     pv: 4300,
//     amt: 2100,
//   },
// ];

function Deshbord() {
  const [accountData, setAccountData] = useState();
  const [debit, setDebit] = useState();
  const [credit, setCredit] = useState();
  const [firstRender, setFirstRender] = useState(true);

  const [charts, setCharts] = useState([]);
  let baseUrl = "https://api.coinranking.com/v2/coins/?limit=10";
  let proxyUrl = "https://cors-anywhere.herokuapp.com/";
  let ApiKey = "coinrankingc29dbbbc4c4d75241b538b0e8d624b862ac222a36749bfb5";

  useEffect(() => {
    const fetchCoins = async () => {
      const data = await axios
        .get(`${baseUrl}`, {
          headers: {
            "Content-Type": "application/json",
            "x-access-token": `${ApiKey}`,
            "Access-Control-Allow-Origin": "*",
          },
        })
        .then((response) => {
          console.log(response);
          setCharts(response.data);
        })
        .catch((e) => console.log(e));
    };

    fetchCoins();
  }, [baseUrl, proxyUrl, ApiKey]);

  useEffect(() => {
    if (firstRender) {
      const data = JSON.parse(sessionStorage.getItem("AccountData"));
      setAccountData(data);
      console.log("Account data : ", data);

      const amount = JSON.parse(sessionStorage.getItem("BalanceData"));
      setCredit(amount);

      setFirstRender(false);
    }
  }, [firstRender]);

  const data01 = [
    {
      name: "Credit Transaction",
      value: accountData && credit && credit.totalAmount / accountData.Balance,
    },
    {
      name: "Debit Transaction",
      value:
        accountData &&
        credit &&
        (accountData.Balance - credit.totalAmount) / accountData.Balance,
    },
  ];

  return (
    <div className="Deshbord">
      <Deshbord_Navbar></Deshbord_Navbar>
      <div className="row">
        <div className="col-sm-3">
          <Deshbord_Sidebar></Deshbord_Sidebar>
        </div>
        <div className="col-sm-9">
          <div className="cardrow row">
            <div className=" col-sm-3">
              <div className="box">
                <div class="card1 card text-white">
                  <img
                    className=""
                    src="./IMAGES/circle.png"
                    class="card-img"
                    alt="..."
                  />
                  <div class="card-img-overlay">
                    <h3>${accountData && accountData.Balance}</h3>
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
                  />
                  <div class="card-img-overlay">
                    <h3>${credit && credit.totalAmount}</h3>
                    <p>Credit Transection</p>
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
                  />
                  <div class="card-img-overlay">
                    <h3>
                      $
                      {accountData &&
                        credit &&
                        accountData.Balance - credit.totalAmount}
                    </h3>
                    <p>Debit Transection</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* chart import line */}
          <div className="charts charts-style">
            <div>
              <h1>Crypto Currency Data</h1>
            </div>
            <Line
              data={{
                labels: charts?.data?.coins?.map((x) => x.name),
                datasets: [
                  {
                    label: `${charts?.data?.coins?.length} coins`,
                    data: charts?.data?.coins?.map((x) => x.price),
                    borderColor: 'rgba(75, 192, 192, 1)',
                  },
                ],
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Deshbord;
