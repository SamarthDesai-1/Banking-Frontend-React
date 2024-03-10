import React from 'react'
import Deshbord_Navbar from './Deshbord_Navbar'
import Deshbord_Sidebar from './Deshbord_Sidebar'
import '../style-css/Deshbord.css'

//chart import line
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
} from "recharts";


//chart import line
const data = [
    {
        name: "Page A",
        uv: 4000,
        pv: 2400,
        amt: 2400
    },
    {
        name: "Page B",
        uv: 3000,
        pv: 1398,
        amt: 2210
    },
    {
        name: "Page C",
        uv: 2000,
        pv: 9800,
        amt: 2290
    },
    {
        name: "Page D",
        uv: 2780,
        pv: 3908,
        amt: 2000
    },
    {
        name: "Page E",
        uv: 1890,
        pv: 4800,
        amt: 2181
    },
    {
        name: "Page F",
        uv: 2390,
        pv: 3800,
        amt: 2500
    },
    {
        name: "Page G",
        uv: 3490,
        pv: 4300,
        amt: 2100
    }
];


function Deshbord() {
    return (
        <div className='Deshbord'>
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
                                    <img className='' src="./IMAGES/circle.png" class="card-img" alt="..." />
                                    <div class="card-img-overlay">
                                        <h3>$10000</h3>
                                        <p>Balance</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="box">
                                <div class="card2 card text-white">
                                    <img className='' src="./IMAGES/circle.png" class="card-img" alt="..." />
                                    <div class="card-img-overlay">
                                        <h3>$200000</h3>
                                        <p>Credit Transection</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="box">
                                <div class="card3 card text-white">
                                    <img className='' src="./IMAGES/circle.png" class="card-img" alt="..." />
                                    <div class="card-img-overlay">
                                        <h3>$200000</h3>
                                        <p>Debit Transection</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* chart import line */}
                    <div className="charts">
                        <LineChart
                            width={500}
                            height={300}
                            data={data}
                            margin={{
                                top: 5,
                                right: 30,
                                left: 20,
                                bottom: 5
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Line
                                type="monotone"
                                dataKey="pv"
                                stroke="#8884d8"
                                activeDot={{ r: 8 }}
                            />
                            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                        </LineChart>
                    </div>

                    <div className="state p-5">
                        <h5 className='mb-4'>Mini Statement</h5>
                        <table class="table table-success table-striped">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">First</th>
                                    <th scope="col">Last</th>
                                    <th scope="col">Handle</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td colspan="2">Larry the Bird</td>
                                    <td>@twitter</td>
                                </tr>
                            </tbody>
                        </table>
                        <div>
                            <button className='btn btn-primary mt-2'>View Statement</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Deshbord
