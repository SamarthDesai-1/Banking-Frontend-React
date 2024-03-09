import React from 'react'
import Admin_Navbar from './Admin_Navbar'
import Admin_Sidebar from './Admin_Sidebar'
import '../../style-css/Admin/Signup_Data.css'

function Signup_Data() {
    return (
        <div className='adsign'>
            <Admin_Navbar></Admin_Navbar>
            <div className="row">
                <div className="col-sm-3">
                    <Admin_Sidebar></Admin_Sidebar>
                </div>
                <div className="col-sm-9">
                    <div className='signtable'>
                        <h2 className='mb-3'>Signup data</h2>
                    <table class="table table-striped">
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
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup_Data
