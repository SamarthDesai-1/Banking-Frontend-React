import React from 'react'
import '../style-css/About_us.css'
import Navbar from './Navbar'
import Footer from './Footer'
import Tostyfy from './Tostyfy'

function About_us() {
    return (
        <>
        {/* <Tostyfy></Tostyfy> */}
            <Navbar></Navbar>
            <div className='About'>
                <div className="container-spec">
                    <div className="body-container">
                        <div className="left-part">

                            <h1 className="title-company">About Bank</h1>
                            <p className="text">Financial institutions play a critical role in the global economy, serving as the backbone of
                                monetary transactions, investment activities, and wealth management. These institutions encompass a wide range
                                of entities, including banks, credit unions, insurance companies, investment firms, and brokerage houses.
                                Their primary function is to facilitate the flow of capital within the economy by providing various financial
                                services to individuals, businesses, and governments. Banks, for instance, offer savings and checking <br /><br />
                                accounts, loans, mortgages, and other essential banking services, while investment firms help clients invest
                                in stocks, bonds, mutual funds, and other financial instruments. Insurance companies protect against risks by
                                offering various types of insurance policies, such as life, health, property, and casualty insurance. Overall,
                                financial institutions play a pivotal role in allocating capital efficiently, managing risks, and fostering
                                economic growth and stability.
                            </p>
                        </div>
                        <div className="right-part" data-aos="zoom-in">
                            <img className="image-format" src="./IMAGES/img4.png" alt="Error" />
                        </div>
                    </div>

                    <div className="cards-section">
                        <div className="text-cards-section">

                            <div className="title">
                                <h1 className="cards-section-title">Bank unique factor</h1>
                                <div className="bod"></div>
                            </div>


                            <div className="cards-group">
                                <div className="card-1" data-aos="zoom-in">
                                    <div className="circle">
                                        <svg className="icons" xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 448 512">
                                            <path
                                                d="M257.2 162.7c-48.7 1.8-169.5 15.5-169.5 117.5 0 109.5 138.3 114 183.5 43.2 6.5 10.2 35.4 37.5 45.3 46.8l56.8-56S341 288.9 341 261.4V114.3C341 89 316.5 32 228.7 32 140.7 32 94 87 94 136.3l73.5 6.8c16.3-49.5 54.2-49.5 54.2-49.5 40.7-.1 35.5 29.8 35.5 69.1zm0 86.8c0 80-84.2 68-84.2 17.2 0-47.2 50.5-56.7 84.2-57.8v40.6zm136 163.5c-7.7 10-70 67-174.5 67S34.2 408.5 9.7 379c-6.8-7.7 1-11.3 5.5-8.3C88.5 415.2 203 488.5 387.7 401c7.5-3.7 13.3 2 5.5 12zm39.8 2.2c-6.5 15.8-16 26.8-21.2 31-5.5 4.5-9.5 2.7-6.5-3.8s19.3-46.5 12.7-55c-6.5-8.3-37-4.3-48-3.2-10.8 1-13 2-14-.3-2.3-5.7 21.7-15.5 37.5-17.5 15.7-1.8 41-.8 46 5.7 3.7 5.1 0 27.1-6.5 43.1z" />
                                        </svg>
                                    </div>
                                    <div className="unique-factor">
                                        <p>Fast Transaction</p>
                                    </div>
                                </div>
                                <div className="card-1" data-aos="zoom-in">
                                    <div className="circle">
                                        <svg className="icons" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                            <path
                                                d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
                                        </svg>
                                    </div>
                                    <div className="unique-factor">
                                        <p>Easy tranfer</p>
                                    </div>
                                </div>
                                <div className="card-1" data-aos="zoom-in">
                                    <div className="circle">
                                        <svg className="icons" xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 448 512">
                                            <path
                                                d="M0 32h214.6v214.6H0V32zm233.4 0H448v214.6H233.4V32zM0 265.4h214.6V480H0V265.4zm233.4 0H448V480H233.4V265.4z" />
                                        </svg>
                                    </div>
                                    <div className="unique-factor">
                                        <p>Data Privacy</p>
                                    </div>
                                </div>
                                <div className="card-1" data-aos="zoom-in">
                                    <div className="circle">
                                        <svg className="icons" xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 384 512">
                                            <path
                                                d="M111.4 295.9c-3.5 19.2-17.4 108.7-21.5 134-.3 1.8-1 2.5-3 2.5H12.3c-7.6 0-13.1-6.6-12.1-13.9L58.8 46.6c1.5-9.6 10.1-16.9 20-16.9 152.3 0 165.1-3.7 204 11.4 60.1 23.3 65.6 79.5 44 140.3-21.5 62.6-72.5 89.5-140.1 90.3-43.4.7-69.5-7-75.3 24.2zM357.1 152c-1.8-1.3-2.5-1.8-3 1.3-2 11.4-5.1 22.5-8.8 33.6-39.9 113.8-150.5 103.9-204.5 103.9-6.1 0-10.1 3.3-10.9 9.4-22.6 140.4-27.1 169.7-27.1 169.7-1 7.1 3.5 12.9 10.6 12.9h63.5c8.6 0 15.7-6.3 17.4-14.9.7-5.4-1.1 6.1 14.4-91.3 4.6-22 14.3-19.7 29.3-19.7 71 0 126.4-28.8 142.9-112.3 6.5-34.8 4.6-71.4-23.8-92.6z" />
                                        </svg>
                                    </div>
                                    <div className="unique-factor">
                                        <p>Authentication</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="info-section">
                        <div className="row">

                            <div className="col-md-6" >

                                <div className="image-section" data-aos="fade-up">
                                    <img className="image-custom" src="./IMAGES/img6.jpg" alt="Error" />
                                </div>
                            </div>
                            <div className="col-md-6" >

                                <div className="data-statistics" >

                                    <h1 className="data-statistics-text" style={{zIndex:"1"}}>Most trusted financial bank</h1>

                                    <div className="upper-container">
                                        <div className="container-1" data-aos="zoom-in">
                                            <h1 className="custom-font">850M+ <br /> Accounts</h1>
                                        </div>
                                        <div className="container-2" data-aos="zoom-in">
                                            <h1 className="custom-font">500M <br /> active users</h1>
                                        </div>
                                    </div>

                                    <div className="container-3" data-aos="zoom-in">
                                        <h1 className="custom-font">2 lakh transaction daily</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="info-section-2">

                        <div className="info-section-2-left-part">
                            <h1 className="info-section-2-font text-dark" data-aos="fade-up">Security and Complinace</h1>
                            <ul className="list" data-aos="fade-up">
                                <li>
                                    <h2 className="bullets">Convenience and customer expectations</h2>
                                    The banking industry has made strides moving from a traditional brick-and-mortar model to align with today’s
                                    convenience and functional expectations. However, technology and customer <br /> sentiment are moving faster
                                    than
                                    government regulatory oversight of the expanding set of digital features, so banks face a challenge to adapt
                                    to customer demand while still adhering to regulations that are slow to change. Additionally, new players in
                                    financial services are moving quickly to fill any void, challenging established firms to remain competitive.
                                </li>
                            </ul>
                        </div>

                        <div className="info-section-2-left-part">
                            <ul className="list" data-aos="fade-up">
                                <li>
                                    <h2 className="bullets" >Data protection</h2>
                                    Data fraud and breaches are always risks when digital information becomes more convenient to access. Data is
                                    transmitted over many points before it reaches its final destination—and each point presents a potential
                                    security risk. Mobile applications are especially easy targets. The app itself and the server it sits on may
                                    have vulnerabilities that can be exploited. User behavior can also contribute to the risk.
                                    <br />
                                    Government regulations, such as the General Data Protection Regulation (GDPR) in the European Union (EU)
                                    attempt to address many of these points of vulnerability, even as data is transmitted across international
                                    borders.
                                </li>
                            </ul>
                        </div>

                        <div className="info-section-2-left-part">
                            <ul className="list" data-aos="fade-up">
                                <li>
                                    <h2 className="bullets">Institutional mindset</h2>
                                    Changing the mindset of the financial services industry presents additional challenges. The financial sector
                                    is cautious about changing from a business model that works reliably to one that, in its point of view,
                                    poses risks. <br /> The rush to offer consumers more convenience without addressing security risks can have
                                    disastrous consequences, but if security processes make the user experience more difficult, customers will
                                    look for easier ways to accomplish their tasks. Maintaining this delicate balance is a daunting challenge
                                    for even the most innovative and forward-thinking companies.
                                </li>
                            </ul>
                        </div>


                    </div>

                </div>
                <Footer></Footer>
            </div>
        </>
    )
}

export default About_us
