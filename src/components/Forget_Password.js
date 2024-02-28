import React, { useEffect, useState } from 'react'
import '../style-css/Forget_Password.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Forget_Password() {

    const navigate = useNavigate();

    const [email, setemail] = useState("");

    const forgetpass = async () => {


        alert("Check your inbox mail and enter OTP below for authentication.");

        const sessionToken = JSON.parse(sessionStorage.getItem("Token"));
    
        console.log(`Accessing session Token from sessionStorage : ${sessionToken}`);

        const data = await axios.post('http://localhost:5000/test/api/users/forget-password', { /* user email*/ email }, {
            headers: {
                'Content-Type': 'application/json',

                /* Send token to backend for verification */

                // 'Authorization': `Bearer ${sessionToken}`
                
            }
        }).then(response => {

            console.log("Response from server or forget-password : ", response);

            const tokenString = response.data.RandomString;

            sessionStorage.setItem("Random", response.data.RandomString);

            console.log("Random String : ", tokenString);
            setemail("");

            /* OTP page */ navigate("/ForgetPasswordOTP");


        }).catch(e => {

            const errorMessage = e.response.data.msg;
            console.log(e);
            console.log(`Error Message : ${errorMessage}`);

            if (e.response.data.isMailFound === true) {
                alert(`${email} is not exist kindly Registration`);
            }
        });
        console.log(data);
    }

    return (
        <div className='Forget'>
            <div class="container">

                <div class="image-section">
                    <img src="IMAGES/img1.png" alt="Error" class="format-image" />
                </div>

                <div class="form-part">

                    <div class="text">
                        <h1 class="font">Forget Password ?</h1>
                    </div>

                    <div class="form-data">
                        <form action="" class="form-fill">
                            <p class="text-info">Enter the email address associated with your account</p>
                            <input onChange={(e) => setemail(e.target.value)} value={email} type="email" name="email" id="" class="email-box" placeholder="Enter email address" />
                            <button type="button" onClick={forgetpass} class="btn">Verify</button>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Forget_Password
