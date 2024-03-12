import React from 'react'

function Loan_status() {
    return (
        <div>
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
                                <tr class="table-dark">

                                    <td scope="col"> Account Holder</td>
                                    {/* <td scope="col">{data2 && data2.FirstName} {data2 && data2.LastName}</td> */}

                                </tr>
                            </thead>
                            <tbody>
                                <tr class="table-secondary">

                                    <td>Deposit Amount</td>
                                    {/* <td>{data1 && data1.date.substring(0, 10)}</td> */}
                                </tr>
                                <tr class="table-dark">

                                    <td>  Account Number</td>
                                    {/* <td>{data1 && data1.AccountNo}</td> */}
                                </tr>
                                <tr class="table-secondary">

                                    <td>Starting Date</td>
                                    {/* <td>{data1 && data1.date.substring(0, 10)}</td> */}
                                </tr>
                                <tr class="table-dark">

                                    <td>Interest Rate</td>
                                    <td>4.5%</td>
                                </tr>
                                <tr class="table-secondary">

                                    <td>Status</td>
                                    <td> <svg
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

                                        <span className="font-medium ms-2">Active</span></td>
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
                                <tr class="table-dark">

                                    <td scope="col"> Account Holder</td>
                                    {/* <td scope="col">{data2 && data2.FirstName} {data2 && data2.LastName}</td> */}

                                </tr>
                            </thead>
                            <tbody>
                                <tr class="table-secondary">

                                    <td>Deposit Amount</td>
                                    {/* <td>{data1 && data1.date.substring(0, 10)}</td> */}
                                </tr>
                                <tr class="table-dark">

                                    <td>  Account Number</td>
                                    {/* <td>{data1 && data1.AccountNo}</td> */}
                                </tr>
                                <tr class="table-secondary">

                                    <td>Starting Date</td>
                                    {/* <td>{data1 && data1.date.substring(0, 10)}</td> */}
                                </tr>
                                <tr class="table-dark">

                                    <td>Interest Rate</td>
                                    <td>4.5%</td>
                                </tr>
                                <tr class="table-secondary">

                                    <td>Status</td>
                                    <td> <svg
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

                                        <span className="font-medium ms-2">Active</span></td>
                                </tr>
                            </tbody>
                        </table>


                    </div>
                </div>
            </div>


        </div>
    )
}

export default Loan_status
