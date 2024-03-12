import React, { useEffect, useState } from 'react'
import '../style-css/Forget_Password.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
//loading bar
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
//tostyfy
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import swal from 'sweetalert';


function Forget_Password() {

    const navigate = useNavigate();
    const [email, setemail] = useState("");

    const [open, setOpen] = React.useState(false);


    const forgetpass = async () => {

       
        setOpen(true);
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

            swal({
                text: "Check your inbox mail and enter OTP below for authentication.",
                icon: "info",
                dangerMode: true,
              })
              .then(() => {
                if (response?.status == 200) {
                  console.log(response); 
                  navigate("/ForgetPasswordOTP");
                }
              });
        }).catch(e => {

            const errorMessage = e.response.data.msg;
            console.log(e);
            console.log(`Error Message : ${errorMessage}`);

            if (e.response.data.isMailFound === true) {
                toast.error(`${email} is not exist kindly Registration`);
            }
        });
        console.log(data);
        setOpen(false);
    }

    return (
        <div className='Forget'>
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={open}
            // onClick={handleClose}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
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
