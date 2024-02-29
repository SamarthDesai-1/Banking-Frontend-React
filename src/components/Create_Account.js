import React, { useState } from 'react'
import axios from 'axios';
import '../style-css/Create_Account.css'

import { useNavigate } from 'react-router-dom';

// validation 
import { useForm } from 'react-hook-form';
import joi from 'joi';
import { joiResolver } from '@hookform/resolvers/joi';
//loading bar
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';


const schema = joi.object({
    FirstName: joi.string().min(2).required(),
    LastName: joi.string().min(2).required(),
    // Photo: joi.string().required(),
    DOB: joi.date().iso().required(),
    AccountType: joi.string().required(),
    Mobile: joi.string().pattern(/^[0-9]{10}$/).required(),
    PanCard: joi.string().pattern(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/).required(),
    AadharCard: joi.string().pattern(/^[0-9]{12}$/).required(),
    Nominee: joi.string().min(2).required(),
    NomineeAadharCard: joi.string().pattern(/^[0-9]{12}$/).required(),
    Address: joi.string().min(10).required(),
    MonthlyIncome: joi.number().min(0).required()
});



function Create_Account() {

    const { register, handleSubmit, formState } = useForm({
        resolver: joiResolver(schema),
    });
    const errors = formState?.errors;

    const [FirstName, setFirstName] = useState("");
    const [LastName, setLastName] = useState("");
    let [Photo, setPhoto] = useState();
    const [DOB, setDOB] = useState("");
    const [AccountType, setAccountType] = useState("");
    const [Mobile, setMobile] = useState("");
    const [PanCard, setPanCard] = useState("");
    const [AadharCard, setAadharCard] = useState("");
    const [Nominee, setNominee] = useState("");
    const [NomineeAadharCard, setNomineeAadharCard] = useState("");
    const [Address, setAddress] = useState("");
    const [MonthlyIncome, setMonthlyIncome] = useState("");


    const [open, setOpen] = React.useState(false);


    const navigate = useNavigate();

    /** Test success */
    const CreateAccount = async (e) => {
        

        const sessionToken = JSON.parse(sessionStorage.getItem("Token"));
        const sessionEmail = JSON.parse(sessionStorage.getItem("Email"));

        console.log(FirstName);
        console.log(LastName);
        // console.log(Photo.name);
        console.log(DOB);
        console.log(AccountType);
        console.log(Mobile);
        console.log(PanCard);
        console.log(AadharCard);
        console.log(Nominee);
        console.log(NomineeAadharCard);
        console.log(Address);
        console.log(MonthlyIncome);
        console.log(sessionToken);
        console.log(sessionEmail);

        const formData = new FormData();
        formData.append('FirstName', FirstName);
        formData.append('LastName', LastName);
        formData.append('Photo', Photo);
        formData.append('DOB', DOB);
        formData.append('AccountType', AccountType);
        formData.append('Mobile', Mobile);
        formData.append('PanCard', PanCard);
        formData.append('AadharCard', AadharCard);
        formData.append('Nominee', Nominee);
        formData.append('NomineeAadharCard', NomineeAadharCard);
        formData.append('Address', Address);
        formData.append('MonthlyIncome', MonthlyIncome);
        formData.append('sessionToken', sessionToken);
        formData.append('sessionEmail', sessionEmail);
        const data = await axios.post('http://localhost:5000/test/api/users/open-account', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(async response => {
           setOpen(true)
            
            console.log("API  executed : ", response);
            if (response?.status === 200) {

                /* Redirect to Generate PIN page */
                navigate("/Generate_PIN");
            }
            else {
                console.log("Error regarding form");
            }
            setOpen(false)
            
        }).catch(e => {

            /** git push successfully */
            console.log("Fill form properly error from frontend : ", e);
            const error = e.response.data.msg;
            alert(error);
            
        });
        

        console.log(data);
    }


    return (
        <div className='Create_account mb-4 mt-4'>
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={open}
            // onClick={handleClose}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
            <form action="" onSubmit={handleSubmit(CreateAccount)}>
                <div style={{ paddingRight: "20px" }} className="rounded-lg border bg-card text-card-foreground shadow-sm w-full max-w-4xl" data-v0-t="card">
                    <div className="flex flex-col space-y-1.5 p-6">
                        <h2 className=" font-semibold whitespace-nowrap leading-none tracking-tight">Open a new account</h2>
                        <h4 className=" mt-3 text-sm text-muted-foreground">Enter your information to open a new account.</h4>
                    </div>
                    <div className="p-6 space-y-6">
                        <div className="grid grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                    for="first-name"
                                >
                                    First name
                                </label>
                                <input {...register('FirstName')} value={FirstName} onChange={(e) => setFirstName(e.target.value)}
                                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                    id="first-name"
                                    placeholder="Enter your first name"
                                />
                                {errors && errors.FirstName && <p style={{ marginBottom: "0rem" }} className='text-danger'>{errors.FirstName.message}</p>}
                            </div>
                            <div className="space-y-2">
                                <label
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                    for="last-name"
                                >
                                    Last name
                                </label>
                                <input {...register('LastName')} value={LastName} onChange={(e) => setLastName(e.target.value)}
                                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                    id="last-name"
                                    placeholder="Enter your last name"
                                />
                                {errors && errors.LastName && <p style={{ marginBottom: "0rem" }} className='text-danger'>{errors.LastName.message}</p>}
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                for="photo"
                            >
                                Photo
                            </label>
                            <input {...register('Photo')} onChange={(e) => setPhoto(e.target.files[0])}
                                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                id="photo"
                                accept="image/*"
                                type="file"
                            />
                            {/* {errors && errors.Photo && <p style={{marginBottom:"0rem"}} className='text-danger'>{errors.Photo.message}</p>} */}
                        </div>
                        <div className="grid grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                    for="dob"
                                >
                                    Date of Birth
                                </label>
                                <input
                                    {...register('DOB')} value={DOB} onChange={(e) => setDOB(e.target.value)}
                                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                    id="dob"
                                    type="date"
                                />
                                {errors && errors.DOB && <p style={{ marginBottom: "0rem" }} className='text-danger'>{errors.DOB.message}</p>}
                            </div>
                            <div className="space-y-2">
                                <label
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                    htmlFor="account-type" // Change 'for' to 'htmlFor'
                                >
                                    Account Type
                                </label>
                                <div className="relative"> {/* Wrap the button and select in a relative container */}

                                    <select {...register('AccountType')} value={AccountType} onChange={(e) => setAccountType(e.target.value)}
                                        style={{
                                            height: "2.5rem", backgroundColor: "#f3f4f6", border: "1px solid #e5e7eb",
                                            borderRadius: "0.5rem", marginTop: "8px"
                                        }}
                                        aria-hidden="true"
                                        tabIndex="-1"
                                        className=" absolute text-sm font-medium leading-none peer-disabled:cursor-not-allowed top-0 left-0 w-full h-full opacity-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2" // Move the select off-screen using CSS classes
                                        id="account-type"
                                    >
                                        <option value="">----- select -----</option>
                                        <option value="Saving Account">Saving Account</option>
                                        <option value="Current Account">Current Account</option>
                                        <option value="Recurring Deposit Account">Recurring Deposit Account</option>
                                        <option value="Fix Deposit Account">Fix Deposit Account</option>
                                    </select>
                                </div>
                                {errors && errors.AccountType && <p style={{ marginBottom: "0rem" }} className='text-danger'>{errors.AccountType.message}</p>}
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                    for="mobile"
                                >
                                    Mobile Number
                                </label>
                                <input {...register('Mobile')} value={Mobile} onChange={(e) => setMobile(e.target.value)}
                                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                    id="mobile"
                                    placeholder="Enter your mobile number"
                                    type="tel"
                                />
                                {errors && errors.Mobile && <p style={{ marginBottom: "0rem" }} className='text-danger'>{errors.Mobile.message}</p>}
                            </div>
                            <div className="space-y-2">
                                <label
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                    for="pancard"
                                >
                                    Pancard Number
                                </label>
                                <input
                                    {...register('PanCard')} value={PanCard} onChange={(e) => setPanCard(e.target.value)}
                                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                    id="pancard"
                                    placeholder="Enter your Pancard number"
                                />
                                {errors && errors.PanCard && <p style={{ marginBottom: "0rem" }} className='text-danger'>{errors.PanCard.message}</p>}
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                    for="adharcard"
                                >
                                    Adharcard Number
                                </label>
                                <input {...register('AadharCard')} value={AadharCard} onChange={(e) => setAadharCard(e.target.value)}
                                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                    id="adharcard"
                                    placeholder="Enter your Adharcard number"
                                />
                                {errors && errors.AadharCard && <p style={{ marginBottom: "0rem" }} className='text-danger'>{errors.AadharCard.message}</p>}
                            </div>
                            <div className="space-y-2">
                                <label
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                    for="nominee"
                                >
                                    Nominee
                                </label>
                                <input {...register('Nominee')} value={Nominee} onChange={(e) => setNominee(e.target.value)}
                                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                    id="nominee"
                                    placeholder="Enter your nominee"
                                />
                                {errors && errors.Nominee && <p style={{ marginBottom: "0rem" }} className='text-danger'>{errors.Nominee.message}</p>}
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                for="nominee-adharcard"
                            >
                                Nominee Adharcard Number
                            </label>
                            <input {...register('NomineeAadharCard')} value={NomineeAadharCard} onChange={(e) => setNomineeAadharCard(e.target.value)}
                                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                id="nominee-adharcard"
                                placeholder="Enter your nominee Adharcard number"
                            />
                            {errors && errors.NomineeAadharCard && <p style={{ marginBottom: "0rem" }} className='text-danger'>{errors.NomineeAadharCard.message}</p>}
                        </div>
                        <div className="space-y-2">
                            <label
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                for="address"
                            >
                                Address
                            </label>
                            <input {...register('Address')} value={Address} onChange={(e) => setAddress(e.target.value)}
                                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                id="address"
                                placeholder="Enter your address"
                            />
                            {errors && errors.Address && <p style={{ marginBottom: "0rem" }} className='text-danger'>{errors.Address.message}</p>}
                        </div>
                        <div className="space-y-2">
                            <label
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                for="income"
                            >
                                Monthly Income
                            </label>
                            <input {...register('MonthlyIncome')} value={MonthlyIncome} onChange={(e) => setMonthlyIncome(e.target.value)}
                                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                id="income"
                                placeholder="Enter your monthly income"
                            />
                            {errors && errors.MonthlyIncome && <p style={{ marginBottom: "0rem" }} className='text-danger'>{errors.MonthlyIncome.message}</p>}
                        </div>
                    </div>
                    <div className="items-center p-6 flex">
                        <input type="submit" value="Submit" className="mb-4 btn btn-primary px-3" />
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Create_Account
