import React from 'react'
import '../style-css/Account_close.css'
import Deshbord_Sidebar from './Deshbord_Sidebar'
import Deshbord_Navbar from './Deshbord_Navbar'

function Account_close() {
    return (
        <div className='acclose'>
            <Deshbord_Navbar></Deshbord_Navbar>
            <div className="row">
                <div className="col-md-3">
                    <Deshbord_Sidebar></Deshbord_Sidebar>
                </div>
                <div className="col-md-7 closeform">
                    <form className='p-5'>
                    <h2 className="mb-4">Account close Application Form</h2>
                    <button className='stbtn btn btn-primary'>Status</button>
                        <div className="row">
                            <div className="col-md-6">
                                <div class="mb-3 pe-2">
                                    <label for="exampleInputEmail1" class="form-label">First Name</label>
                                    <input type="text" class="form-control" id="exampleInputEmail1" required aria-describedby="emailHelp" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label">Last Name</label>
                                    <input type="text" class="form-control" id="exampleInputEmail1" required aria-describedby="emailHelp" />
                                </div>
                            </div>
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Account Number</label>
                            <input type="number" class="form-control" id="exampleInputEmail1" required aria-describedby="emailHelp" />
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Email Address</label>
                            <input type="Email" class="form-control" id="exampleInputEmail1" required aria-describedby="emailHelp" />
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Resion</label>
                            <textarea type="text" class="form-control" id="exampleInputEmail1" required aria-describedby="emailHelp" />
                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Account_close

