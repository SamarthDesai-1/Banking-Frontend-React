import React, { useEffect, useState } from "react";
import "../../style-css/Admin/Loan_Request.css";

function Loan_Request() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      setData(JSON.parse(sessionStorage.getItem("LoanData")));
    };
    fetchData();
  }, [])


  return (
    <div className="loanreq">
      <div className="w-full py-6">
        <div className="container grid gap-6 px-4 md:px-6">
          <div className="flex items-center space-x-4 my-4">
            <h1 className="text-3xl font-bold tracking-tighter">Ap003535</h1>
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
          <div
            className="rounded-lg border bg-card text-card-foreground shadow-sm mb-5"
            data-v0-t="card"
            style={{
              backgroundColor: "#ffffff",
              color: "#1f2937",
              boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
            }}
          >
            <div className="p-4 md:p-6">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="row">
                  <div className="col-md-6">
                    <div className="space-y-2">
                      <p className="text-sm font-medium text-gray-500">
                        Account Holder
                      </p>
                      <p>{data && data.FirstName} {data && data.LastName}</p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="space-y-2">
                      <p className="text-sm font-medium text-gray-500">
                        Account No
                      </p>
                      <p>{data && data.AccountNo}</p>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6">
                    <div className="space-y-2">
                      <p className="text-sm font-medium text-gray-500">
                        Balance
                      </p>
                      <p>&#x20B9; {data && data.Balance}</p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="space-y-2">
                      <p className="text-sm font-medium text-gray-500">
                        Type Of Loan
                      </p>
                      <p>Personal Loan</p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="space-y-2">
                      <p className="text-sm font-medium text-gray-500">
                        Aadhar Card No
                      </p>
                      <p>{data && data.AadharCard}</p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="space-y-2">
                      <p className="text-sm font-medium text-gray-500">
                        Pancard No
                      </p>
                      <p>{data && data.PanCard}</p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="space-y-2">
                      <p className="text-sm font-medium text-gray-500">Age</p>
                      <p>{data && data.Age}</p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="space-y-2">
                      <p className="text-sm font-medium text-gray-500">
                        Interest
                      </p>
                      <p>{data && data.interest}%</p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="space-y-2">
                      <p className="text-sm font-medium text-gray-500">
                        Employee
                      </p>
                      <p>{data && data.Employee}</p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="space-y-2">
                      <p className="text-sm font-medium text-gray-500">
                        Monthly Income
                      </p>
                      <p>{data && data.MonthlyIncome}</p>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6">
                    <div className="space-y-2">
                      <p className="text-sm font-medium text-gray-500">
                        Profession
                      </p>
                      <p>{data && data.Profession}</p>
                    </div>
                  </div>

                  {/* <div className="col-md-6">
                    <div className="space-y-2">
                      <p className="text-sm font-medium text-gray-500">
                        Status
                      </p>
                      <div className="flex items-center gap-2">
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
                        <span className="font-medium">Active</span>
                      </div>
                    </div>
                  </div>
                   */}
                </div>
              </div>
            </div>
            <div className="mb-4">
              <button className='btn btn-success app'>Approve</button>
              <button className='btn btn-danger dis'>Discard</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Loan_Request;
