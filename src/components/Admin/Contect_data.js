import React from 'react';
import '../../style-css/Admin/Contect_data.css';
import Admin_Navbar from './Admin_Navbar';
import Admin_Sidebar from './Admin_Sidebar';

function Contect_data() {
  return (
    <div className='contectdata'>
      <Admin_Navbar></Admin_Navbar>
      <div className="row">
        <div className="col-sm-3">
            <Admin_Sidebar></Admin_Sidebar>
        </div>
        <div className="col-sm-9">
        <div className="contecttable">
            <h2 className="mb-3">Fix Deposit data</h2>
            <table class="table table-striped">
              <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Accout No</th>
                  <th scope="col">Email</th>
                  <th scope="col">FD Amount</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
                {/* {fdData.map((elem, index) => (
                  <tr key={index}>
                    <td className="text-deco">{index + 1}</td>
                    <td className="text-deco">{elem.AccountNo}</td>
                    <td className="text-deco">{elem.Email}</td>
                    <td className="text-deco">{elem.Balance}</td>
                    <td className="text-deco">
                      {" "}
                      <button className="btn btn-primary">View</button>{" "}
                    </td>
                  </tr>
                ))} */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contect_data
