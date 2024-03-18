import React, { useState } from "react";
import Deshbord_Navbar from "./Deshbord_Navbar";
import Deshbord_Sidebar from "./Deshbord_Sidebar";
import "../style-css/Deshbord.css";
import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { Chart as Chartjs, defaults } from "chart.js/auto";
import { Bar, Doughnut, Line, Pie } from "react-chartjs-2";
import Tostyfy from "./Tostyfy";

function Deshbord() {
  const [statement, setStatement] = useState([]);
  const [balance, setBalance] = useState();
  const navigate = useNavigate();


  const [accountData, setAccountData] = useState();
  const [debit, setDebit] = useState();
  const [credit, setCredit] = useState();
  const [firstRender, setFirstRender] = useState(true);
  const sessionEmail = JSON.parse(sessionStorage.getItem("Email"));
  const sessionToken = JSON.parse(sessionStorage.getItem("Token"));


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
        .then(async (response) => {
          console.log(response);
          setCharts(response.data);

          await axios
            .post(
              "http://localhost:5000/test/api/users/transaction-history",
              { sessionEmail, sessionToken },
              {
                headers: {
                  "Content-Type": "application/json",
                },
              }
            )
            .then(async (response) => {
              setBalance(response.data.Data[0].Balance);
              setStatement(response.data.Data[0].TransactionHistory);
              console.log("State setted");
              console.log("Transaction history : ", response);

              /** loading bar */
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
                    const amount = JSON.parse(sessionStorage.getItem("BalanceData"));
                    setCredit(amount);
                  })
                  .catch((e) => console.log(e));
            })
            .catch((e) => {
              console.log(e);
            });
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

      // const amount = JSON.parse(sessionStorage.getItem("BalanceData"));
      // setCredit(amount);

      setFirstRender(false);
    }
  }, [firstRender]);


  return (
    <div className="Deshbord">
      {/* <Tostyfy></Tostyfy> */}
      <Deshbord_Navbar></Deshbord_Navbar>
      <div className="row">
        <div className="col-sm-3">
          <Deshbord_Sidebar></Deshbord_Sidebar>
        </div>
        <div className="col-sm-9" style={{zIndex:"-1"}}>
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
                    <p className="fs-5">Balance</p>
                    <h3>₹ {accountData && accountData.Balance}</h3>
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
                    <p className="fs-5">Credit Transection</p>
                    <h3>₹ {credit && credit.totalAmount}</h3>
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
                      <p className="fs-5">Debit Transection</p>
                    <h3>
                    ₹ {accountData &&
                        credit &&
                        accountData.Balance - credit.totalAmount}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* chart import line */}
          <div className="col-md-8 charts charts-style" style={{margin:"40px auto 20px auto"}}>
            <div>
              <h1>Crypto Currency</h1>
            </div>
            <Line
            style={{marginTop:"20px"}}
              data={{
                labels: charts?.data?.coins?.map((x) => x.name),
                datasets: [
                  {
                    label: `${charts?.data?.coins?.length} coins`,
                    data: charts?.data?.coins?.map((x) => x.price),
                    borderColor: "rgba(75, 192, 192, 1)",
                  },
                ],
              }}
            />
          </div>

          {/* Statement */}

          <div className="trans p-4 mt-3">
            <h2> ▶️ Mini Statements</h2>
            <table className="table table-striped mt-3">
              <thead>
                <tr>
                  <td className="text-deco">No</td>
                  <td className="text-deco">Date</td>
                  <td className="text-deco">Message</td>
                  <td className="text-deco">Status</td>
                  <td className="text-deco">Amount</td>
                </tr>
              </thead>
              <tbody>
                {statement.reverse().slice(0, 10).map((elem, index) => (
                  <tr key={index} className="text-deco">
                    <td className="text-deco">{index + 1}</td>
                    <td className="text-deco">{elem.date?.substring(0, 10)}</td>
                    <td className="text-deco">{elem.msg}</td>
                    <td className="text-deco">
                      {elem.statementStatus === "Dr" ? "Debit" : "Credit"}
                    </td>
                    <td
                      className="status"
                      style={{
                        color: elem.statementStatus === "Dr" ? "red" : "green",
                      }}
                    >
                      {elem.statementStatus === "Dr" ? "-" : "+"}
                      {elem.transferAmount}
                    </td>
                  </tr>
                ))}
                <tr>
                  <td className="text-deco">Net Balance</td>
                  <td className="text-deco"></td>
                  <td className="text-deco"></td>
                  <td className="text-deco"></td>
                  <td className="text-deco">&#x20B9;{balance && balance}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Deshbord;
