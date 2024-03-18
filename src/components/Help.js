import React from 'react';
import '../style-css/Help.css';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import SecurityIcon from '@mui/icons-material/Security';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import Navbar from './Navbar';
import Footer from './Footer';
import Tostyfy from './Tostyfy';

function Help() {
    return (
        <div className='Help'>
            {/* <Tostyfy></Tostyfy> */}
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

            <div className="help-services p-5">
                <div className="Transection">
                    <b><h3>Account Management</h3></b>
                    <p>By mastering the fundamentals of account management, you can take control of your finances and make the most of your banking relationship with Transect.</p>
                </div>
                <div class="accordion" id="accordionPanelsStayOpenExample">
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                                How do I change my contact information?
                            </button>
                        </h2>
                        <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingOne">
                            <div class="accordion-body">
                                Log into the relevant platform or service: This could be your email provider, social media accounts, online shopping websites, etc.
                                <br /><br />
                                Navigate to your account settings: Look for an option like "Account Settings," "Profile Settings," or "Account Info." This is usually found by clicking on your profile picture or name.
                                <br /><br />
                                Locate the contact information section: Once in your account settings, there should be a section specifically for contact information. It may include fields for your email address, phone number, mailing address, etc.
                                <br /><br />
                                Edit your contact details: Click on the option to edit your contact information. You'll typically be able to update your email address, phone number, and other relevant details in this section.
                                <br /><br />
                                Save your changes: After making the necessary updates, be sure to save your changes. This might involve clicking a "Save" button or confirming your changes before exiting the settings page.
                                <br /><br />
                                Verify changes if necessary: Some platforms might require you to verify changes to your contact information for security purposes. This could involve confirming a code sent to your updated email or phone number.
                                <br /><br />
                                Double-check your information: Before leaving the page, double-check that your new contact information is accurate. This will ensure that you don't encounter any issues with communication or account access in the future.
                                <br /><br />
                                Logout (if applicable): If you've made changes on a website or app where security is a concern, consider logging out and logging back in to ensure the changes have been properly saved.
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                                What services can I access through online banking?
                            </button>
                        </h2>
                        <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                            <div class="accordion-body">

                                Account Management:
                                <br />
                                Bill Payment:
                                <br />
                                Mobile Check Deposit:
                                <br />
                                Account Alerts:
                                <br />
                                Account Statements:
                                <br />
                                Money Transfers:
                                <br />
                                Mobile Wallet Integration:
                                <br />
                                Budgeting Tools:
                                <br />
                                Investment Management:
                                <br />
                                Customer Support:


                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="panelsStayOpen-headingThree1">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree1" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree1">
                                Why am I unable to view my account balance?
                            </button>
                        </h2>
                        <div id="panelsStayOpen-collapseThree1" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree1">
                            <div class="accordion-body">
                                Technical Glitch: Sometimes, online banking platforms experience technical issues that can affect access to account information. Try refreshing the page or logging out and logging back in to see if the problem resolves itself.
                                <br /><br />
                                Internet Connection: Ensure that you have a stable internet connection. If your connection is weak or intermittent, it could prevent you from accessing your account information.
                                <br /><br />
                                Browser Compatibility: Make sure you are using a compatible web browser and that it is up to date. Some online banking platforms may not function properly on outdated browsers or those with compatibility issues.
                            </div>
                        </div>
                    </div>
                </div>

                <div className="Transection">
                    <b><h3>Transactions</h3></b>
                    <p>By mastering the fundamentals of account management, you can take control of your finances and make the most of your banking relationship with Transect.</p>
                </div>
                <div class="accordion" id="accordionPanelsStayOpenExample">
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="panelsStayOpen-headingfor">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapsefor" aria-expanded="true" aria-controls="panelsStayOpen-collapsefor">
                                How long does it take for a transaction to process?
                            </button>
                        </h2>
                        <div id="panelsStayOpen-collapsefor" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingfor">
                            <div class="accordion-body">
                                Debit Card Transactions: When you make a purchase using your debit card, the transaction is usually processed instantly or within a few minutes. However, some merchants may batch their transactions and process them in bulk at the end of the day, which could delay the processing slightly.
                                <br /><br />
                                Credit Card Transactions: Credit card transactions typically appear on your account immediately after the purchase is authorized by the merchant. However, the transaction may not be fully processed until the end of the day or later, depending on the merchant's processing schedule and your credit card issuer's procedures.
                                <br /><br />
                                Bank Transfers: Transfers between accounts at the same bank (internal transfers) are usually processed instantly. Transfers between accounts at different banks (external transfers) may take 1-3 business days to complete, depending on the banks involved and whether they use the Automated Clearing House (ACH) network or other transfer methods.
                                <br /><br />
                                Checks: Depositing a paper check into your account can take several days to clear, especially if it's from another bank. The funds may be placed on hold until the check clears, which can take 1-5 business days or longer, depending on various factors such as the check amount, the issuing bank, and whether the check is local or out-of-state.
                                <br /><br />
                                Online Bill Payments: Payments made through online banking or bill pay services may take 1-3 business days to reach the payee, depending on the payment method (e.g., electronic transfer, paper check) and the recipient's payment processing time.

                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="panelsStayOpen-headingfive">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapsefive" aria-expanded="false" aria-controls="panelsStayOpen-collapsefive">
                                Can I cancel a transaction after it has been submitted?
                            </button>
                        </h2>
                        <div id="panelsStayOpen-collapsefive" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingfive">
                            <div class="accordion-body">
                                Whether or not you can cancel a transaction after it has been submitted depends on several factors, including the type of transaction, the policies of the financial institutions involved, and the timing of your request
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="panelsStayOpen-headingsix1">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapsesix1" aria-expanded="false" aria-controls="panelsStayOpen-collapsesix1">
                                Why is a transaction showing as pending in my account?
                            </button>
                        </h2>
                        <div id="panelsStayOpen-collapsesix1" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingsix1">
                            <div class="accordion-body">
                                Authorization: When you make a purchase with your debit or credit card, the merchant sends a request to your bank to authorize the transaction. The bank verifies that you have sufficient funds or available credit to complete the purchase and places a temporary hold on the funds. This creates a pending transaction until the purchase is finalized.
                                <br /><br />
                                Timing: Transactions may take time to process, especially if they occur outside of normal business hours or on weekends or holidays. For example, if you make a purchase late in the day, it may not be fully processed until the next business day, resulting in a pending status until then.
                                <br /><br />
                                Merchant Processing: Some merchants batch their transactions and process them in bulk at the end of the day. This means that even though you've made a purchase, it may take some time for the merchant to finalize the transaction and for it to reflect in your account.
                            </div>
                        </div>
                    </div>
                </div>

                <div className="Transection">
                    <b><h3>Payments and Transfers</h3></b>
                    <p>Get help with making payments, setting up transfers, and resolving issues with your transactions.</p>
                </div>
                <div class="accordion" id="accordionPanelsStayOpenExample">
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="panelsStayOpen-headingfor22">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapsefor22" aria-expanded="true" aria-controls="panelsStayOpen-collapsefor22">
                                How do I add a new payee for bill payments?
                            </button>
                        </h2>
                        <div id="panelsStayOpen-collapsefor22" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingfor22">
                            <div class="accordion-body">
                                Log in to Your Online Banking Account: Visit your bank's website and log in to your online banking account using your username and password.
                                <br /><br />
                                Navigate to the Bill Pay Section: Once logged in, find the section or tab for bill payments. This might be labeled as "Bill Pay," "Payments," or something similar. Click on it to access the bill payment features.
                                <br /><br />
                                Add a New Payee: Look for an option to add a new payee or biller. This could be labeled as "Add Payee," "Add Biller," "Manage Payees," or something similar. Click on this option to proceed.
                                <br /><br />
                                Verify Payee Information: Some banks may require you to verify the payee information to ensure it's correct. This could involve confirming details such as the payee's address or account number.
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="panelsStayOpen-headingfive33">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapsefive33" aria-expanded="false" aria-controls="panelsStayOpen-collapsefive33">
                                Why is my transfer to another account delayed?
                            </button>
                        </h2>
                        <div id="panelsStayOpen-collapsefive33" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingfive33">
                            <div class="accordion-body">
                                Weekends and Holidays: Banks typically do not process transactions on weekends or holidays. If you initiated the transfer on a non-business day, it may not be processed until the next business day, causing a delay.
                                <br /><br />
                                Cut-Off Times: Banks have specific cut-off times for processing transactions each business day. If you initiated the transfer after the cut-off time, it may not be processed until the following business day, leading to a delay.
                                <br /><br />
                                Bank Processing Times: Even within the same bank, transfers between accounts may take time to process, especially if they involve different types of accounts (e.g., transferring funds from a savings account to a checking account). Some banks have internal processing times that can cause delays.
                                <br /><br />
                                Verification and Security Checks: For security reasons, banks may conduct verification checks on certain transactions, especially large or unusual transfers. These checks can cause delays as the bank verifies the legitimacy of the transfer.
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="panelsStayOpen-headingsix14">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapsesix14" aria-expanded="false" aria-controls="panelsStayOpen-collapsesix14">
                                Can I schedule recurring payments for my bills?
                            </button>
                        </h2>
                        <div id="panelsStayOpen-collapsesix14" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingsix14">
                            <div class="accordion-body">
                                Log in to Your Online Banking Account: Visit your bank's website and log in to your online banking account using your username and password.
                                <br /><br />
                                Navigate to the Bill Pay Section: Once logged in, find the section or tab for bill payments. This might be labeled as "Bill Pay," "Payments," or something similar. Click on it to access the bill payment features.
                                <br /><br />
                                Select the Payee: Choose the payee or biller for the bill you want to schedule a recurring payment for. If you haven't added the payee yet, you may need to do so by entering their information.
                                <br /><br />
                                Schedule Payment: Look for an option to schedule a payment and choose the frequency (e.g., weekly, bi-weekly, monthly) and start date for the recurring payments. You may also be able to specify an end date if you only want the payments to occur for a limited time.
                                <br /><br />
                                Enter Payment Details: Enter the payment amount and any other necessary details for the recurring payment. Double-check the information to ensure accuracy.
                                <br /><br />
                                Confirmation: After scheduling the recurring payments, you should receive a confirmation message or email confirming the setup. Keep this for your records.
                            </div>
                        </div>
                    </div>
                </div>


                <div className="Transection">
                    <b><h3>Mobile Banking</h3></b>
                    <p>Get the most out of your mobile banking app, troubleshoot common issues, and explore the features available on the go.</p>
                </div>
                <div class="accordion" id="accordionPanelsStayOpenExample">
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="panelsStayOpen-headingfor221">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapsefor221" aria-expanded="true" aria-controls="panelsStayOpen-collapsefor221">
                                How do I deposit a check using the mobile app?
                            </button>
                        </h2>
                        <div id="panelsStayOpen-collapsefor221" class="accordion-collapse collapse " aria-labelledby="panelsStayOpen-headingfor221">
                            <div class="accordion-body">
                                Log in to Your Mobile Banking App: Open your bank's mobile banking app on your smartphone or tablet. Enter your username and password to log in to your account.
                                <br />
                                <br />
                                Access the Mobile Check Deposit Feature: Look for the option to deposit a check using the mobile app. This feature may be labeled as "Mobile Check Deposit," "Deposit Checks," or something similar. It's usually found in the main menu or navigation bar of the app.
                                <br /><br />
                                Select the Account: Choose the account where you want to deposit the check. This could be your checking account, savings account, or another eligible account.
                                <br /><br />
                                Enter Check Amount: Enter the amount of the check you're depositing. Make sure to double-check the amount to ensure accuracy.
                                <br /><br />
                                Endorse the Check: Flip the check over and endorse it by signing your name on the back. Some banks may require you to include additional information, such as "For Mobile Deposit Only" and your account number.
                                <br />
                                <br />
                                Capture Images of the Check: Use your smartphone or tablet's camera to capture images of the front and back of the check. Make sure the images are clear and include all four corners of the check. Follow the on-screen instructions to take the photos.
                                <br /><br />
                                Confirm Deposit: Once you're satisfied with the check images, confirm the deposit to submit it to your bank for processing. Some banks may require you to review and accept terms and conditions before finalizing the deposit.
                                <br />
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="panelsStayOpen-headingfive331">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapsefive331" aria-expanded="false" aria-controls="panelsStayOpen-collapsefive331">
                                I can't log in to my mobile banking app. What should I do?
                            </button>
                        </h2>
                        <div id="panelsStayOpen-collapsefive331" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingfive331">
                            <div class="accordion-body">
                                Check Your Username and Password: Ensure that you're entering the correct username and password for your mobile banking account. Double-check for any typos or errors.
                                <br />
                                <br />
                                Reset Your Password: If you're unable to remember your password or suspect it may be incorrect, use the "Forgot Password" or "Reset Password" option on the login screen of the mobile banking app. Follow the instructions to reset your password.
                                <br /><br />
                                Verify Your Access: Make sure you have access to the correct mobile banking app associated with your bank or financial institution. If you've recently updated your device or downloaded a new app, ensure that you're using the official app provided by your bank.
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="panelsStayOpen-headingsix141">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapsesix141" aria-expanded="false" aria-controls="panelsStayOpen-collapsesix141">
                                Are all banking services available through the mobile app?
                            </button>
                        </h2>
                        <div id="panelsStayOpen-collapsesix141" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingsix141">
                            <div class="accordion-body">
                                ccount Management: View account balances, transaction history, and account details for various accounts (e.g., checking, savings, credit cards, loans).
                                <br /><br />
                                Transfers: Transfer funds between your own accounts or to other accounts within the same bank (internal transfers) or at different financial institutions (external transfers).
                                <br /><br />
                                Bill Payment: Pay bills to companies or individuals electronically, schedule recurring payments, and manage payees.
                                <br /><br />
                                Mobile Check Deposit: Deposit checks by taking photos with your mobile device and submitting them through the app for processing.
                                <br /><br />
                                ATM/Branch Locator: Locate nearby ATMs and branches of your bank for cash withdrawals, deposits, or in-person assistance.
                                <br /><br />
                                Alerts and Notifications: Set up account alerts for various activities such as low balances, large transactions, upcoming bill payments, or account activity.
                                <br /><br />
                                Account Security: Manage security features such as password changes, biometric authentication (e.g., fingerprint or facial recognition), and device authorization.
                            </div>
                        </div>
                    </div>
                </div>

                <div className="Transection">
                    <b><h3>Security</h3></b>
                    <p> Learn how to protect your account, recognize potential security threats, and secure your online banking experience.</p>
                </div>
                <div class="accordion" id="accordionPanelsStayOpenExample">
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="panelsStayOpen-headingfor220">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapsefor220" aria-expanded="true" aria-controls="panelsStayOpen-collapsefor220">
                                How can I create a strong password for my account?
                            </button>
                        </h2>
                        <div id="panelsStayOpen-collapsefor220" class="accordion-collapse collapse " aria-labelledby="panelsStayOpen-headingfor220">
                            <div class="accordion-body">
                                Length: Aim for a password that is at least 12 characters long. Longer passwords are generally more secure because they are harder for attackers to guess or crack.
                                <br /><br />
                                Complexity: Include a mix of uppercase letters, lowercase letters, numbers, and special characters (such as !, @, #, $, %, etc.) in your password. This increases the complexity of the password and makes it more difficult to guess.
                                <br /><br />
                                Avoid Common Patterns: Avoid using common words, phrases, or patterns in your password, such as "password," "123456," "qwerty," or sequential keyboard patterns like "asdfgh."
                                <br /><br />
                                Randomness: Generate a random password using a combination of letters, numbers, and special characters. Avoid using easily guessable information such as your name, birthdate, or other personal details.
                                <br /><br />
                                Passphrase: Consider using a passphrase instead of a single-word password. A passphrase is a combination of multiple words or a sentence that is easy for you to remember but difficult for others to guess. For example, "PurpleElephant$123Jump!"
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="panelsStayOpen-headingfive330">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapsefive330" aria-expanded="false" aria-controls="panelsStayOpen-collapsefive330">
                                What should I do if I receive a suspicious email asking for my account information?
                            </button>
                        </h2>
                        <div id="panelsStayOpen-collapsefive330" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingfive330">
                            <div class="accordion-body">
                                Do Not Click on Links or Download Attachments: Avoid clicking on any links or downloading attachments in the suspicious email. These links or attachments may contain malware or lead to phishing websites designed to steal your personal information.
                                <br />
                                <br />
                                Do Not Respond or Provide Personal Information: Do not reply to the email or provide any personal or sensitive information, such as your username, password, account numbers, Social Security number, or financial information.
                                <br /><br />
                                Verify the Sender: Check the sender's email address to see if it matches the official email address of the organization or company claiming to send the email. Be cautious of email addresses that appear suspicious or unfamiliar.
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="panelsStayOpen-headingsix140">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapsesix140" aria-expanded="false" aria-controls="panelsStayOpen-collapsesix140">
                                Are my transactions and personal information secure when using online banking?
                            </button>
                        </h2>
                        <div id="panelsStayOpen-collapsesix140" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingsix140">
                            <div class="accordion-body">
                                Encryption: Online banking websites and mobile apps use encryption technology to secure data transmitted between your device and the bank's servers. This helps protect your sensitive information, such as login credentials, account numbers, and transaction details, from being intercepted by hackers.
                                <br /><br />
                                Secure Authentication: Banks often require strong authentication methods to verify your identity when logging in to your online banking account. This may include using a combination of passwords, PINs, security questions, biometric authentication (e.g., fingerprint or facial recognition), or one-time passcodes sent to your registered mobile device.
                                <br /><br />
                                Firewalls and Intrusion Detection Systems: Banks employ firewalls and intrusion detection systems to monitor and control network traffic, detect suspicious activities, and prevent unauthorized access to their systems.
                            </div>
                        </div>
                    </div>
                </div>


            </div>
            <Footer></Footer>
        </div>

    );
}

export default Help;