import React from 'react'
import Admin_Navbar from './Admin_Navbar'
import Admin_Sidebar from './Admin_Sidebar'
import '../../style-css/Admin/Fix_deposit_data.css'

function Fix_deposit_data() {
  return (
    <div className='fixdeposit'>
    <Admin_Navbar></Admin_Navbar>
    <div className="row">
      <div className="col-sm-3">
          <Admin_Sidebar></Admin_Sidebar>
      </div>
      <div className="col-sm-9">
      <div className='fixtable'>
                        <h2 className='mb-3'>Fix Deposit data</h2>
                    <table class="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">First</th>
                                <th scope="col">Last</th>
                                <th scope="col">Handle</th>
                                <th scope="col">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td> <button className='btn btn-primary'>View</button> </td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                                <td> <button className='btn btn-primary'>View</button> </td>
                            </tr>
                        </tbody>
                    </table>
                    
                    </div>
      </div>
    </div>
  </div>
  )
}

export default Fix_deposit_data
