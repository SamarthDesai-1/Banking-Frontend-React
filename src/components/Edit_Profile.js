// import React from 'react';
import '../style-css/Create_Account.css';
import { useNavigate } from 'react-router-dom';
import React, { useState, useRef, useEffect } from 'react'
import axios from 'axios';

// validation 
import { useForm } from 'react-hook-form';
import Joi from 'joi';
import { joiResolver } from '@hookform/resolvers/joi';
//loading bar
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { toast } from 'react-toastify';
import Tostyfy from './Tostyfy';

function Edit_Profile() {

  const [open, setOpen] = useState(false);

  const [data, setData] = useState({
    FirstName: '',
    LastName: '',
    DOB: '',
    Mobile: '',
    PanCard: '',
    AadharCard: '',
    Nominee: '',
    NomineeAadharCard: '',
    Address: '',
    MonthlyIncome: '',
  });

  useEffect(() => {
    /** Fetch data from Account open database */

    const fetchData = async () => {

      const sessionToken = JSON.parse(sessionStorage.getItem("Token"));
      const sessionEmail = JSON.parse(sessionStorage.getItem("Email"));

      console.log("Session Token : ", sessionToken);

      try {
        setOpen(true)
        console.log("API execute soon");
        const response = await axios.post("http://localhost:5000/test/api/users/fetch-account-details", { sessionEmail, sessionToken }, {
          headers: {
            'Content-Type': 'application/json',
          }
        });
        console.log("API execute successfully");
        console.log(response);
        console.log(response.data.Data);
        setData(response.data.Data[0]);
        
      }
      catch (error) {
        console.log("Error : ", error);
      }
      setOpen(false)
    };

    fetchData();
  }, []);

  const handlePhotoUpload = (e) => {
    console.log("Files : ", e.target.files);
    const file = e.target.files;
    console.log(file.name);
    setFormData({ ...formData, Photo: file });
  };

  
  const navigate = useNavigate();
  const PhototRef = useRef();

  // State to hold form data
  const [formData, setFormData] = useState({
    FirstName: '',
    LastName: '',
    Photo: null,
    DOB: '',
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
    FirstName: Joi.string().label('First Name'),
    LastName: Joi.string().label('Last Name'),
    DOB: Joi.date().iso().label('Date of birth'),
    Mobile: Joi.string().pattern(/^[0-9]{10}$/).label('Mobile'),
    PanCard: Joi.string().pattern(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/).label('PanCard'),
    AadharCard: Joi.string().pattern(/^[0-9]{12}$/).label('AadharCard'),
    Nominee: Joi.string().min(2).label('Nominee'),
    NomineeAadharCard: Joi.string().pattern(/^[0-9]{12}$/).label('NomineeAadharCard'),
    Address: Joi.string().min(10).label('Address'),
    MonthlyIncome: Joi.number().min(0).label('Monthly Income')
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };


  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("userRef data : ", PhototRef.current.files[0]);

    // Validate form data
    
    console.log(data);

    const { _id, Photo, IFSC, MICR, Email, __v, AccountType, DigitalSignature, AccountNo, Date, ...formDataWithoutCertainData } = data; // Extract Photo from formData
    const { error } = schema.validate(formDataWithoutCertainData, { abortEarly: false });
    if (error) {
      console.log("Error : ", error);
      const validationErrors = {};
      error.details.forEach((err) => {
        validationErrors[err.context.key] = err.message;
      });
      setErrors(validationErrors);
      return;
    }

    console.log("Handle submit is call");

    // If form data is valid, proceed to API call
    setOpen(true)
    try {
      console.log("API execute successfully");
      console.log("Form Data : ", formData);

      const sessionToken = JSON.parse(sessionStorage.getItem("Token"));
      const sessionEmail = JSON.parse(sessionStorage.getItem("Email"));

      console.log(sessionEmail);

      const formDataToSend = new FormData();

      formDataToSend.append("FirstName", data.FirstName);
      formDataToSend.append("LastName", data.LastName);
      formDataToSend.append("Photo", PhototRef.current.files[0]);
      formDataToSend.append('DOB', data.DOB);
      formDataToSend.append('Mobile', data.Mobile);
      formDataToSend.append('PanCard', data.PanCard);
      formDataToSend.append('AadharCard', data.AadharCard);
      formDataToSend.append('Nominee', data.Nominee);
      formDataToSend.append('NomineeAadharCard', data.NomineeAadharCard);
      formDataToSend.append('Address', data.Address);
      formDataToSend.append('MonthlyIncome', data.MonthlyIncome);
      formDataToSend.append('Email', sessionEmail);

      console.log("FirstName : ", data.FirstName);
      console.log("LastName : ", data.LastName);
      console.log("DOB : ", data.DOB);
      console.log("Data : ", data);

      console.log("Form Data to send : ", formDataToSend);
      
      const response = await axios.post('http://localhost:5000/test/api/users/update-account-details', formDataToSend, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }).then(response => {
        if (response?.status === 200) {
          console.log(response);
          console.log('Data updated successfully.');
          toast.success(" Profile updated successfully")
          navigate("/PINvarify");
        }

      }).catch(e => {
        console.error('Failed to insert data OR may be user enter duplicate data.');
        toast.error("please fill the form")
      })
    }
    catch (error) {
      console.error('Error:', error);
    }
    setOpen(false)
  };

  return (
      <div className='Create_account mb-4 mt-4'>
{/* <Tostyfy></Tostyfy> */}
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
      // onClick={handleClose}
      >
        <CircularProgress color="inherit" />
      </Backdrop>

      <form onSubmit={handleSubmit}>

        <div style={{ paddingRight: "20px" }} className="rounded-lg border bg-card text-card-foreground shadow-sm w-full max-w-4xl" data-v0-t="card">
          <div className="flex flex-col space-y-1.5 p-6">
            <h2 className="font-semibold whitespace-nowrap leading-none tracking-tight">Edit Profile details</h2>
            {/* <h4 className=" mt-3 text-sm text-muted-foreground">Enter your information to open a new account.</h4> */}
          </div>
          <div className="p-6 space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="FirstName">
                  First name
                </label>
                <input type="text" id="FirstName" name="FirstName" value={data.FirstName} onChange={handleInputChange}   className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" placeholder="Enter your first name" />
                {errors.FirstName && <div style={{ marginBottom: "0rem" }} className='text-danger error'>{errors.FirstName}</div>}
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="LastName">
                  Last name
                </label>
                <input type="text" id="LastName" name="LastName" value={data.LastName} onChange={handleInputChange} className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" placeholder="Enter your last name" />
                {errors.LastName && <div style={{ marginBottom: "0rem" }} className='text-danger error'>{errors.LastName}</div>}
              </div>
            </div>

            <div className="space-y-2">
              <label
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                htmlFor="Photo"
              >
                Photo
              </label>
              <input
                type="file"
                id="Photo"
                name="Photo"
                ref={PhototRef}
                onChange={handlePhotoUpload}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                accept="image/*"
              />
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <label
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  htmlFor="DOB"
                >
                  Date of Birth
                </label>
                <input
                  type="date" id="DOB" name="DOB" value={data.DOB} onChange={handleInputChange}
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"/>

                {errors.DOB && <div style={{ marginBottom: "0rem" }} className='text-danger error'>{errors.DOB}</div>}

              </div>
           
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <label
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  htmlFor="Mobile"
                >
                  Mobile Number
                </label>
                <input type="text" id="Mobile" value={data.Mobile} name="Mobile" onChange={handleInputChange}  
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="Enter your mobile number"
                />
                {errors.Mobile && <div style={{ marginBottom: "0rem" }} className='text-danger error'>{errors.Mobile}</div>}
              </div>

              <div className="space-y-2">
                <label
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  htmlFor="PanCard"
                >
                  Pancard Number
                </label>
                <input
                  type="text" id="PanCard" name="PanCard" value={data.PanCard} onChange={handleInputChange} 
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="Enter your Pancard number"
                />
                {errors.PanCard && <div style={{ marginBottom: "0rem" }} className='text-danger error'>{errors.PanCard}</div>}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <label
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  htmlFor="AadharCard"
                >
                  Adharcard Number
                </label>
                <input type="text" id="AadharCard" name="AadharCard" value={data.AadharCard} onChange={handleInputChange} 
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="Enter your Adharcard number"
                />
              {errors.AadharCard && <div style={{ marginBottom: "0rem" }} className='text-danger error'>{errors.AadharCard}</div>}
              </div>
              <div className="space-y-2">
                <label
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  htmlFor="Nominee"
                >
                  Nominee
                </label>
                <input type="text" id="Nominee" name="Nominee" value={data.Nominee} onChange={handleInputChange}
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="Enter your nominee"
                />
              {errors.Nominee && <div style={{ marginBottom: "0rem" }} className='text-danger error'>{errors.Nominee}</div>}
              </div>
            </div>
            <div className="space-y-2">
              <label
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                htmlFor="NomineeAadharCard"
              >
                Nominee Adharcard Number
              </label>
              <input type="text" id="NomineeAadharCard" name="NomineeAadharCard" value={data.NomineeAadharCard} onChange={handleInputChange}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="Enter your nominee Adharcard number"
              />
              {errors.NomineeAadharCard && <div style={{ marginBottom: "0rem" }} className='text-danger error'>{errors.NomineeAadharCard}</div>}
            </div>
            <div className="space-y-2">
              <label
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                htmlFor="Address"
              >
                Address
              </label>
              <input type="text" id="Address" name="Address" value={data.Address} onChange={handleInputChange}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="Enter your address"
              />
            {errors.Address && <div style={{ marginBottom: "0rem" }} className='text-danger error'>{errors.Address}</div>}
            </div>
            <div className="space-y-2">
              <label
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                htmlFor="MonthlyIncome"
              >
                Monthly Income
              </label>
              <input type="number" id="MonthlyIncome" name="MonthlyIncome" value={data.MonthlyIncome} onChange={handleInputChange}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="Enter your monthly income"
              />
              {errors.MonthlyIncome && <div cstyle={{ marginBottom: "0rem" }} className='text-danger error'>{errors.MonthlyIncome}</div>}
            </div>

          </div>
      
        <div className="items-center p-6 flex">
          <button type="submit" className="mb-4 inline-flex items-center justify-center whitespace-nowrap rounded-md text-lg font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-5 py-4 ml-auto">
          Save
          </button>
        </div>
        </div>
      </form>
    </div>
  );
}

export default Edit_Profile;

