import React from 'react'
import '../../style-css/Admin/Account_close_data.css'
import Admin_Sidebar from './Admin_Sidebar'
import Admin_Navbar from './Admin_Navbar'

function Account_close_data() {
    return (
        <div className='acclo'>
            <Admin_Navbar></Admin_Navbar>
            <div className="row">
                <div className="col-sm-3">
                    <Admin_Sidebar></Admin_Sidebar>
                </div>
                <div className="col-sm-9">
                    <div className="clotable">

                        <div className="row">
                            <div className="col-md-6">
                                <h2 className="mb-3">Account Close data</h2>
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
                                    <th scope="col">Confirm</th>
                                    <th scope="col">Reject</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                    <td><button className='btn btn-primary'>Confirm</button></td>
                                    <td><button className='btn btn-primary'>Reject</button></td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                    <td><button className='btn btn-primary'>Confirm</button></td>
                                    <td><button className='btn btn-primary'>Reject</button></td>
                                </tr>
                            </tbody>
                        </table>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default Account_close_data
