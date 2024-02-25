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
        </Routes>
      </BrowserRouter>
  </>
  );
}

export default App;
