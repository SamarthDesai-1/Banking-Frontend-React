import React from 'react'
import '../style-css/PINvarify.css'

function PINvarify() {
    return (
        <div className='pin'>
            <div class="container">

                <div class="box-1">
                    <div class="image-section">
                        <img src="./IMAGES/PINvarify.png" alt="" class="admin-image" />
                    </div>
                    <div class="form-section">
                        <form method="post">
                            <input type="password" class="format" placeholder="PIN" maxlength="4" name="pin" />
                            <br />
                            <div class="btn-section">
                                <input type="submit" value="Verify" class="btn" name="subbtn" />
                                <input type="submit" value="Forget PIN" class="btn-primary" />
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

export default PINvarify
