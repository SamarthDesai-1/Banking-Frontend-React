import React, { useEffect } from 'react'
import '../style-css/Home.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Typed from 'typed.js';
import Navbar from './Navbar.js';
import Footer from './Footer.js';
import Button from '@mui/material/Button';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import PaymentOutlinedIcon from '@mui/icons-material/PaymentOutlined';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';
import { NavLink } from 'react-router-dom';

function Home() {

    useEffect(() => {
        AOS.init();
        let typed = new Typed(".auto-type", {
            strings: ["Serves 850 Million active user.", "Your trust our responsiblity.", "Be a member of our family.", "Across 75+ countries."],
            typeSpeed: 50,
            backSpeed: 50,
            loop: true
        });
    }, []);

    return (
        <>
            <Navbar></Navbar>
            <div className='Home'>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-5">
                            <div className="content-box-1 mt-5">
                                <div className="title-section">
                                    <h1>Pay secure with transact pay.</h1>
                                </div>
                                <h1 className='mt-4'>India's fastest growing financial institution.</h1>
                                <p className="body-text mt-4">Take Your financial life online. Your Transact Account Will be a one-stop-shop for
                                    spending, saving, budgeting, investing, and much more.</p>
                                <br />
                                <div className="auto-type-setting">
                                    <span className="auto-type"></span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="content-image-section" data-aos="zoom-in">
                                <img className="image-setting" src="./IMAGES/img14.webp" alt="Error" />
                            </div>
                        </div>
                    </div>

                    <div className="container-spec">
                        <div className="choose-section" data-aos="fade-up">
                            <h1 className="choose-section-title">Why choose Transact Bank ?</h1>
                        </div>

                        <div className="info-section">
                            <div className="text-display">
                                <p className="text-display-title" data-aos="fade-up">We leverage open Banking to turn your bank account into your financial hub.
                                    control your finances like never before.</p>
                            </div>
                        </div>

                        <div className="service-card-group" >
                            <div className="service-card" data-aos="zoom-in">
                                <img src="https://cdn-icons-png.freepik.com/256/10071/10071183.png" alt="Icon for online banking"
                                    className="card-icon" />
                                <h3 className="card-title">online banking</h3>
                                <p className="card-text">
                                    our modern web and mobile applications allow you to keep track
                                    of yourr finances wherever you are in the world.
                                </p>
                            </div>

                            <div className="service-card" data-aos="zoom-in">
                                <img src="https://cdn-icons-png.freepik.com/256/10071/10071250.png" alt="Icon for simple budgeting"
                                    className="card-icon" />
                                <h3 className="card-title">simple budgeting</h3>
                                <p className="card-text">
                                    see exactly where your money goes each month. Receive
                                    notifications when you're close to hitting youe limits.
                                </p>
                            </div>

                            <div className="service-card" data-aos="zoom-in">
                                <img src="https://cdn-icons-png.freepik.com/256/10071/10071340.png" alt="Icon for Fast onboarding"
                                    className="card-icon" />
                                <h3 className="card-title">Fast onboarding</h3>
                                <p className="card-text">
                                    we don't do branches. open your account in minutes online and
                                    start taking control of your finances right away.
                                </p>
                            </div>

                            <div className="service-card" data-aos="zoom-in">
                                <img src="https://cdn-icons-png.freepik.com/256/10070/10070932.png" alt="Icon for open API" className="card-icon" />
                                <h3 className="card-title">open API</h3>
                                <p className="card-text">
                                    Manage your saving, investments, pension, and much more from
                                    one account. tracking your money has never been easier.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="articles-section">
                        <section className="blog-section">
                            <h1 className="blog-section-text">Latest Articles</h1>
                            <div className="article-container">

                                <div className="row">
                                    <div className="col-md-3">
                                        <div className="article" data-aos="fade-up" data-aos-duration="3000">
                                            <img src="./IMAGES/curr1.jpg" alt="Error" className="blog-images" />
                                            <div className="content">
                                                <p>Aryan Malhotra</p>
                                                <h4>Recieve money in any<br />
                                                    currency with no fees.</h4>
                                                <p className="blog-section-content-text">The world is getting smaller and<br />
                                                    we are becoming more mobile.So,<br />
                                                    why should you be forced.<br />
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="article" data-aos="fade-up" data-aos-duration="3000">
                                            <img src="./IMAGES/curr2.jpg" alt="Error" className="blog-images" />
                                            <div className="content">
                                                <p>Mitesh Sharma</p>
                                                <h4>Recieve money in any<br />
                                                    currency with no fees.</h4>
                                                <p className="blog-section-content-text">Our simple budgeting feature<br />
                                                    allow to seperate out your<br />
                                                    spending and set realistic limits<br />
                                                    each month.That means you...</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-3">
                                        <div className="article" data-aos="fade-up" data-aos-duration="3000">
                                            <img src="./IMAGES/curr3.jpg" alt="Error" className="blog-images" />
                                            <div className="content">
                                                <p>Anurag bassi</p>
                                                <h4>Take Your Easybank card<br />whereever you go.</h4>
                                                <p className="blog-section-content-text">We want you to enjoy your travels.<br />This is why we don't
                                                    charge any<br />fees on purchase while you're <br />abroad.We'll
                                                    even show you...</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-3">
                                        <div className="article" data-aos="fade-up" data-aos-duration="3000">
                                            <img src="./IMAGES/curr4.jpg" alt="Error" className="blog-images" />
                                            <div className="content">
                                                <p>Piyush Grover</p>
                                                <h4>Our invite-only Beta<br />accounts are live now!</h4>
                                                <p className="blog-section-content-text">After a lot of hardwork by the<br />
                                                    whole team,we're excited to launch<br />
                                                    our closed beta.It's easy to request <br />an invite through the
                                                    site.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>

                    <div className="hbox">

                    <div class="row">
                        <div class="col-sm-4">
                            <div class="card" style={{textAlign:"center"}}>
                                <div class="card-body">
                                <LockOutlinedIcon color="primary" style={{fontSize:'60px',margin:"0px 0px"}}></LockOutlinedIcon>
                                    <h5 class="card-title">Manage your Pin</h5>
                                    <p class="card-text">Create, View or Change your PIN with a few simple steps</p>
                                    <NavLink to="/Signup_Signin"><Button size="large" className='lern' variant="contained">Login Now</Button></NavLink>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-4">
                            <div class="card" style={{textAlign:"center"}}>
                                <div class="card-body">
                                <PaymentOutlinedIcon color="primary" style={{fontSize:'60px',margin:"0px 0px"}}></PaymentOutlinedIcon>
                                    <h5 class="card-title">Replace your Card</h5>
                                    <p class="card-text">Request for a replacement Card in case your Card was lost, stolen, damaged.</p>
                                    <Button size="large" className='lern' variant="contained">Request for a replacement</Button>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-4">
                            <div class="card" style={{textAlign:"center"}}>
                                <div class="card-body">
                                    <SecurityOutlinedIcon color="primary" style={{fontSize:'60px',margin:"0px 0px"}}></SecurityOutlinedIcon>
                                    <h5 class="card-title">Learn about Card Security</h5>
                                    <p class="card-text">Our features and tips, all designed to help you stay safe.</p>
                                    <NavLink to="/About_us"><Button size="large" className='lern' variant="contained">Learn more</Button></NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                </div>
            </div>
            <Footer></Footer>
        </>
    )
}

export default Home
