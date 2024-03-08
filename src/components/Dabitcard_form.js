import React from 'react'
import Deshbord_Navbar from './Deshbord_Navbar'
import Deshbord_Sidebar from './Deshbord_Sidebar'
import '../style-css/Debitcard_form.css'
import { useState } from 'react'
import Joi from 'joi'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Dabitcard_form() {

    const navigate = useNavigate();

    const sessionToken = JSON.parse(sessionStorage.getItem("Token"));
    const sessionEmail = JSON.parse(sessionStorage.getItem("Email"));
  
    const [formData, setFormData] = useState({
        FirstName: '',
        LastName: '',
        Mobile: '',
        AccountNo: '',
      });
    
    const [errors, setErrors] = useState({});

     // Validation schema using Joi
  const schema = Joi.object({
    FirstName: Joi.string().required().label('First Name'),
    LastName: Joi.string().required().label('Last Name'),
    Mobile: Joi.string().pattern(/^[0-9]{10}$/).required().label('Mobile'),
    AccountNo: Joi.string().length(14).pattern(/^[0-9]+$/).required().label('Acccount No')
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };


   const handleSubmit = async (e) => {
    e.preventDefault();

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

      const formDataToSend = new FormData();

      formDataToSend.append("FirstName", formData.FirstName);
      formDataToSend.append("LastName", formData.LastName);
      formDataToSend.append('Mobile', formData.Mobile);
      formDataToSend.append('AccountNo', formData.AccountNo);

      console.log("Form data : ", formData);
      
      const response = await axios.post('http://localhost:5000/test/api/users/issue-debit-card', { formData, sessionEmail, sessionToken } , {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      }).then(response => {
        
        if (response?.status === 200) {

          console.log('Data inserted successfully.');
          console.log("Response from issue debit card : ", response);
          sessionStorage.setItem(
            "CardData",
            JSON.stringify(response.data.Data)
          );
          navigate("/Debitcard");
        }

      }).catch(e => {
        console.error('Failed to insert data OR may be user enter duplicate data.');
        alert(e.response.data.msg);
      })
    }
    catch (error) {
      console.error('Error:', error);
    }
  };

    return (
        <div className='dabitcardform'>
            <Deshbord_Navbar></Deshbord_Navbar>
            <div className="row">
                <div className="col-sm-3">
                    {/* <Deshbord_Sidebar></Deshbord_Sidebar> */}
                </div>
                <div className="col-sm-6">
                    <form onSubmit={handleSubmit} className='p-5'>
                        <h2 className=''>Debit Card Form</h2>

                        <div className="row">
                            <div className="col-md-6">
                                <div class="mb-3 mt-5">
                                    <label for="exampleInputEmail1" class="form-label">First Name</label>
                                    <input type="text" name='FirstName' class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={handleInputChange} />
                                    {errors.FirstName && <div style={{ marginBottom: "0rem" }} className='text-danger error'>{errors.FirstName}</div>}
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div class="mb-3 mt-5 ms-2">
                                    <label for="exampleInputEmail1" class="form-label">Last Name</label>
                                    <input type="text" name='LastName' class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={handleInputChange}  />
                                    {errors.LastName && <div style={{ marginBottom: "0rem" }} className='text-danger error'>{errors.LastName}</div>}
                                </div>
                            </div>
                        </div>

                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Phone</label>
                            <input type="number" name='Mobile' class="form-control" id="exampleInputPassword1" onChange={handleInputChange}  />
                            {errors.Mobile && <div style={{ marginBottom: "0rem" }} className='text-danger error'>{errors.Mobile}</div>}
                        </div>

                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Account No</label>
                            <input type="number" name='AccountNo' class="form-control" id="exampleInputPassword1" onChange={handleInputChange} />
                            {errors.AccountNo && <div style={{ marginBottom: "0rem" }} className='text-danger error'>{errors.AccountNo}</div>}
                        </div>

                        <button type="submit" class="btn btn-dark">Apply</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Dabitcard_form
