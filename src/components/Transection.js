
import React, { useEffect, useState } from "react";
import Deshbord_Navbar from "./Deshbord_Navbar";
import Deshbord_Sidebar from "./Deshbord_Sidebar";
import DownloadForOfflineIcon from "@mui/icons-material/DownloadForOffline";
import "../style-css/Transection.css";
import axios from "axios";
import jsPDF from "jspdf";
import "jspdf-autotable";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import Tostyfy from "./Tostyfy";

import Tooltip from '@mui/material/Tooltip';

function Transection() {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [filteredStatement, setFilteredStatement] = useState([]);
  const [statement, setStatement] = useState({ TransactionHistory: [] });
  const [open, setOpen] = useState(false);
  const [error, setError] = useState("");
  const [specificAmount, setSpecificAmount] = useState("")
  const sessionEmail = JSON.parse(sessionStorage.getItem("Email"));
  const sessionToken = JSON.parse(sessionStorage.getItem("Token"));

  const [balance, setBalance] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      setOpen(true);
      try {
        const response = await axios
          .post(
            "http://localhost:5000/test/api/users/transaction-history",
            { sessionEmail, sessionToken },
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          )
          .then(async (ResponseData) => {
            setOpen(true);

            setStatement(ResponseData.data.Data[0]);
            setFilteredStatement(ResponseData.data.Data[0].TransactionHistory);

            if (ResponseData?.status == 200) {
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
                .then(async (response) => {
                  console.log("Updated Data : ", response.data.data[0]);
                  setBalance(response.data.data[0].Balance);
                  sessionStorage.setItem(
                    "AccountData",
                    JSON.stringify(response.data.data[0])
                  );
                })
                .catch((e) => console.log(e));
            }
          });
      } catch (error) {
        console.log("Error : ", error);
      }
      setOpen(false);
    };
    fetchData();
  }, []);

  const handleSearch = () => {
    if (startDate && endDate && new Date(startDate) <= new Date(endDate)) {
      const filteredTransactions = statement.TransactionHistory.filter(
        (transaction) => {
          const transactionDate = new Date(transaction.date);
          return (
            transactionDate >= new Date(startDate) &&
            transactionDate <= new Date(endDate)
          );
        }
      );
      setFilteredStatement(filteredTransactions);
      if (filteredTransactions.length === 0) {
        setError(toast.error("No records found for the selected dates."));
      } else {
        setError("");
      }
    } else {
      setError(toast.error("Please select valid start and end dates."));
    }
  };

  const downloadPDF = () => {
    const doc = new jsPDF();
    

   // Adding heading for Transect Bank
   doc.setFont("helvetica", "bold");
   doc.setFontSize(24);
   doc.setTextColor(0, 102, 204); // Setting text color to a shade of blue

   // Adding heading for Transect Bank
   const headingText = "Transact Bank";
   const headingWidth = doc.getStringUnitWidth(headingText) * doc.internal.getFontSize() / doc.internal.scaleFactor;
   const pageWidth = doc.internal.pageSize.getWidth();
   const xPosition = (pageWidth - headingWidth) / 2;
   doc.text(headingText, xPosition, 10);

   // Reset font styles for the rest of the content
   doc.setFont("helvetica", "normal");
   doc.setFontSize(12);
   doc.setTextColor(0, 0, 0); // Reset text color to black

   // Adding Transaction Statement title
   doc.text("Transaction Statement", 12, 10);

    doc.autoTable({
      head: [["No", "Date", "Message", "Status", "Amount"]],
      body: filteredStatement.map((elem, index) => {
        return [
          index + 1,
          elem.date?.substring(0, 10),
          elem.msg,
          elem.statementStatus,
          elem.transferAmount,
        ];
      }),
    });
    doc.save("statement.pdf");
  };


  const handleSortBySpecificAmountup = () => {
    if (specificAmount !== "") {
      const amount = parseFloat(specificAmount);
      const specificAmountTransactions = statement.TransactionHistory.filter(
        (transaction) => transaction.transferAmount >= amount
      );
      setFilteredStatement(specificAmountTransactions);
    } else {
      setFilteredStatement(statement.TransactionHistory);
    }
  };
  const handleSortBySpecificAmountdw = () => {
    if (specificAmount !== "") {
      const amount = parseFloat(specificAmount);
      const specificAmountTransactions = statement.TransactionHistory.filter(
        (transaction) => transaction.transferAmount <= amount
      );
      setFilteredStatement(specificAmountTransactions);
    } else {
      setFilteredStatement(statement.TransactionHistory);
    }
  };

  return (
    <div className="Transection">
      {/* <Tostyfy></Tostyfy> */}
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <Deshbord_Navbar></Deshbord_Navbar>
      <div className="row">
        <div className="col-sm-3">
          <Deshbord_Sidebar></Deshbord_Sidebar>
        </div>
        <div className="col-sm-9">
          <h2 className="m-4">
            <b>Statements</b>
          </h2>
          <div className="date">
            <div className="row">
              <div className="col-md-4 ms-4">
                <div>
                  From :-
                  <input
                    type="date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div>
                  To :-
                  <input
                    type="date"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                  />
                </div>
              </div>
              <div className="col-md-2">
                <div>
                  <button className="btn btn-primary" onClick={handleSearch}>
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>
          <Tooltip title="Download Statement" arrow>
            <DownloadForOfflineIcon
              className="download"
              onClick={downloadPDF}
            // style={{zIndex:"-1"}}
            ></DownloadForOfflineIcon>
          </Tooltip>

          <div className="sorting" style={{ marginLeft: "80px", marginTop: "20px" }}>
            <div className="row">


              <h4 className="mb-3">Sorting</h4>
              <div className="col-md-4 ">
                <div>
                  <input
                    type="number"
                    placeholder="Enter Amount"
                    value={specificAmount}
                    onChange={(e) => setSpecificAmount(e.target.value)}
                  />
                </div>
              </div>
              <div className="col-md-3">
                <ArrowCircleUpIcon
                  style={{ fontSize: "30px" }}
                  onClick={handleSortBySpecificAmountup}
                >
                  Sort dw
                </ArrowCircleUpIcon>
                <ArrowCircleDownIcon
                  style={{ fontSize: "30px", marginLeft: "13px" }}
                  onClick={handleSortBySpecificAmountdw}
                >
                  Sort up
                </ArrowCircleDownIcon>
              </div>
            </div>
          </div>
          <div className="trans p-4 mt-3">
            <table className="table table-striped">
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
                {filteredStatement.map((elem, index) => (
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
                  <td className="text-deco">₹{balance}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Transection;
