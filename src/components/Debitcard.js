import React from 'react'
import Deshbord_Sidebar from './Deshbord_Sidebar'
import Deshbord_Navbar from './Deshbord_Navbar'
import '../style-css/Debitcard.css'

function Debitcard() {
  return (
    <div className='debitcard'>
        <Deshbord_Navbar></Deshbord_Navbar>
      <div className="row">
        <div className="col-sm-3">
            <Deshbord_Sidebar></Deshbord_Sidebar>
        </div>
        <div className="col-sm-9">
        <div class="card text-white debit">
                        <img src="/IMAGES/dabitcard.png" class="card-img" alt="..." />
                        <div class="card-img-overlay">
                            <p className='cvv'>cvv/291</p>
                            <p className='expire'>EX:- 09/27</p>
                            <h4 className='cardno'>9428 0445 5188 4422</h4>
                        </div>
                    </div>
        </div>
      </div>
    </div>
  )
}

export default Debitcard
