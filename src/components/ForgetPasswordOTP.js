import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../style-css/Otp.css';
import { useNavigate } from 'react-router-dom';

import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

import OtpInput from 'react-otp-input';

//tostyfy
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Tostyfy from './Tostyfy';


function OTP() {

  const navigate = useNavigate();

  const [otp, setotp] = useState('');

  const [otp1, setOtp1] = useState('');

  const [open, setOpen] = React.useState(false);

  const [countdown, setCountdown] = useState(180);
  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(prevCountdown => {
        if (prevCountdown === 0) {
          clearInterval(timer); // Stop the timer when countdown reaches 0
          return 0;
        } else {
          return prevCountdown - 1;
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  /* Function */

  const sendotpdata = async () => {
    setOpen(true)
    const response = await axios.post('http://localhost:5000/test/api/users/reset-password-otp', { otp }, {
      headers: {
        'Content-Type': 'application/json'
      }
    }).catch((e) => toast.error(e.response.data.msg))
    // setotp("");
    setOpen(false)
    if (response?.status === 200) {
      navigate("/Reset_Password");
    }
    handleVerifyOTP();
  }

  useEffect(() => {
    const inputs = document.querySelectorAll("input");
    const button = document.querySelector("button");

    inputs[0].focus();

    // Define event listener function
    const handleInputKeyUp = (e) => {
      const currentInput = e.target;
      const nextInput = currentInput.nextElementSibling;
      const prevInput = currentInput.previousElementSibling;

      if (currentInput.value.length > 1) {
        currentInput.value = "";
        return;
      }

      if (nextInput && nextInput.hasAttribute("disabled") && currentInput.value !== "") {
        nextInput.removeAttribute("disabled");
        nextInput.focus();
      }

      if (e.key === "Backspace") {
        if (currentInput.value === "") {
          // Move focus to the previous input
          if (prevInput) {
            prevInput.removeAttribute("disabled");
            prevInput.focus();
          }
        }
      }

      // Construct OTP when all inputs are filled
      const otp = Array.from(inputs).map(input => input.value).join('');
      setotp(otp);
      console.log(setotp(otp));

      // Check if all inputs are filled and update button state
      if (!Array.from(inputs).some(input => input.value === "") && otp.length === 6) {
        button.classList.add("active");
      } else {
        button.classList.remove("active");
      }
    };

    // Add event listeners
    inputs.forEach((input) => {
      input.addEventListener("keyup", handleInputKeyUp);
    });

    // Remove event listeners on cleanup
    return () => {
      inputs.forEach((input) => {
        input.removeEventListener("keyup", handleInputKeyUp);
      });
    };
  }, []); // Empty dependency array ensures this effect runs only once on mount

  // Function to handle OTP verification

  const handleVerifyOTP = () => {
    console.log("OTP Value:", otp);
    // Add your verification logic here
  };

  return (
    <>
    {/* <Tostyfy></Tostyfy> */}
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
      // onClick={handleClose}
      >
        <CircularProgress color="inherit" />
      </Backdrop>

      <div className="otp">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-body">
            <div>
              <div className="container">
                <header>
                  <i className="bx bxs-check-shield"></i>
                </header>
                <h4>Enter OTP Code</h4>
                <form action="">
                  <div className="input-field">
                  <OtpInput
                  inputStyle={{width:"40px"}} 
                      value={otp1}
                      onChange={setOtp1}
                      numInputs={6}
                      renderSeparator={<span>-</span>}
                      renderInput={(props) => <input {...props} />}
                      />
                  </div>
                  <button type='button' onClick={sendotpdata} className="btn" >Verify OTP</button>
                </form>
                <p>Time remaining: {formatTime(countdown)}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OTP;