import React from 'react'
import '../style-css/Reset_Password.css'

function Reset_Password() {
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
                                <input type="password" class="format-text" placeholder="Enter new password"/>
                                    <div class="seperator"></div>
                                    <input type="password" class="format-text" placeholder="Confirm password"/>
                                        <button type="button" class="btn">Reset password</button>
                                    </form>
                                </div>
                        </div>
                    </div>

                </div>

            </div>
            )
}

            export default Reset_Password
