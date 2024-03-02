import React, { useState } from 'react';
import '../style-css/PINvarify.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function PINvarify() {

    const [pin, setPin] = useState("");
    const navigate = useNavigate();

    const verifyPIN = async () => {

        console.log("User click verify PIN");

        const PIN = pin;

        if (PIN === "") {
            alert("Enter PIN first to access your profile");
            return;
        }

        const sessionEmail = JSON.parse(sessionStorage.getItem("Email"));
        const sessionToken = JSON.parse(sessionStorage.getItem("Token"));

        console.log(PIN);
        
        try {
            const response = await axios.post("http://localhost:5000/test/api/users/verify-pin", { PIN, sessionEmail, sessionToken }, {
                headers: {
                    'Content-Type': 'application/json',
                }
            }).then(response => {
                if (response?.status === 200) {
                    console.log(response);
                    navigate("/User_Profile");
                }
            }).catch(async e => {
                console.log(e.response.data.msg);
                console.log("Error : ", e);
                alert(e.response.data.msg);
            })
        }
        catch(e) {
            console.log("Error : ", e);
        }
    };

    const forgetPIN = async () => {

        const sessionToken = JSON.parse(sessionStorage.getItem("Token"));
        const sessionEmail = JSON.parse(sessionStorage.getItem("Email"));
        console.log("User click forget PIN");
        alert("Check your inbox mail and enter OTP below for authentication.");

        const data = await axios.post("http://localhost:5000/test/api/users/forget-pin", { sessionToken, sessionEmail }, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => {
            if (response?.status == 200) {
                console.log(response);
                navigate("/ForgetPINOTP");
            }
        }).catch(e => console.log("Error : ", e));

    }

    return (
        <div className='pin'>
            <div class="container">

                <div class="box-1">
                    <div class="image-section">
                        <img src="./IMAGES/PINvarify.png" alt="" class="admin-image" />
                    </div>
                    <div class="form-section">
                        <form>
                            <input type="password" class="format" placeholder="PIN" maxlength="4" name="pin" onChange={(e) => setPin(e.target.value)} />
                            <br />
                            <div class="btn-section">
                                <input type="button" value="Verify" class="btn" name="subbtn" onClick={verifyPIN} />
                                <input type="button" value="Forget PIN" class="btn-primary" onClick={forgetPIN} />
                            </div>
                        </form>

                    </div>
                </div>

                <div class="box-2">
                    <h1 class="big-font">Privacy & Policy</h1>
                    <p>A Personal Identification Number (PIN) is a numeric or alphanumeric code used as a security measure to authenticate a user's identity, typically in electronic transactions or access control systems. PINs are widely used in various contexts, including banking, mobile devices, email accounts, and access to physical facilities.</p>
                    <p>Privacy and policy, often referred to as privacy policies, are legal documents or statements that outline how an organization collects, uses, manages, and protects the personal information of individuals. Privacy policies are essential for maintaining transparency and establishing trust between businesses and their users or customers..</p>
                    <br /><br />
                    <div class="liner"></div>
                    <h3>Transact Banking Company.</h3>

                </div>



            </div>
        </div>
    )
}

export default PINvarify;
