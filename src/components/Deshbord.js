import React from 'react'
import Deshbord_Navbar from './Deshbord_Navbar'
import Deshbord_Sidebar from './Deshbord_Sidebar'
import '../style-css/Deshbord.css'

function Deshbord() {
    return (
        <div className='Deshbord'>
            <Deshbord_Navbar></Deshbord_Navbar>
            <div className="row">
                <div className="col-sm-3">
                    <Deshbord_Sidebar></Deshbord_Sidebar>
                </div>
                <div className="col-sm-6">
                
                {/* content hear */}

                </div>
            </div>
        </div>
    )
}

export default Deshbord
