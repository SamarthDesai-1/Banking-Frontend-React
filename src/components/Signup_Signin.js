import React, { useState } from "react";
import "../style-css/Signup_Signin.css";
import Navbar from "../components/Navbar";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
// validation form
import { useForm } from "react-hook-form";
import joi from "joi";
import { joiResolver } from "@hookform/resolvers/joi";
// loading bar
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
//tostyfy
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import swal from "sweetalert";

const schema = joi
  .object({
    fname: joi.string().min(2).max(50).required(),
    lname: joi.string().min(2).max(50).required(),
    email: joi
      .string()
      .email({
        minDomainSegments: 2,
        tlds: { allow: ["com", "net", "org", "io"] },
      })
      .required(),
    password: joi.string().min(4).required(),
    cpassword: joi
      .string()
      .min(4)
      .max(100)
      .valid(joi.ref("password"))
      .label("Confirm password"),
  })
  .with("password", "cpassword")
  .required();

function Signup_Signin() {
  const { register, handleSubmit, formState } = useForm({
    resolver: joiResolver(schema),
  });
  const errors = formState?.errors;

  const [fname, setfname] = useState("");
  const [lname, setlname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [cpassword, setcpassword] = useState("");

  const [open, setOpen] = React.useState(false);

  const navigate = useNavigate();

  const sendData = async () => {
    setOpen(true);
    const data = await axios
      .post(
        "http://localhost:5000/test/api/users/signup",
        { fname, lname, email, password, cpassword },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then(() => {
        navigate("/Otp");
      })
      .catch((e) => {
        console.log(e);
        console.log(e.response.data.msg);
        if (e.response.data.msg) {
          // alert("Your account is already open kindly login..");
          toast.error(
            `${email} email is already in use. Please try a different one.`
          );
        }
      });
    console.log(data);
    setOpen(false);
  };

  /* Login API handling .*/

  const hendleLogin = async () => {
    setOpen(true);
    await axios
      .post(
        "http://localhost:5000/test/api/users/login",
        { email, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        if (response?.status === 200) {
          // toast.success("Login successfully");
          console.log(response);
          console.log("Token : ", response.data.Token);
          console.log("Email : ", response.data.Email);

          /* send this two fields to every request to maintain session behaviour and authentication */
          sessionStorage.setItem("Token", JSON.stringify(response.data.Token));
          sessionStorage.setItem("Email", JSON.stringify(response.data.Email));

          localStorage.clear();

          /* Change. */

          setemail("");
          setpassword("");
          if (email === "admin@gmail.com" && password === "admin1234") {
            navigate("../Admin_Dashbord");
          } else {
            toast.success("welcome");
            navigate("/");
          }
        }
      })
      .catch((e) => toast.error("Invalid Username or Password"));
    setOpen(false);
  };

  const [isSignUpMode, setSignUpMode] = useState(false);
  const [isSignUpMode2, setSignUpMode2] = useState(false);
  const toggleSignUpMode = () => {
    setSignUpMode(true);
    setSignUpMode2(false);
  };

  const toggleSignInMode = () => {
    setSignUpMode(false);
    setSignUpMode2(false);
  };

  const toggleSignUpMode2 = () => {
    setSignUpMode(false);
    setSignUpMode2(true);
  };

  const toggleSignInMode2 = () => {
    setSignUpMode2(false);
    setSignUpMode(false);
  };

  return (
    <>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        // onClick={handleClose}
      >
        <CircularProgress color="inherit" />
      </Backdrop>

      <Navbar></Navbar>
      <div className="Sign_Login">
        <div
          className={`container ${isSignUpMode ? "sign-up-mode" : ""} ${
            isSignUpMode2 ? "sign-up-mode2" : ""
          }`}
        >
          <div className="signin-signup">
            <form className="sign-in-form">
              <h2 className="title">Sign in</h2>
              <div className="input-field">
                <i className="fas fa-envelope"></i>
                <input
                  type="text"
                  placeholder="Email"
                  onChange={(e) => setemail(e.target.value)}
                />
              </div>
              <div className="input-field">
                <i className="fas fa-lock"></i>
                <input
                  type="password"
                  placeholder="Password"
                  onChange={(e) => setpassword(e.target.value)}
                />
              </div>
              <p>
                <NavLink to="/Forget_Password">Forget password ?</NavLink>
              </p>
              <input
                type="button"
                value="Login"
                className="btn"
                onClick={hendleLogin}
              />

              <p className="account-text">
                Don't have an account?{" "}
                <a href="/" id="sign-up-btn2">
                  Sign up
                </a>
              </p>
            </form>

            <form
              action=""
              className="sign-up-form"
              onSubmit={handleSubmit(sendData)}
            >
              <h2 className="title">Sign up</h2>
              <div className="input-field">
                <i className="fas fa-user"></i>
                <input
                  {...register("fname")}
                  type="text"
                  placeholder="First Name"
                  id="fname"
                  value={fname}
                  onChange={(e) => setfname(e.target.value)}
                />
              </div>

              {errors && errors.fname && (
                <p className="text-danger">{errors.fname.message}</p>
              )}

              <div className="input-field">
                <i className="fas fa-user"></i>
                <input
                  {...register("lname")}
                  type="text"
                  placeholder="Last Name"
                  id="lname"
                  value={lname}
                  onChange={(e) => setlname(e.target.value)}
                />
              </div>

              {errors && errors.lname && (
                <p className="text-danger">{errors.lname.message}</p>
              )}

              <div className="input-field">
                <i className="fas fa-envelope"></i>
                <input
                  {...register("email")}
                  type="text"
                  placeholder="Email"
                  id="email"
                  value={email}
                  onChange={(e) => setemail(e.target.value)}
                />
              </div>

              {errors && errors.email && (
                <p className="text-danger">{errors.email.message}</p>
              )}

              <div className="input-field">
                <i className="fas fa-lock"></i>
                <input
                  {...register("password")}
                  type="password"
                  placeholder="Password"
                  id="password"
                  value={password}
                  onChange={(e) => setpassword(e.target.value)}
                />
              </div>

              {errors && errors.password && (
                <p className="text-danger">{errors.password.message}</p>
              )}
              <div className="input-field">
                <i className="fas fa-lock"></i>
                <input
                  {...register("cpassword")}
                  type="password"
                  placeholder="Confirm - password"
                  id="cpassword"
                  value={cpassword}
                  onChange={(e) => setcpassword(e.target.value)}
                />
              </div>

              {errors && errors.cpassword && (
                <p className="text-danger">{errors.cpassword.message}</p>
              )}

              <input type="submit" value="Sign up" className="btn" />
            </form>
          </div>
          <div className="panels-container">
            <div className="panel left-panel">
              <div className="content">
                <h3>Signin with Transact</h3>
                <p className="text-samarth">
                  Effortlessly sign up on the banking website to create your
                  account, providing essential details for secure access to
                  financial services and personalized banking solutions.
                </p>
                <button
                  className="btn"
                  id="sign-in-btn"
                  onClick={toggleSignInMode}
                >
                  Sign in
                </button>
              </div>
              <img src="signin.svg" alt="" className="image" />
            </div>
            <div className="panel right-panel">
              <div className="content">
                <h3>Welcome To Transact?</h3>
                <p className="text-samarth">
                  Easily log in to your banking website to securely manage
                  accounts, conduct transactions, and access financial services
                  hassle-free.
                </p>
                <button
                  className="btn"
                  id="sign-up-btn"
                  onClick={toggleSignUpMode}
                >
                  Sign up
                </button>
              </div>
              <img src="signup.svg" alt="" className="image" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup_Signin;
