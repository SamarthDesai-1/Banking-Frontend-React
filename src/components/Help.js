import React from 'react';
import '../style-css/Help.css';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import SecurityIcon from '@mui/icons-material/Security';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import { colors } from '@mui/material';
import Navbar from './Navbar';

// import Accordion from '@mui/material/Accordion';
// import AccordionSummary from '@mui/material/AccordionSummary';
// import AccordionDetails from '@mui/material/AccordionDetails';
// import Typography from '@mui/material/Typography';
// import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
// import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

function Help() {
    return (
        <div className='Help'>
            <Navbar></Navbar>
            <div className="container">

                <div className="box-section">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="image-container">
                                <img className="image-setting" src="https://kore-wordpress.s3.us-east-2.amazonaws.com/wp-content/uploads/2023/10/26214832/Kore_ai-BankAssist-Featured-Hero-Banner.png" alt="Error" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="side-text">
                                <h2 style={{ color: "#4895ef" }}>We are here to help you ?</h2>
                                <div className="conte">
                                    <p> we understand that your financial needs are as unique as you are. That's why we're dedicated to providing personalized banking solutions tailored to your specific goals and aspirations. Whether you're saving for the future, investing in your dreams, or simply managing your day-to-day finances, we're here to help you every step of the way.</p>

                                    <h3 style={{ color: "#4895ef" }}>Explore Our Services</h3>
                                    <p>Personal Banking: From checking and savings accounts to loans and credit cards, we offer a comprehensive range of personal banking solutions designed to meet your individual needs.</p>
                                    <p>Business Banking: Whether you're a small startup or a large corporation, our business banking services provide the tools and expertise you need to thrive in today's competitive marketplace.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <div className="middle-section"> */}
                    <div className="card-group">

                        <div className="card-1" data-aos="zoom-in">
                            <div className="icon-container" >
                                <CreditCardIcon style={{ fontSize: "40px" }} />
                                <p className='mt-2'>Block Debit Card</p>
                            </div>
                        </div>
                        <div className="card-1" data-aos="zoom-in">
                            <div className="icon-container">
                                <SecurityIcon style={{ fontSize: "40px" }} />
                                <p className='mt-2'>Security</p>
                            </div>
                        </div>
                        <div className="card-1" data-aos="zoom-in">
                            <div className="icon-container">
                                <MiscellaneousServicesIcon style={{ fontSize: "40px" }} />
                                <p className='mt-2'>Inqury Services</p>
                            </div>
                        </div>

                    </div>
                </div>

                <section class="w-full py-12 lg:py-16">
                    <div class="container px-4 md:px-6">
                        <div class="grid gap-12 lg:grid-cols-2 lg:gap-0 lg:grid-rows-2">
                            {/* <!-- Account Management Section --> */}
                            <div class="flex flex-col justify-center space-y-4">
                                <div class="space-y-2">
                                    <h3 class="text-2xl font-bold tracking-tighter sm:text-3xl">Account Management</h3>
                                    <p class="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                                        Learn how to manage your account, update your information, and access additional services.
                                    </p>
                                </div>
                                <div class="grid gap-2">
                                    {/* <!-- Account Management Links --> */}

                                    <div class="accordion">
                                        <input type="checkbox" id="accordion1" />
                                        <label class="accordion-title" for="accordion1">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2 inline-block h-4 w-4">
                                                <path d="m9 18 6-6-6-6"></path>
                                            </svg>
                                            How do I change my contact information?
                                        </label>
                                        <div class="accordion-content">

                                        </div>
                                    </div>
                                    <div class="accordion">
                                        <input type="checkbox" id="accordion1" />
                                        <label class="accordion-title" for="accordion1">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2 inline-block h-4 w-4">
                                                <path d="m9 18 6-6-6-6"></path>
                                            </svg>
                                            What services can I access through online banking?
                                        </label>
                                        <div class="accordion-content">

                                        </div>
                                    </div>
                                    <div class="accordion">
                                        <input type="checkbox" id="accordion1" />
                                        <label class="accordion-title" for="accordion1">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2 inline-block h-4 w-4">
                                                <path d="m9 18 6-6-6-6"></path>
                                            </svg>
                                            Why am I unable to view my account balance?
                                        </label>
                                        <div class="accordion-content">

                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* <!-- Transactions Section --> */}
                            <div class="flex flex-col justify-center space-y-4">
                                <div class="space-y-2">
                                    <h3 class="text-2xl font-bold tracking-tighter sm:text-3xl">Transactions</h3>
                                    <p class="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                                        Understand how transactions work, review your transaction history, and resolve issues.
                                    </p>
                                </div>
                                <div class="grid gap-2">
                                    {/* <!-- Transactions Links --> */}

                                    <div class="accordion">
                                        <input type="checkbox" id="accordion1" />
                                        <label class="accordion-title" for="accordion1">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2 inline-block h-4 w-4">
                                                <path d="m9 18 6-6-6-6"></path>
                                            </svg>
                                            How long does it take for a transaction to process?
                                        </label>
                                        <div class="accordion-content">

                                        </div>
                                    </div>
                                    <div class="accordion">
                                        <input type="checkbox" id="accordion1" />
                                        <label class="accordion-title" for="accordion1">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2 inline-block h-4 w-4">
                                                <path d="m9 18 6-6-6-6"></path>
                                            </svg>
                                            Can I cancel a transaction after it has been submitted?
                                        </label>
                                        <div class="accordion-content">

                                        </div>
                                    </div>
                                    <div class="accordion">
                                        <input type="checkbox" id="accordion1" />
                                        <label class="accordion-title" for="accordion1">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2 inline-block h-4 w-4">
                                                <path d="m9 18 6-6-6-6"></path>
                                            </svg>
                                            Why is a transaction showing as pending in my account?
                                        </label>
                                        <div class="accordion-content">

                                        </div>
                                    </div>

                                </div>
                            </div>

                            {/* <!-- Payments and Transfers Section --> */}
                            <div class="flex flex-col justify-center space-y-4">
                                <div class="space-y-2">
                                    <h3 class="text-2xl font-bold tracking-tighter sm:text-3xl">Payments and Transfers</h3>
                                    <p class="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                                        Get help with making payments, setting up transfers, and resolving issues with your transactions.
                                    </p>
                                </div>
                                <div class="grid gap-2">
                                    {/* <!-- Payments and Transfers Links --> */}

                                    <div class="accordion">
                                        <input type="checkbox" id="accordion1" />
                                        <label class="accordion-title" for="accordion1">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2 inline-block h-4 w-4">
                                                <path d="m9 18 6-6-6-6"></path>
                                            </svg>
                                            How do I add a new payee for bill payments?
                                        </label>
                                        <div class="accordion-content">

                                        </div>
                                    </div>
                                    <div class="accordion">
                                        <input type="checkbox" id="accordion1" />
                                        <label class="accordion-title" for="accordion1">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2 inline-block h-4 w-4">
                                                <path d="m9 18 6-6-6-6"></path>
                                            </svg>
                                            Why is my transfer to another account delayed?
                                        </label>
                                        <div class="accordion-content">

                                        </div>
                                    </div>
                                    <div class="accordion">
                                        <input type="checkbox" id="accordion1" />
                                        <label class="accordion-title" for="accordion1">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2 inline-block h-4 w-4">
                                                <path d="m9 18 6-6-6-6"></path>
                                            </svg>
                                            Can I schedule recurring payments for my bills?
                                        </label>
                                        <div class="accordion-content">

                                        </div>
                                    </div>

                                </div>
                            </div>


                            {/* <!-- Security Section --> */}
                            <div class="flex flex-col justify-center space-y-4">
                                <div class="space-y-2">
                                    <h3 class="text-2xl font-bold tracking-tighter sm:text-3xl">Security</h3>
                                    <p class="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                                        Learn how to protect your account, recognize potential security threats, and secure your online banking experience.
                                    </p>
                                </div>
                                <div class="grid gap-2">
                                    {/* <!-- Security Links --> */}
                                    <div class="accordion">
                                        <input type="checkbox" id="accordion1" />
                                        <label class="accordion-title" for="accordion1">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2 inline-block h-4 w-4">
                                                <path d="m9 18 6-6-6-6"></path>
                                            </svg>
                                            How can I create a strong password for my account?
                                        </label>
                                        <div class="accordion-content">

                                        </div>
                                    </div>
                                    <div class="accordion">
                                        <input type="checkbox" id="accordion1" />
                                        <label class="accordion-title" for="accordion1">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2 inline-block h-4 w-4">
                                                <path d="m9 18 6-6-6-6"></path>
                                            </svg>
                                            What should I do if I receive a suspicious email asking for my account information?
                                        </label>
                                        <div class="accordion-content">

                                        </div>
                                    </div>
                                    <div class="accordion">
                                        <input type="checkbox" id="accordion1" />
                                        <label class="accordion-title" for="accordion1">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2 inline-block h-4 w-4">
                                                <path d="m9 18 6-6-6-6"></path>
                                            </svg>
                                            Are my transactions and personal information secure when using online banking?
                                        </label>
                                        <div class="accordion-content">

                                        </div>
                                    </div>

                                </div>
                            </div>
                            {/* <!-- Mobile Banking Section --> */}
                            <div class="flex flex-col justify-center space-y-4">
                                <div class="space-y-2">
                                    <h3 class="text-2xl font-bold tracking-tighter sm:text-3xl">Mobile Banking</h3>
                                    <p class="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                                        Get the most out of your mobile banking app, troubleshoot common issues, and explore the features available on the go.
                                    </p>
                                </div>
                                <div class="grid gap-2">
                                    {/* <!-- Mobile Banking Links --> */}
                                    <div class="accordion">
                                        <input type="checkbox" id="accordion1" />
                                        <label class="accordion-title" for="accordion1">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2 inline-block h-4 w-4">
                                                <path d="m9 18 6-6-6-6"></path>
                                            </svg>
                                            How do I deposit a check using the mobile app?
                                        </label>
                                        <div class="accordion-content">

                                        </div>
                                    </div>
                                    <div class="accordion">
                                        <input type="checkbox" id="accordion1" />
                                        <label class="accordion-title" for="accordion1">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2 inline-block h-4 w-4">
                                                <path d="m9 18 6-6-6-6"></path>
                                            </svg>
                                            I can't log in to my mobile banking app. What should I do?
                                        </label>
                                        <div class="accordion-content">

                                        </div>
                                    </div>
                                    <div class="accordion">
                                        <input type="checkbox" id="accordion1" />
                                        <label class="accordion-title" for="accordion1">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2 inline-block h-4 w-4">
                                                <path d="m9 18 6-6-6-6"></path>
                                            </svg>
                                            Are all banking services available through the mobile app?
                                        </label>
                                        <div class="accordion-content">

                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        // </div>
    );
}

export default Help;