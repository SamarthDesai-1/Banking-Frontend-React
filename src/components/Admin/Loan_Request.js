import React, { useEffect, useState } from "react";
import "../../style-css/Admin/Loan_Request.css";
import axios from "axios";


function Loan_Request() {
  const [data, setData] = useState();
  const [account, setAccount] = useState();

  
  useEffect(() => {
    const fetchData = () => {
      setData(JSON.parse(sessionStorage.getItem("LoanData")));
    };
    fetchData();
  }, []);
  
  const id = data && data._id;
  const amount = data && data.LoanAmount;
  const year = data && data.LoanTimePeriod;
  const rate = data && data.interest;
  const accountNo = data && data.accountNo;

  const handleDiscard = async () => {

    sessionStorage.setItem("loanStatus", "Rejected");

    console.log("Loan Status : ", sessionStorage.getItem("loanStatus"));

    console.log(id);
    try {
      await axios.post("http://localhost:5000/test/api/users/reject-loan", { id }, {
        headers: {
          headers: {
            "Content-Type": "application/json",
          },
        }
      }).then((response) => {
        console.log(response);
      }).catch((e) => console.log(e));
    }
    catch (e) {
      console.log("Error from catch : ", e);
    }

  };

  const handleApprove = async () => {
    console.log("Approve for : ", id);

    try {
      await axios.post("http://localhost:5000/test/api/users/approve-loan", { id, amount, year, rate, accountNo }, {
        headers: {
          headers: {
            "Content-Type": "application/json",
          },
        }
      }).then((response) => {
        console.log(response);
      }).catch((e) => console.log(e));
    }
    catch (e) {
      console.log("Error from catch : ", e);
    }
  };

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
                      <p>{data && data._id}</p>
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
                        Starting Date
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
                        Loan Amount
                      </p>
                      <p>{data && data.LoanInfo[0].Amount}</p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="space-y-2">
                      <p className="text-sm font-medium text-gray-500">
                        Installment
                      </p>
                      <p>{data && data.LoanInfo[0].installment}</p>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6">
                    <div className="space-y-2">
                      <p className="text-sm font-medium text-gray-500">
                        Payout settimeout
                      </p>
                      <p>null</p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="space-y-2">
                      <p className="text-sm font-medium text-gray-500">
                        Total loan amount with interest
                      </p>
                      <p>{data && data.LoanInfo[0].totalLoanAmountReceviedYears}</p>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6">
                    <div className="space-y-2">
                      <p className="text-sm font-medium text-gray-500">
                      Loan Amount After Interst
                      </p>
                      <p>{data && data.LoanInfo[0].loanAmountAfterInterst}</p>
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

                  <div className="col-md-6">
                    <div className="space-y-2">
                      <p className="text-sm font-medium text-gray-500">
                        Loan Duration
                      </p>
                      <p>{data && data.LoanTimePeriod}</p>
                    </div>
                  </div>

                </div>
              </div>
            </div>
            <div className="mb-4">
              <button className="btn btn-success app" onClick={(e) => handleApprove()}>Approve</button>
              <button className="btn btn-danger dis" onClick={(e) => handleDiscard()}>Discard</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Loan_Request;

