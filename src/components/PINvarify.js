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
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime earum quibusdam explicabo. Alias dolores saepe voluptatibus, consequatur nisi modi minus!</p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis necessitatibus ullam veniam nemo aliquam excepturi a, commodi impedit, expedita ipsam id nobis et aperiam placeat sunt doloremque nam corrupti consectetur.</p>
                    <br /><br />
                    <div class="liner"></div>
                    <h3>Transect Banking Company.</h3>

                </div>



            </div>
        </div>
    )
}

export default PINvarify
