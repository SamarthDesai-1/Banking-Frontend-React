import React from "react";
import "../style-css/Loan_pendig_status.css";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Tostyfy from "./Tostyfy";

function Loan_pending_status() {
  const [data, setData] = useState();
  useEffect(() => {
    const fetchData = async () => {
      setData(JSON.parse(sessionStorage.getItem("UserLoan")));
    };
    fetchData();
  }, []);
  return (
    <div className="loanpend">
      {/* <Tostyfy></Tostyfy> */}
      <div className="w-full py-6">
        <div className="container grid gap-6 px-4 md:px-6">
          <div className="row">
            <div className="col-sm-6">
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
                  Loan Application
                </div>
                <div className="got">
                    <NavLink to="/Deshbord" className="">🏠</NavLink>
                  </div>
              </div>
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
                      <p>
                        {data && data.FirstName} {data && data.LastName}
                      </p>
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
                        AadharCard No
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
                      <p className="text-sm font-medium text-gray-500">
                        Loan Amount
                      </p>
                      <p>{data && data.LoanInfo[0].Amount}</p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="space-y-2">
                      <p className="text-sm font-medium text-gray-500">
                        Loan Amount With interest
                      </p>
                      <p>{data && data.LoanInfo[0].loanAmountAfterInterst + data.LoanInfo[0].Amount}</p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="space-y-2">
                      <p className="text-sm font-medium text-gray-500">
                        Installment
                      </p>
                      <p>{data && data.LoanInfo[0].installment}</p>
                    </div>
                  </div>
                  <div className="col-md-6">
                  <div className="space-y-2">
                      <p className="text-sm font-medium text-gray-500">
                        Profession
                      </p>
                      <p>{data && data.Profession}</p>
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
                        Stating date
                      </p>
                      <p>{data && data.LoanInfo[0].StartingDate}</p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="space-y-2">
                      <p className="text-sm font-medium text-gray-500">
                        Ending date
                      </p>
                      <p>{data && data.LoanInfo[0].EndingDate}</p>
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

                {/* <div className="row">
                  <div className="col-md-6">
                    <div className="space-y-2">
                      <p className="text-sm font-medium text-gray-500">
                        Profession
                      </p>
                      <p>{data && data.Profession}</p>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Loan_pending_status;

