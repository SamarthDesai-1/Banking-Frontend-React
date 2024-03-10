import React from "react";
import "../../style-css/Admin/View_Deposit_status.css";

function View_Deposit_status() {
  return (
    <div>
      <div className="vdeposit">
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
            <div
              className="rounded-lg border bg-card text-card-foreground shadow-sm"
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
                        {/* <p>{data2 && data2.FirstName} {data2 && data2.LastName}</p> */}
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="space-y-2">
                        <p className="text-sm font-medium text-gray-500">
                          Starting Date
                        </p>
                        {/* <p>{data1 && data1.date.substring(0, 10)}</p> */}
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <div className="space-y-2">
                        <p className="text-sm font-medium text-gray-500">
                          Deposit Amount
                        </p>
                        {/* <p>${data1 && data1.Balance}</p> */}
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="space-y-2">
                        <p className="text-sm font-medium text-gray-500">
                          Interest Rate
                        </p>
                        <p>4.5%</p>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <div className="space-y-2">
                        <p className="text-sm font-medium text-gray-500">
                          Account Number
                        </p>
                        {/* <p>{data1 && data1.AccountNo}</p> */}
                      </div>
                    </div>
                    <div className="col-md-6">
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default View_Deposit_status;
