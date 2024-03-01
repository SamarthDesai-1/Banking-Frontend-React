import React, { useState, useRef } from 'react'
import axios from 'axios';
import '../style-css/Create_Account.css'

import { useNavigate } from 'react-router-dom';

// validation 
import { useForm } from 'react-hook-form';
import Joi from 'joi';
import { joiResolver } from '@hookform/resolvers/joi';
//loading bar
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';



const Create_Account = () => {

    const [open, setOpen] = useState(false);
    const navigate = useNavigate();
    const PhototRef = useRef();
    
    // State to hold form data
    const [formData, setFormData] = useState({
      FirstName: '',
      LastName: '',
      Photo: null,
      DOB: '',
      AccountType: '',
      Mobile: '',
      PanCard: '',
      AadharCard: '',
      Nominee: '',
      NomineeAadharCard: '',
      Address: '',
      MonthlyIncome: '',
    });
  
    // State to hold validation errors
    const [errors, setErrors] = useState({});
  
  
    // Validation schema using Joi
    const schema = Joi.object({
      FirstName: Joi.string().required().label('First Name'),
      LastName: Joi.string().required().label('Last Name'),
      DOB: Joi.date().iso().required().label('Date of birth'),
      AccountType: Joi.string().required().label('AccountType'),
      Mobile: Joi.string().pattern(/^[0-9]{10}$/).required().label('Mobile'),
      PanCard: Joi.string().pattern(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/).required().label('PanCard'),
      AadharCard: Joi.string().pattern(/^[0-9]{12}$/).required().label('AadharCard'),
      Nominee: Joi.string().min(2).required().label('Nominee'),
      NomineeAadharCard: Joi.string().pattern(/^[0-9]{12}$/).required().label('NomineeAadharCard'),
      Address: Joi.string().min(10).required().label('Address'),
      MonthlyIncome: Joi.number().min(0).required().label('Monthly Income')
    });
  
    // Handle form input changes
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
    // Handle photo upload
    const handlePhotoUpload = (e) => {
      console.log("Files : ", e.target.files);
      const file = e.target.files;
      console.log(file.name);
      setFormData({ ...formData, Photo: file });
    };
  
    // Handle form submission
    const handleSubmit = async (e) => {
      e.preventDefault();
      console.log("userRef data : ", PhototRef.current.files[0]);
  
      // Validate form data
  
      const { Photo, ...formDataWithoutPhoto } = formData; // Extract Photo from formData
  
      const { error } = schema.validate(formDataWithoutPhoto, { abortEarly: false });
      if (error) {
        console.log("Error : ", error);
        const validationErrors = {};
        error.details.forEach((err) => {
          validationErrors[err.context.key] = err.message;
        });
        setErrors(validationErrors);
        return;
      }
  
      // If form data is valid, proceed to API call
      try {
  
        console.log("API execute successfully");
        console.log("Form Data : ", formData);
  
        const sessionToken = JSON.parse(sessionStorage.getItem("Token"));
        const sessionEmail = JSON.parse(sessionStorage.getItem("Email"));
  
        console.log(sessionEmail);
        const formDataToSend = new FormData();
      
        console.log(PhototRef.current.files[0]);
        formDataToSend.append("FirstName",formData.FirstName);
        formDataToSend.append("LastName",formData.LastName);
        formDataToSend.append('Photo',PhototRef.current.files[0]);
        formDataToSend.append('DOB',formData.DOB);
        formDataToSend.append('AccountType',formData.AccountType);
        formDataToSend.append('Mobile',formData.Mobile);
        formDataToSend.append('PanCard',formData.PanCard);
        formDataToSend.append('AadharCard',formData.AadharCard);
        formDataToSend.append('Nominee',formData.Nominee);
        formDataToSend.append('NomineeAadharCard',formData.NomineeAadharCard);
        formDataToSend.append('Address',formData.Address);
        formDataToSend.append('MonthlyIncome',formData.MonthlyIncome);
        formDataToSend.append('sessionToken',sessionToken);
        formDataToSend.append('sessionEmail',sessionEmail);
        
        console.log("Form Data to send : ", formDataToSend);
  
        const response = await axios.post('http://localhost:5000/test/api/users/open-account', formDataToSend, {
          method: 'POST',
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }).then(response => {
          if (response?.status === 200) {
            // Handle successful API call
            console.log('Data inserted successfully.');
            navigate("/Generate_PIN");
          } 
          
        }).catch(e => {
          console.error('Failed to insert data OR may be user enter duplicate data.');
          alert("Please enter non-duplicate data")
        })
      } 
      catch (error) {
        console.error('Error:', error);
      }
    };


    return (
        <div className='Create_account mb-4 mt-4'>
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={open}
            // onClick={handleClose}
            >
                <CircularProgress color="inherit" />
            </Backdrop>

            <form onSubmit={handleSubmit}>

               <div style={{ paddingRight: "20px" }} className="rounded-lg border bg-card text-card-foreground shadow-sm w-full max-w-4xl"              data-v0-t="card">
                    <div className="flex flex-col space-y-1.5 p-6">
                        <h2 className=" font-semibold whitespace-nowrap leading-none tracking-tight">Open a new account</h2>
                        <h4 className=" mt-3 text-sm text-muted-foreground">Enter your information to open a new account.</h4>
                    </div>

                <div className="p-6 space-y-6">

                    <div className="grid grid-cols-2 gap-6">
                        <div className="space-y-2">
                                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="FirstName"
                                > First name </label>
                            <input type="text" id="FirstName" name="FirstName" value={formData.FirstName} onChange={handleInputChange}   className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" placeholder="Enter your first name" />
                            {errors.FirstName && <div style={{ marginBottom: "0rem" }} className='text-danger error'>{errors.FirstName}</div>}
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="LastName">Last Name</label>
                            <input type="text" id="LastName" name="LastName" value={formData.LastName} onChange={handleInputChange}  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            placeholder="Enter your last name" />
                            {errors.LastName && <div style={{ marginBottom: "0rem" }} className='text-danger error'>{errors.LastName}</div>}
                        </div>


                    </div>

                    <div className="space-y-2">
                        <label htmlFor="Photo" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >Photo</label>
                        <input type="file" id="Photo" name="Photo" ref={PhototRef} onChange={handlePhotoUpload}  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        accept="image/*"/>
                    </div>

                    <div className="grid grid-cols-2 gap-6">

                        <div className="space-y-2">
                            <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            htmlFor="DOB">Date</label>
                            <input type="date" id="DOB" name="DOB" onChange={handleInputChange}  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"/>
                            {errors.DOB && <div style={{ marginBottom: "0rem" }} className='text-danger error'>{errors.DOB}</div>}
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            htmlFor="AccountType">Account Type</label>
                            <div className="relative">
                                <select id="AccountType" name="AccountType" onChange={(e) => handleInputChange(e)} style={{
                                        height: "2.5rem", backgroundColor: "#f3f4f6", border: "1px solid #e5e7eb",
                                        borderRadius: "0.5rem", marginTop: "8px"
                                    }}
                                    aria-hidden="true"
                                    tabIndex="-1"
                                    className=" absolute text-sm font-medium leading-none peer-disabled:cursor-not-allowed top-0 left-0 w-full h-full opacity-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2" // Move the select off-screen using CSS classes
                                    >
                                    <option value="">----- select -----</option>
                                    <option value="Saving Account">Saving Account</option>
                                    <option value="Current Account">Current Account</option>
                                    <option value="Recurring Deposit Account">Recurring Deposit Account</option>
                                    <option value="Fix Deposit Account">Fix Deposit Account</option>
                                </select>
                                {errors.AccountType && <div style={{ marginBottom: "0rem" }} className='text-danger error'>{errors.AccountType}</div>}
                            </div>
                        </div>

                    </div>

                    <div className="grid grid-cols-2 gap-6">
                         
                        <div>
                            <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            htmlFor="Mobile">Mobile</label>
                            <input type="text" id="Mobile" name="Mobile" onChange={handleInputChange}  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            placeholder="Enter your mobile number"
                            />
                            {errors.Mobile && <div style={{ marginBottom: "0rem" }} className='text-danger error'>{errors.Mobile}</div>}
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            htmlFor="PanCard">Pan Card</label>
                            <input type="text" id="PanCard" name="PanCard" value={formData.PanCard} onChange={handleInputChange} className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            placeholder="Enter your Pancard number" />

                            {errors.PanCard && <div style={{ marginBottom: "0rem" }} className='text-danger error'>{errors.PanCard}</div>}
                        </div>
                    </div>

                </div>

                <div className="grid grid-cols-2 gap-6">

                  <div className="space-y-2">
                    <label  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="AadharCard">Aadhar Card</label>
                    <input type="text" id="AadharCard" name="AadharCard" value={formData.AadharCard} onChange={handleInputChange}  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Enter your Adharcard number" />
                    {errors.AadharCard && <div style={{ marginBottom: "0rem" }} className='text-danger error'>{errors.AadharCard}</div>}
                  </div>

                  <div  className="space-y-2">
                    <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="Nominee">Nominee</label>
                    <input type="text" id="Nominee" name="Nominee" value={formData.Nominee} onChange={handleInputChange}   className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Enter your nominee" />
                    {errors.Nominee && <div style={{ marginBottom: "0rem" }} className='text-danger error'>{errors.Nominee}</div>}
                  </div>

                </div>

                 <div className="space-y-2">
                   <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="NomineeAadharCard">Nominee Aadhar Card</label>
                   <input type="text" id="NomineeAadharCard" name="NomineeAadharCard" value={formData.NomineeAadharCard} onChange={handleInputChange}   className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                   placeholder="Enter your nominee Adharcard number" />
                   {errors.NomineeAadharCard && <div style={{ marginBottom: "0rem" }} className='text-danger error'>{errors.NomineeAadharCard}</div>}
                 </div>

                 <div className="space-y-2">
                   <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="Address">Address</label>
                   <input type="text" id="Address" name="Address" value={formData.Address} onChange={handleInputChange}  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                   placeholder="Enter your address" />
                   {errors.Address && <div style={{ marginBottom: "0rem" }} className='text-danger error'>{errors.Address}</div>}
                 </div>

                 <div className="space-y-2">
                   <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="MonthlyIncome">Monthly Income</label>
                   <input type="number" id="MonthlyIncome" name="MonthlyIncome" value={formData.MonthlyIncome} onChange={handleInputChange} className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                   placeholder="Enter your monthly income" />
                   {errors.MonthlyIncome && <div cstyle={{ marginBottom: "0rem" }} className='text-danger error'>{errors.MonthlyIncome}</div>}
                 </div>

                 <button type="submit" className='btn btn-primary px-3 mb-4'>Create Account</button>
               </div>

            </form>
        </div>
    )
}

export default Create_Account;
