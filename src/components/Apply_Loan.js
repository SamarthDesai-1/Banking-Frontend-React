import React from 'react'
import '../style-css/Apply_Loan.css'
import Deshbord_Navbar from './Deshbord_Navbar'
import Deshbord_Sidebar from './Deshbord_Sidebar'

function Apply_Loan() {
    return (
        <div className='aplloan'>
            <Deshbord_Navbar></Deshbord_Navbar>
            <div className="row">
                <div className="col-sm-3">
                    <Deshbord_Sidebar></Deshbord_Sidebar>
                </div>
                <div className="col-sm-9 aplform">
                    <form className='p-5'>
                        <h2 className='mb-4'>Loan Application form</h2>
                        <div className="row">
                            <div className="col-sm-6">
                                <div class="mb-3 me-2">
                                    <label for="exampleInputEmail1" class="form-label">First Name</label>
                                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label">Last Name</label>
                                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-sm-6">
                                <div class="mb-3 me-2">
                                    <label for="exampleInputEmail1" class="form-label">AadharCard No</label>
                                    <input type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                </div>


                            </div>
                            <div className="col-sm-6">
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label">Pancard No</label>
                                    <input type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                </div>
                            </div>
                        </div>

                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">reason</label>
                            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>

                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                            <label class="form-check-label" for="flexRadioDefault1">
                                Job
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                            <label class="form-check-label" for="flexRadioDefault2">
                                Business
                            </label>
                        </div>

                        <div className="row mt-2">
                            <div className="col-sm-6">
                                <div class="mb-3">
                                    <div class="mb-3 me-2">
                                        <label for="exampleInputEmail1" class="form-label">Profession</label>
                                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label">Age</label>
                                    <input type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                </div>
                            </div>
                        </div>

                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Income</label>
                            <input type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>

                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Address</label>
                            <textarea type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>


                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Apply_Loan
