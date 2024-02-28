import React, { useState } from 'react'
import '../style-css/Generate_PIN.css';
import { useNavigate } from 'react-router-dom';


const forFirstTimeOnly = {
    PIN: undefined,
    boolean: false 
};

function Generate_PIN() {

    const navigate = useNavigate();

    const [randomNumber, setRandomNumber] = useState("");

    const generateRandomNumber = () => {

        if (forFirstTimeOnly.PIN === undefined && forFirstTimeOnly.boolean === false) {
            const min = 1001;
            const max = 9999;
            const random = Math.floor(Math.random() * (max - min + 1)) + min;
            setRandomNumber(random);

            console.log("Random value from state : ", randomNumber);

            console.log("Random value : ", random);

            forFirstTimeOnly.PIN = random;
            forFirstTimeOnly.boolean = true;
        }
        else {
            console.log("PIN is already generated check dashBoard"); /* Or alert */
            navigate("/PINvarify");
        }

    };


    let flag = true;
    if (flag != false) {
        setTimeout(() => {
            function createPopup(id) {
                let popupNode = document.querySelector(id)
                let overlay = popupNode.querySelector(".overlay");
                let closebtn = popupNode.querySelector(".close-btn");
                function openpopup() {
                    popupNode.classList.add("active");
                }
                function closepopup() {
                    popupNode.classList.remove("active");
                }


                overlay.addEventListener("click", closepopup);
                closebtn.addEventListener("click", closepopup);
                return openpopup;

            }

            let popup = createPopup("#popup");
            document.querySelector("#open-popup").addEventListener("click", popup);
        }, 1000);
    }


    return (
        <div className='generatepin'>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="header-section">
                            <h1 className="head-text">Generate PIN</h1>
                        </div>
                        <div className="generate-section">
                            {/* <h1 >Generate PIN from here.</h1> */}
                            <img src='./IMAGES/PINimage.webp' className='format-image' />
                            {/* <h3 className='mt-4'>By simply click on generate button.</h3> */}
                          
                            <button onClick={() => generateRandomNumber()} type="button" className="btn mt-4" id="open-popup" >Generate</button>
                        </div>
                    </div>

                    <div className="col-md-6">
                <div className="box-1">

                        <div className="forget-section">
                            <h1>Crendentials.</h1>
                            <ul>
                                <li>You can easily retrive your PIN using your Email.</li>
                                <li>Don't share your PIN with third party it can harm your privacy & security.</li>
                                <li>With PIN you can track your statements.</li>
                                <li>PIN makes you safer mover from rest peoples.</li>
                            </ul>
                            <div className="company-section">
                                <h4>Transact Payments.</h4>
                            </div>
                        </div>
                    </div>

                </div>

                </div>


                <div className="popup" id="popup">
                    <div className="overlay"></div>
                    <div className="popup-content">
                        <h2>Your PIN</h2>

                        <p>Protecting your PIN is crucial for safeguarding your financial security. Always opt for a PIN that is complex, comprising a mix of numbers, letters, and special characters, if possible. Aim for a longer PIN to enhance its strength against potential threats.</p><br/>
                            <p><h4>{`Your Account PIN is : ${forFirstTimeOnly.PIN}`}</h4></p>

                            <div className="controls">
                                <button className="close-btn">Close</button>
                                <button className="submit-btn">Save</button>
                            </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Generate_PIN;
