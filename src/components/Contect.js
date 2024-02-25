import React from 'react'
import '../style-css/Contec.css'
import MarkunreadOutlinedIcon from '@mui/icons-material/MarkunreadOutlined';
import PhoneInTalkOutlinedIcon from '@mui/icons-material/PhoneInTalkOutlined';
import Navbar from './Navbar';
import Footer from './Footer';
import { NavLink } from 'react-router-dom';

function Contect() {
    return (
        <>
            <Navbar></Navbar>
            <div className="Contect">
                <div className="image">
                    <img src="https://th.bing.com/th/id/OIP.PNH4TdpcQox9PgC47bjtvAHaDl?w=347&h=169&c=7&r=0&o=5&dpr=1.5&pid=1.7" className="card-img con-imag" alt="..." />
                    <div className="card-img-overlay" data-aos="zoom-in">
                        <b><h1 className="card-title text-center " style={{ color: "#4895ef" }}>Contect Information</h1></b>
                        <p className='text-dark' style={{ padding: "0px 200px", textAlign: "center" }}>Have questions or need assistance? Feel free to reach out to us! Our dedicated team is here to help you with any inquiries you may have.</p>

                        <b><p className=' text-center' style={{ color: "black" }}><NavLink style={{ color: "#4895ef" }} to="/" className='con-link' >Home  </NavLink> |  <NavLink to="/About_us" style={{ color: "#4895ef" }} className='con-link'>About us</NavLink></p></b>

                    </div>
                </div>

                <div className="poster mt-5">
                    <div className="row">
                        <div className="col-sm-4 mt-3">
                            <div className="box" data-aos="zoom-in">
                                <MarkunreadOutlinedIcon className='email-img'></MarkunreadOutlinedIcon>  <br />
                                <h3 className='mt-3'>Email</h3>
                                <p>info@gmail.com</p>
                                <p>support@gmail.com</p>
                            </div>
                            <div className="box mt-5" data-aos="zoom-in">
                                <PhoneInTalkOutlinedIcon className='email-img'></PhoneInTalkOutlinedIcon> <br />
                                <h3 className='mt-3'> Support Assistanse</h3>
                                <p className=''>(+456)785-785-900</p>
                                <p>(+90)240-240-240</p>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="form-container mt-4" data-aos="fade-up">
                                <h2 className='mt-3'>Send Messege</h2>
                                <p className='mt-2'>Feel free to contact me about anything related to Web Development.</p>
                                <form className="contact-form">
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <div className="input-area">
                                                <input type="text" placeholder="Your name" />
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="input-area">
                                                <input type="email" placeholder="Email address" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="input-area">
                                        <input type="number" maxLength={10} placeholder="Phone no" />
                                    </div>
                                    <div className="input-area">
                                        <input type="text" placeholder="Subject" />
                                    </div>
                                    <div className="input-area h-80">
                                        <textarea placeholder="Your message"></textarea>
                                    </div>
                                    <button className="sendbtn">Send</button>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>


                <div className="contect-map mt-5 p-3">
                    <div className="map text-center" data-aos="zoom-in">
                        <h2>Find Use On Google Map</h2>
                        <p className='mt-4' style={{ padding: "0px 250px" }}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam dolore quam aut vitae illo error vero nam, nihil molestiae cum?</p>
                        <div className="google-map mt-4">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d7379.837105704846!2d73.195158!3d22.356704!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjLCsDIxJzIwLjMiTiA3M8KwMTEnNTcuNiJF!5e0!3m2!1sen!2sus!4v1692552015244!5m2!1sen!2sus " width="800" height="300" style={{ border: "0px" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </div>



            </div>
            <Footer></Footer>
        </>
    )
}

export default Contect
