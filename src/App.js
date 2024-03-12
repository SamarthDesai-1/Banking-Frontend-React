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

import Admin_Login from "./components/Admin/Admin_Login";
import Admin_Navbar from "./components/Admin/Admin_Navbar";
import Admin_Sidebar from "./components/Admin/Admin_Sidebar";
import Admin_Dashbord from "./components/Admin/Admin_Dashbord";
import Signup_Data from "./components/Admin/Signup_Data";
import Create_Account_data from "./components/Admin/Create_Account_data";
import Debit_Card_data from "./components/Admin/Debit_Card_data";
import Fix_deposit_data from "./components/Admin/Fix_deposit_data";
import Ad_User_Profile from "./components/Admin/Ad_User_Profile";
import Ad_User_Transrction from "./components/Admin/Ad_User_Transrction";
import View_Deposit_status from "./components/Admin/View_Deposit_status";
import Contect_data from "./components/Admin/Contect_data";
import Account_close from "./components/Account_close";
import Account_close_data from "./components/Admin/Account_close_data";

import Apply_Loan from "./components/Apply_Loan";
import Loan_data from "./components/Admin/Loan_data";
import Loan_status from "./components/Admin/Loan_status";

import Tostyfy from "./components/Tostyfy";
import { ToastContainer, toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <>
      <BrowserRouter>
        <ToastContainer
          style={{ zIndex: "10000000000" }}
          transition={Slide}
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/About_us" element={<About_us />} />
          <Route exact path="/Contect" element={<Contect />} />
          <Route exact path="/Signup_Signin" element={<Signup_Signin />} />
          <Route exact path="/Otp" element={<Otp />} />
          <Route exact path="/Help" element={<Help />} />
          <Route exact path="/Create_Account" element={<Create_Account />} />
          <Route exact path="/PINvarify" element={<PINvarify />} />
          <Route exact path="/Forget_Password" element={<Forget_Password />} />
          <Route exact path="/Reset_Password" element={<Reset_Password />} />
          <Route exact path="/ForgetPasswordOTP" element={<ForgetPasswordOTP />} />
          <Route exact path="/User_Profile" element={<User_Profile />} />
          <Route exact path="/PINvarify" element={<PINvarify />} />
          <Route exact path="/Create_Account" element={<Create_Account />} />
          <Route exact path="/Generate_PIN" element={<Generate_PIN />} />
          <Route exact path="/ForgetPINOTP" element={<ForgetPINOTP />} />
          <Route exact path="/Update_PIN" element={<Update_PIN />} />
          <Route exact path="/FormComponent" element={<FormComponent />} />
          <Route exact path="/Edit_Profile" element={<Edit_Profile />} />
          <Route exact path="/Deshbord_Navbar" element={<Deshbord_Navbar />} />
          <Route exact path="/Deshbord_Sidebar" element={<Deshbord_Sidebar />} />
          <Route exact path="/Deshbord" element={<Deshbord />} />
          <Route exact path="/Account_Transfer" element={<Account_Transfer />} />
          <Route exact path="/NotFound" element={<NotFound />} />
          <Route exact path="/Transection" element={<Transection />} />
          <Route exact path="/Add_Money" element={<Add_Money />} />
          <Route exact path="/Withdrow" element={<Withdrow />} />
          <Route exact path="/Applydebit" element={<Applydebit />} />
          <Route exact path="/Dabitcard_form" element={<Dabitcard_form />} />
          <Route exact path="/Debitcard" element={<Debitcard />} />
          <Route exact path="/Apply_fix_recurring" element={<Apply_fix_recurring />} />
          <Route exact path="/Fix_deposit_form" element={<Fix_deposit_form />} />
          <Route exact path="/Deposit_status" element={<Deposit_status />} />
          <Route exact path="/View_rates" element={<View_rates />} />

          <Route exact path="/Admin_Login" element={<Admin_Login />} />
          <Route exact path="/Admin_Navbar" element={<Admin_Navbar />} />
          <Route exact path="/Admin_Sidebar" element={<Admin_Sidebar />} />
          <Route exact path="/Admin_Dashbord" element={<Admin_Dashbord />} />
          <Route exact path="/Signup_Data" element={<Signup_Data />} />
          <Route exact path="/Create_Account_data" element={<Create_Account_data />} />
          <Route exact path="/Debit_Card_data" element={<Debit_Card_data />} />
          <Route exact path="/Fix_deposit_data" element={<Fix_deposit_data />} />
          <Route exact path="/Ad_User_Profile/:userId" element={<Ad_User_Profile />} />
          <Route exact path="/Ad_User_Transrction/:userId" element={<Ad_User_Transrction />} />
          <Route exact path="/View_Deposit_status" element={<View_Deposit_status />} />
          <Route exact path="/Contect_data" element={<Contect_data />} />

          <Route exact path="/Account_close" element={<Account_close />} />
          <Route exact path="/Account_close_data" element={<Account_close_data />} />
          <Route exact path="/Tostyfy" element={<Tostyfy />} />

          <Route exact path="/Apply_Loan" element={<Apply_Loan/>} />
          <Route exact path="/Loan_data" element={<Loan_data/>} />
          <Route exact path="/Loan_status" element={<Loan_status/>} />


        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
