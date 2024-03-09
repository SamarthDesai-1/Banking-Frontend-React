import React from 'react'
import Admin_Navbar from './Admin_Navbar'
import Admin_Sidebar from './Admin_Sidebar'
import '../../style-css/Admin/Create_Account_data.css'

function Create_Account_data() {
    return (
        <div className='adcreat'>
            <Admin_Navbar></Admin_Navbar>
            <div className="row">
                <div className="col-sm-3">
                    <Admin_Sidebar></Admin_Sidebar>
                </div>
                <div className="col-sm-9">
                    <div className='createtable'>
                        <h2 className='mb-3'>Create Account data</h2>
                    <table class="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">First</th>
                                <th scope="col">Last</th>
                                <th scope="col">Handle</th>
                                <th scope="col">Profile</th>
                                <th scope="col">Transection</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td><button className='btn btn-primary'>Profile</button></td>
                                <td> <button className='btn btn-primary'>Transection</button> </td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                                <td><button className='btn btn-primary'>Profile</button></td>
                                <td> <button className='btn btn-primary'>Transection</button> </td>
                            </tr>
                            
                        </tbody>
                    </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Create_Account_data
