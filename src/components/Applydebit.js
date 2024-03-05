import React from 'react'
import '../style-css/Applydebit.css'
import Deshbord_Navbar from './Deshbord_Navbar'
import Deshbord_Sidebar from './Deshbord_Sidebar'
import { NavLink } from 'react-router-dom'

function Applydebit() {
    return (
        <div className='applydebit'>
            <Deshbord_Navbar></Deshbord_Navbar>
            <div className="row">
                <div className="col-sm-3">
                    <Deshbord_Sidebar></Deshbord_Sidebar>
                </div>
                <div className="col-sm-9">
                    <div class="card text-white carddebit">
                        <img src="/IMAGES/dabitmodel.png" class="card-img" alt="..." />
                        <div class="card-img-overlay">
                             <NavLink to="../Dabitcard_form"><button className='debitappbtn btn btn-light'>Apply Debit card</button></NavLink>
                        </div>
                    </div>
                    <h3 className='px-5'>Term and Condition⭐</h3>
                    <p className='px-5 mt-3'>Debit cards can be used at various points of sale, ATMs, and for online transactions. It's important to keep the card secure and report any loss or theft to the issuing bank promptly. If you meant something else by "dabit cards," please provide more context, and I'll do my best to assist you.</p>
                    <p className='px-5 mt-3'>Activation: When you receive a new debit card, you usually need to activate it before you can use it. This can often be done online, over the phone, or at an ATM, depending on the bank's procedures</p>
                    <p className='px-5 mt-3'>Expiration: Debit cards have expiration dates printed on them. Typically, they are valid for a few years. Make sure to check the expiration date and replace the card before it expires to avoid interruption in card usage.</p>
                </div>
            </div>

        </div>
    )
}

export default Applydebit
