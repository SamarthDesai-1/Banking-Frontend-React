import React, { useState } from 'react'
import '../style-css/Reset_Password.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
//loading bar
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

function Update_PIN() {

    const navigate = useNavigate();

    const [PIN, setPin] = useState();
    const [CPIN, setCpin] = useState();

    const [open, setOpen] = React.useState(false);

    const resetPIN = async () => {

        const sessionToken = JSON.parse(sessionStorage.getItem("Token"));
        const sessionEmail = JSON.parse(sessionStorage.getItem("Email"));

        setOpen(true)

        const tokenString = sessionStorage.getItem("Random");

        console.log(`Random String from session storage : ${tokenString}`);

        if (PIN === CPIN) {
            const data = await axios.post('http://localhost:5000/test/api/users/update-pin', { PIN, CPIN, sessionEmail, sessionToken  }, {
                headers: {
                    'Content-Type': 'application/json'
                }

            }).then((data) => {

                console.log(data);

                setPin("");
                setCpin("");
                alert("your PIN is reset succesfully")

                navigate("/PINvarify");


            }).catch(() => console.log("Error from API response"));

            console.log(data);
        }
        else {
            alert("Retype PIN and confirm PIN");
        }
        setOpen(false)

    }


    return (
        <div className='Reset'>
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={open}
            // onClick={handleClose}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
            <div class="container">

                <div class="component-container">
                    <div style={{ marginTop: "25px" }} class="image-section">
                        <img class="image-format" src="IMAGES/img3.jpg" alt="error" />
                    </div>

                    <div style={{ marginTop: "100px" }} class="reset-password-text">
                        <div class="display-text">
                            <h1 class="text-format">Reset your Account PIN.</h1>
                        </div>
                        <div class="input-section">
                            <form action="" class="form-section">
                                <input  maxLength={4} value={PIN} onChange={(e) => setPin(e.target.value)} type="password" class="format-text" placeholder="Enter new PIN" />
                                <div class="seperator"></div>
                                <input maxLength={4}  value={CPIN} onChange={(e) => setCpin(e.target.value)} t type="password" class="format-text" placeholder="Confirm PIN" />
                                <button onClick={resetPIN} type="button" class="btn">Reset PIN</button>
                            </form>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Update_PIN;
