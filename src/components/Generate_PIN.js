import React, { useState } from 'react'
import '../style-css/Generate_PIN.css';

function Generate_PIN() {

    const [randomNumber, setRandomNumber] = useState(null);

    // Function to generate a random number between min and max
    const generateRandomNumber = () => {
        const min = 1001;
        const max = 9999;
        const random = Math.floor(Math.random() * (max - min + 1)) + min;
        setRandomNumber(random);
        console.log(randomNumber)
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
                            <h1 >Generate PIN from here.</h1>
                            <h3 className='mt-4'>By simply click on generate button.</h3>
                          
                            <button onClick={() => generateRandomNumber()} type="button" className="btn mt-4" id="open-popup" >Generate</button>
                        </div>
                    </div>

                    <div className="col-md-6">
                <div className="box-1">

                        <div className="forget-section">
                            <h1>Forget PIN ??</h1>
                            <ul>
                                <li>You can easily retrive your PIN using your Email.</li>
                                <li>Don't share your PIN with third party it can harm your privacy & security.</li>
                                <li>With PIN you can track your statements.</li>
                                <li>PIN makes you safer mover from rest peoples.</li>
                            </ul>
                            <div className="company-section">
                                <h4>American Express</h4>
                            </div>
                        </div>
                    </div>

                </div>

                </div>


                <div className="popup" id="popup">
                    <div className="overlay"></div>
                    <div className="popup-content">
                        <h2>Your PIN</h2>

                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, ad quia voluptatem labore cum officia vel sed aliquam incidunt itaque explicabo reprehenderit. Voluptatum, ex nisi provident eius dolore labore quasi!</p><br/><p>Go back to Home page and refresh the page and you can see your financials.</p>
                            <p><h4>{`Your Account PIN is : ${randomNumber}`}</h4></p>

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

export default Generate_PIN
