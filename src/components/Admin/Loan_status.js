import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

function Loan_status() {
  const { userId } = useParams();

  const [fdData, setFDData] = useState([]);
  const [loanData, setLoanData] = useState();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setOpen(true);
      try {
        const response = await axios.get(
          `http://localhost:5000/test/api/users/get-fd-data-status/${userId}`,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (response?.status === 200) {
          console.log(response);
          setFDData(response.data.Data);
          setLoanData(response.data.LoanData);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
      setOpen(false);
    };
    fetchData();
  }, []);

  return (
    <div>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <div className="deposit">
        <div className="w-full py-6">
          <div className="container grid gap-6 px-4 md:px-6">
            <div className="flex items-center space-x-4 my-4">
              <h1 className="text-3xl font-bold tracking-tighter">FD001234</h1>
              <div
                className=" ms-3 inline-flex items-center rounded-full whitespace-nowrap border px-2.5 py-0.5 w-fit text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                style={{
                  backgroundColor: "#ffffff",
                  color: "#1f2937",
                  boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
                }}
              >
                Fixed Deposit
              </div>
            </div>

            <table class="table table-bordered border-primary">
              <thead>
                <tr class="table-success">
                  <td scope="col"> Account Holder</td>
                  <td scope="col">
                    {loanData && loanData.FirstName}{" "}
                    {loanData && loanData.LastName}
                  </td>
                </tr>
              </thead>
              <tbody>
                <tr class="table-secondary">
                  <td>Fix Deposit Amount</td>
                  <td>{fdData && fdData.Balance}</td>
                </tr>
                <tr class="table-success">
                  <td> Account Number</td>
                  <td>{fdData && fdData.AccountNo}</td>
                </tr>
                <tr class="table-secondary">
                  <td>Starting Date</td>
                  <td>{fdData && fdData.date}</td>
                </tr>
                <tr class="table-success">
                  <td>Interest Rate</td>
                  <td>4.5%</td>
                </tr>

                <tr class="table-secondary">
                  <td>Status</td>
                  <td>
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4 text-gray-500"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                    </svg>
                    <span className="font-medium ms-2">Active</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="deposit">
        <div className="w-full py-6">
          <div className="container grid gap-6 px-4 md:px-6">
            <div className="flex items-center space-x-4 my-4">
              <h1 className="text-3xl font-bold tracking-tighter">AP003535</h1>
              <div
                className=" ms-3 inline-flex items-center rounded-full whitespace-nowrap border px-2.5 py-0.5 w-fit text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                style={{
                  backgroundColor: "#ffffff",
                  color: "#1f2937",
                  boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
                }}
              >
                Loan Status
              </div>
            </div>

            <table class="table table-bordered border-primary">
              <thead>
                <tr class="table-success">
                  <td scope="col"> Account Holder</td>
                  <td scope="col">
                    {loanData && loanData.FirstName}{" "}
                    {loanData && loanData.LastName}
                  </td>
                </tr>
              </thead>
              <tbody>
                <tr class="table-secondary">
                  <td>Balance</td>
                  <td>{loanData && loanData.Balance}</td>
                </tr>
                <tr class="table-secondary">
                  <td> Account Number</td>
                  <td>{loanData && loanData.AccountNo}</td>
                </tr>
                <tr class="table-success">
                  <td>AadharCard No</td>
                  <td>{loanData && loanData.AadharCard}</td>
                </tr>
                <tr class="table-secondary">
                  <td>Pancard No</td>
                  <td>{loanData && loanData.PanCard}</td>
                </tr>
                <tr class="table-success">
                  <td>Loan Amount</td>
                  <td>{loanData && loanData.LoanAmount}</td>
                </tr>
                <tr class="table-secondary">
                  <td>Loan Amount With interest</td>
                  <td>{loanData && loanData.LoanInfo[0].totalLoanAmountReceviedYears + loanData.LoanAmount}</td>
                </tr>
                <tr class="table-success">
                  <td>Installment</td>
                  <td>{loanData && loanData.LoanInfo[0].installment}</td>
                </tr>
                <tr class="table-secondary">
                  <td>Interest Rate</td>
                  <td>{loanData && loanData.interest}</td>
                </tr>
                <tr class="table-success">
                  <td>Starting Date</td>
                  <td>{loanData && loanData.LoanInfo[0].StartingDate}</td>
                </tr>
                <tr class="table-secondary">
                  <td>Ending Date</td>
                  <td>{loanData && loanData.LoanInfo[0].EndingDate}</td>
                </tr>
                <tr class="table-success">
                  <td>Employee</td>
                  <td>{loanData && loanData.Employee}</td>
                </tr>
                <tr class="table-secondary">
                  <td>Monthly Income</td>
                  <td>{loanData && loanData.MonthlyIncome}</td>
                </tr>

                <tr class="table-success">
                  <td>Status</td>
                  <td>
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4 text-gray-500"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                    </svg>
                    <span className="font-medium ms-2">Active</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Loan_status;
