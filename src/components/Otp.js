import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../style-css/Otp.css';
import { useNavigate } from 'react-router-dom';

function Otp() {

  const navigate = useNavigate();

  const [otp, setotp] = useState('');

  /* Function */

  const sendotpdata = async () => {
    const data = await axios.post('http://localhost:5000/test/api/users/verify', { otp }, {
      headers: {
        'Content-Type': 'application/json'
      }
    }).catch(e => alert("OTP is invalid"))
    if(data){
      navigate("/")
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
                    {[...Array(6)].map((_, index) => (
                      <input key={index} type="number" disabled={index !== 0} />
                    ))}
                  </div>
                  <button type='button' onClick={sendotpdata} className="btn" >Verify OTP</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Otp;
