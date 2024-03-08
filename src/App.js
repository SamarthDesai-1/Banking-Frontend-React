import React from "react";
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About_us from "./components/About_us";
import Contect from './components/Contect'
import Signup_Signin from "./components/Signup_Signin";
import Otp from "./components/Otp";
import Help from "./components/Help";
import Create_Account from "./components/Create_Account";
import PINvarify from "./components/PINvarify";
import Forget_Password from "./components/Forget_Password";
import Reset_Password from "./components/Reset_Password";
import User_Profile from "./components/User_Profile";
import ForgetPasswordOTP from "../src/components/ForgetPasswordOTP"
import Generate_PIN from "./components/Generate_PIN";
import FormComponent from "./components/FormDemo";
import ForgetPINOTP from "./components/ForgetPINOTP";
import Update_PIN from "./components/Updata_PIN";
import Edit_Profile from "./components/Edit_Profile";
import Deshbord_Navbar from "./components/Deshbord_Navbar";
import Deshbord_Sidebar from "./components/Deshbord_Sidebar";
import Deshbord from "./components/Deshbord";
import Account_Transfer from "./components/Account_Transfer";
import NotFound from "./components/NotFound";
import Transection from "./components/Transection";
import Add_Money from "./components/Add_Money";
import Withdrow from "./components/Withdrow";
import Applydebit from "./components/Applydebit";
import Dabitcard_form from "./components/Dabitcard_form";
import Debitcard from "./components/Debitcard";

import Apply_fix_recurring from "./components/Apply_fix_recurring";
import Fix_deposit_form from "./components/Fix_deposit_form";
import Deposit_status from "./components/Deposit_status";
import View_rates from "./components/View_rates";

function App() {
  return (
  <>
  <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/About_us" element={<About_us/>} />
          <Route exact path="/Contect" element={<Contect/>} />
          <Route exact path="/Signup_Signin" element={<Signup_Signin/>} />
          <Route exact path="/Otp" element={<Otp/>} />
          <Route exact path="/Help" element={<Help/>} />
          <Route exact path="/Create_Account" element={<Create_Account/>} />
          <Route exact path="/PINvarify" element={<PINvarify/>} />
          <Route exact path="/Forget_Password" element={<Forget_Password/>} />
          <Route exact path="/Reset_Password" element={<Reset_Password/>} />
          <Route exact path="/ForgetPasswordOTP" element={<ForgetPasswordOTP/>} />
          <Route exact path="/User_Profile" element={<User_Profile/>} />
          <Route exact path="/PINvarify" element={<PINvarify/>} />
          <Route exact path="/Create_Account" element={<Create_Account/>} />
          <Route exact path="/Generate_PIN" element={<Generate_PIN/>} />
          <Route exact path="/ForgetPINOTP" element={<ForgetPINOTP/>} />
          <Route exact path="/Update_PIN" element={<Update_PIN/>} />
          <Route exact path="/FormComponent" element={<FormComponent/>} />
          <Route exact path="/Edit_Profile" element={<Edit_Profile/>} />
          <Route exact path="/Deshbord_Navbar" element={<Deshbord_Navbar/>} />
          <Route exact path="/Deshbord_Sidebar" element={<Deshbord_Sidebar/>} />
          <Route exact path="/Deshbord" element={<Deshbord/>} />
          <Route exact path="/Account_Transfer" element={<Account_Transfer/>} />
          <Route exact path="/NotFound" element={<NotFound/>} />
          <Route exact path="/Transection" element={<Transection/>} />
          <Route exact path="/Add_Money" element={<Add_Money/>} />
          <Route exact path="/Withdrow" element={<Withdrow/>} />
          <Route exact path="/Applydebit" element={<Applydebit/>} />
          <Route exact path="/Dabitcard_form" element={<Dabitcard_form/>} />
          <Route exact path="/Debitcard" element={<Debitcard/>} />
          <Route exact path="/Apply_fix_recurring" element={<Apply_fix_recurring/>} />
          <Route exact path="/Fix_deposit_form" element={<Fix_deposit_form/>} />
          <Route exact path="/Deposit_status" element={<Deposit_status/>} />
          <Route exact path="/View_rates" element={<View_rates/>} />
        </Routes>
      </BrowserRouter>
  </>
  );
}

export default App;
