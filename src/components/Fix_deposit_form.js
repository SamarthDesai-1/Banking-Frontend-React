import React from 'react'
import '../style-css/Fix_deposit_form.css'

function Fix_deposit_form() {
    return (
        <div className='fix'>
            <div className="bal">
            <h2 className=''>Balance : $5000</h2>
            </div>
                
            <div className=" fixform col-md-8">
                <form className='mt-4'>
                    <div class="form-group m-3">
                        <label className='mb-2' for="amount">Deposit Amount:</label>
                        <input type="number" class="form-control" id="amount" placeholder="Enter amount" />
                    </div>
                    <div class="form-group m-3">
                        <label className='mb-2' for="amount">Time Period:</label>
                        <input type="number" class="form-control" id="amount" placeholder="Enter Months" />
                    </div>
                    <div class="form-group m-3">
                        <label className='mb-2' for="amount">PIN:</label>
                        <input type="number" class="form-control" id="amount" placeholder="Enter PIN" />
                    </div>
                    <button type="submit" class="btn btn-primary m-3">Submit</button>
                </form>
                <h3 className='ac mt-3'>Account for Payout : 5050 4040 3030 </h3>
            </div>
        </div>
    )
}

export default Fix_deposit_form
