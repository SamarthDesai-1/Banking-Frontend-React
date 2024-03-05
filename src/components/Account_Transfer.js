import React from 'react'
import '../style-css/Account_Transfer.css'
import Deshbord_Navbar from './Deshbord_Navbar'
import Deshbord_Sidebar from './Deshbord_Sidebar'

function Account_Transfer() {
    return (
        <div className='account'>
            <Deshbord_Navbar></Deshbord_Navbar>
            <div className="row">
                <div className="col-sm-3">
                    <Deshbord_Sidebar></Deshbord_Sidebar>
                </div>
                <div className="col-sm-8 accountform">
                    <form className='p-5'>
                        <h2 className=''>Transfer Account</h2>
                        <p>Enter the amount you eant to Transfer.</p>
                        <div class="mb-3 mt-5">
                            <label for="exampleInputEmail1" class="form-label">Account Number (Reciver)</label>
                            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required/>

                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Message</label>
                            <textarea type="text" class="form-control" id="exampleInputPassword1" required/>
                        </div>

                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Amount</label>
                            <input type="number" class="form-control" id="exampleInputPassword1" required/>
                        </div>

                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">PIN</label>
                            <input type="number" class="form-control" id="exampleInputPassword1" required/>
                        </div>

                        <button type="submit" class="btn btn-dark">Transfer</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Account_Transfer
