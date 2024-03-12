import React from 'react';
import '../../style-css/Admin/Loan_data.css'
import Admin_Navbar from "./Admin_Navbar";
import Admin_Sidebar from "./Admin_Sidebar";
import { NavLink } from 'react-router-dom';

function Loan_data() {
  return (
    <div className='londata'>
      <Admin_Navbar></Admin_Navbar>
      <div className="row">
        <div className="col-sm-3">
          <Admin_Sidebar></Admin_Sidebar>
        </div>
        <div className="col-sm-9">
          <div className="loantable">
            <div className="row">
              <div className="col-md-6">
                <h2 className="mb-3">Loan data</h2>
              </div>
              <div className="col-md-6">
                <form className="d-flex adserch">
                  <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    // value={searchQuery}
                    // onChange={handleSearchAccountNoChange}
                  />
                  <button className="btn btn-outline-success" type="submit">
                    Search
                  </button>
                </form>
              </div>
            </div>
   

          <table class="table table-striped">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
                <th scope="col">Approve</th>
                <th scope="col">Discard</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td><NavLink><button className='btn btn-primary'>Approve</button></NavLink></td>
                <td><NavLink><button className='btn btn-primary'>Discard</button></NavLink></td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
                <td><NavLink><button className='btn btn-primary'>Approve</button></NavLink></td>
                <td><NavLink><button className='btn btn-primary'>Discard</button></NavLink></td>
              </tr>
             
            </tbody>
          </table>

        </div>
      </div>
    </div>
    </div>
  )
}

export default Loan_data
