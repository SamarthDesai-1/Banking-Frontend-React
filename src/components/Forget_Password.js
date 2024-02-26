import React from 'react'
import '../style-css/Forget_Password.css'

function Forget_Password() {
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
                            <input type="email" name="email" id="" class="email-box" placeholder="Enter email address" />
                            <button class="btn">Verify</button>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Forget_Password
