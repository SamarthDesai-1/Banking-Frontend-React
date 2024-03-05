import React from 'react'
import Deshbord_Navbar from './Deshbord_Navbar'
import Deshbord_Sidebar from './Deshbord_Sidebar'
import '../style-css/Debitcard_form.css'

function Dabitcard_form() {
    return (
        <div className='dabitcardform'>
            <Deshbord_Navbar></Deshbord_Navbar>
            <div className="row">
                <div className="col-sm-3">
                    <Deshbord_Sidebar></Deshbord_Sidebar>
                </div>
                <div className="col-sm-6">
                    <form className='p-5'>
                        <h2 className=''>Debit Card Form</h2>

                        <div className="row">
                            <div className="col-md-6">
                                <div class="mb-3 mt-5">
                                    <label for="exampleInputEmail1" class="form-label">First Name</label>
                                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div class="mb-3 mt-5 ms-2">
                                    <label for="exampleInputEmail1" class="form-label">Last Name</label>
                                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
                                </div>
                            </div>
                        </div>

                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Phone</label>
                            <input type="number" class="form-control" id="exampleInputPassword1" required />
                        </div>

                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Adharcard No</label>
                            <input type="number" class="form-control" id="exampleInputPassword1" required />
                        </div>

                        <button type="submit" class="btn btn-dark">Apply</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Dabitcard_form
