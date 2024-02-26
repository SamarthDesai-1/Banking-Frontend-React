import React,{useState} from 'react'
import '../style-css/Forget_Password.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Forget_Password() {

    const navigate = useNavigate();

    const [email, setemail] = useState("");

    const forgetpass = async () => {

        const data = await axios.post('http://localhost:5000/test/api/users/forget-password', {email}, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((response) => {
            console.log(response)
            navigate("/Reset_Password");
        }).catch(e => {
            console.log(e);
            console.log(e.response.data.msg);
            if (e.response.data.msg) {
                alert(`${email} is not exist kindly Ragistration`);
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
                            <input onChange={(e) => setemail(e.target.value)}  value={email} type="email" name="email" id="" class="email-box" placeholder="Enter email address" />
                            <button type="button" onClick={forgetpass} class="btn">Verify</button>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Forget_Password
