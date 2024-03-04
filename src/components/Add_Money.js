import React from 'react'
import Deshbord_Navbar from './Deshbord_Navbar'
import Deshbord_Sidebar from './Deshbord_Sidebar'
import '../style-css/Add_Money.css'

function Add_Money() {
    return (
        <div className='money'>
            <Deshbord_Navbar></Deshbord_Navbar>
            <div className="row">
                <div className="col-sm-3">
                    <Deshbord_Sidebar></Deshbord_Sidebar>
                </div>
                <div className="col-sm-8 addform">
                    <form className='p-5'>
                        <h2 className=''>Add Money</h2>
                        <p>Enter the amount you eant to add.</p>
                        <div class="mb-3 mt-5">
                            <label for="exampleInputEmail1" class="form-label">Account Number</label>
                            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required/>

                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Amount</label>
                            <input type="number" class="form-control" id="exampleInputPassword1" required/>
                        </div>

                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">PIN</label>
                            <input type="number" class="form-control" id="exampleInputPassword1" required/>
                        </div>

                        <button type="submit" class="btn btn-dark">Add Money</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Add_Money
