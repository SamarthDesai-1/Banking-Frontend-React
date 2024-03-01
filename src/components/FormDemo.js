import React, { useState, useRef } from 'react';
import Joi from 'joi';
import axios from 'axios';


const FormComponent = () => {
  const PhototRef = useRef()
  
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


  //Photo reference 


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
      });
      if (response?.status === 200) {
        // Handle successful API call
        console.log('Data inserted successfully.');
      } else {
        // Handle API call error
        console.error('Failed to insert data.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>

      <div>
        <label htmlFor="FirstName">First Name</label>
        <input type="text" id="FirstName" name="FirstName" value={formData.FirstName} onChange={handleInputChange} />
        {errors.FirstName && <div className="error">{errors.FirstName}</div>}
      </div>

      <div>
        <label htmlFor="LastName">Last Name</label>
        <input type="text" id="LastName" name="LastName" value={formData.LastName} onChange={handleInputChange} />
        {errors.LastName && <div className="error">{errors.LastName}</div>}
      </div>

      <div>
        <label htmlFor="Photo">Photo</label>
        <input type="file" id="Photo" name="Photo" ref={PhototRef} onChange={handlePhotoUpload} />
      </div>

      <div>
        <label htmlFor="DOB">Photo</label>
        <input type="date" id="DOB" name="DOB" onChange={handleInputChange} />
        {errors.DOB && <div className="error">{errors.DOB}</div>}
      </div>

      <div>
        <label htmlFor="AccountType">AccountType</label>
        <select id="AccountType" name="AccountType" onChange={(e) => handleInputChange(e)}>
          <option value="">----- select -----</option>
          <option value="Saving Account">Saving Account</option>
          <option value="Current Account">Current Account</option>
          <option value="Recurring Deposit Account">Recurring Deposit Account</option>
          <option value="Fix Deposit Account">Fix Deposit Account</option>
        </select>
        {errors.AccountType && <div className="error">{errors.AccountType}</div>}
      </div>

      <div>
        <label htmlFor="Mobile">Mobile</label>
        <input type="text" id="Mobile" name="Mobile" onChange={handleInputChange} />
        {errors.Mobile && <div className="error">{errors.Mobile}</div>}
      </div>

      <div>
        <label htmlFor="PanCard">PanCard</label>
        <input type="text" id="PanCard" name="PanCard" value={formData.PanCard} onChange={handleInputChange} />
        {errors.PanCard && <div className="error">{errors.PanCard}</div>}
      </div>

      <div>
        <label htmlFor="AadharCard">AadharCard</label>
        <input type="text" id="AadharCard" name="AadharCard" value={formData.AadharCard} onChange={handleInputChange} />
        {errors.AadharCard && <div className="error">{errors.AadharCard}</div>}
      </div>

      <div>
        <label htmlFor="Nominee">Nominee</label>
        <input type="text" id="Nominee" name="Nominee" value={formData.Nominee} onChange={handleInputChange} />
        {errors.Nominee && <div className="error">{errors.Nominee}</div>}
      </div>

      <div>
        <label htmlFor="NomineeAadharCard">NomineeAadharCard</label>
        <input type="text" id="NomineeAadharCard" name="NomineeAadharCard" value={formData.NomineeAadharCard} onChange={handleInputChange} />
        {errors.NomineeAadharCard && <div className="error">{errors.NomineeAadharCard}</div>}
      </div>

      <div>
        <label htmlFor="Address">Address</label>
        <input type="text" id="Address" name="Address" value={formData.Address} onChange={handleInputChange} />
        {errors.Address && <div className="error">{errors.Address}</div>}
      </div>

      <div>
        <label htmlFor="MonthlyIncome">MonthlyIncome</label>
        <input type="number" id="MonthlyIncome" name="MonthlyIncome" value={formData.MonthlyIncome} onChange={handleInputChange} />
        {errors.MonthlyIncome && <div className="error">{errors.MonthlyIncome}</div>}
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default FormComponent;
