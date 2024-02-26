import React, { useState } from 'react'
import '../style-css/Reset_Password.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Reset_Password() {

    const navigate = useNavigate();

    const [password,setPassword] = useState();
    const [cpassword,setCpassword] = useState();

    const resetpass = async () => {

        const data = await axios.post('http://localhost:5000/test/api/users/reset-password', {password,cpassword}, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(() => {

            
        }).catch(e => {
            console.log(e);
            console.log(e.response.data.msg)
        });
        console.log(data);
    }


    return (
        <div className='Reset'>
            <div class="container">

                <div class="component-container">
                    <div style={{marginTop:"25px"}} class="image-section">
                        <img class="image-format" src="IMAGES/img3.jpg" alt="error"/>
                    </div>

                    <div style={{marginTop:"100px"}} class="reset-password-text">
                        <div class="display-text">
                            <h1 class="text-format">Reset your password.</h1>
                        </div>
                        <div class="input-section">
                            <form action="" class="form-section">
                                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" class="format-text" placeholder="Enter new password"/>
                                    <div class="seperator"></div>
                                    <input value={cpassword} onChange={(e) => setCpassword(e.target.value)}t type="password" class="format-text" placeholder="Confirm password"/>
                                        <button onClick={resetpass} type="button" class="btn">Reset password</button>
                                    </form>
                                </div>
                        </div>
                    </div>

                </div>

            </div>
            )
}

            export default Reset_Password