import React, { useEffect, useState } from "react";
import "../../style-css/Admin/Loan_Request.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import Tostyfy from "../Tostyfy";
import { toast } from "react-toastify";


function Loan_Request() {
  const [data, setData] = useState();
  const [account, setAccount] = useState();
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();
  
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
    setOpen(true)
    try {
      await axios.post("http://localhost:5000/test/api/users/reject-loan", { id }, {
        headers: {
          headers: {
            "Content-Type": "application/json",
          },
        }
      }).then((response) => {
        console.log(response);
        navigate('/Loan_data');
        toast.success("Loan discard successfully")
      }).catch((e) => console.log(e));
    }
    catch (e) {
      console.log("Error from catch : ", e);
    }
    setOpen(false)
  };

  const handleApprove = async () => {
    setOpen(true)
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
        navigate("/Loan_data");
        toast.success("Loan Approve successfully");
      }).catch((e) => toast.success(e.response.data.msg));
    }
    catch (e) {
      console.log("Error from catch : ", e);
    }
    setOpen(false)
  };

  return (
    <div className="loanreq">
      {/* <Tostyfy></Tostyfy> */}
       <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
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
              Loan Application
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


                {/* <div className="row">
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
                        Loan Duration
                      </p>
                      <p>{data && data.LoanTimePeriod}</p>
                    </div>
                  </div>
                </div> */}
               

              
              

            
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

