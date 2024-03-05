import React from 'react'
import '../style-css/Withdrow.css'
import Deshbord_Sidebar from './Deshbord_Sidebar'
import Deshbord_Navbar from './Deshbord_Navbar'

function Withdrow() {
  return (
    <div className='Withdrow'>
        <Deshbord_Navbar></Deshbord_Navbar>
        <div className="row">
            <div className="col-sm-3">
                <Deshbord_Sidebar></Deshbord_Sidebar>
            </div>
            <div className="col-sm-8 withdrowform">
            <form className='p-5'>
                        <h2 className=''>Withdrow Money</h2>
                        <p>Enter the amount you eant to Withdrow.</p>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Amount</label>
                            <input type="number" class="form-control" id="exampleInputPassword1" required/>
                        </div>

                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">PIN</label>
                            <input type="number" class="form-control" id="exampleInputPassword1" required/>
                        </div>

                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Message</label>
                            <textarea type="text" class="form-control" id="exampleInputPassword1" required/>
                        </div>

                        <button type="submit" class="btn btn-dark">Withdrow Money</button>
                    </form>
            </div>
        </div>
      
    </div>
  )
}

export default Withdrow
