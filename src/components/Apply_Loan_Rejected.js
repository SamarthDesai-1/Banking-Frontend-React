import React, { useState } from "react";
import "../style-css/Apply_Loan.css";
import Deshbord_Navbar from "./Deshbord_Navbar";
import Deshbord_Sidebar from "./Deshbord_Sidebar";
import Joi from "joi";
import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
//loading bar
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { toast } from "react-toastify";
import swal from "sweetalert";
import Tostyfy from "./Tostyfy";


function Apply_Loan_Rejected() {
  const navigate = useNavigate();
  const sessionToken = JSON.parse(sessionStorage.getItem("Token"));
  const sessionEmail = JSON.parse(sessionStorage.getItem("Email"));

  const [open, setOpen] = React.useState(false);

  const [formData, setFormData] = useState({
    FirstName: "",
    LastName: "",
    AadharCard: "",
    PanCard: "",
    Reason: "",
    Profession: "",
    Age: "",
    MonthlyIncome: "",
    Address: "",
    flexRadioDefault: "",
    Amount: "",
    Years: "",
  });

  const [errors, setErrors] = useState({});

  const schema = Joi.object({
    FirstName: Joi.string().required().label("First Name"),
    LastName: Joi.string().required().label("Last Name"),
    Profession: Joi.string().required().label("Profession"),
    Reason: Joi.string().required().label("Reason"),
    flexRadioDefault: Joi.string().required(),
    Age: Joi.number().integer().min(18).max(100).required(),
    PanCard: Joi.string()
      .pattern(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/)
      .required()
      .label("PanCard"),
    AadharCard: Joi.string()
      .pattern(/^[0-9]{12}$/)
      .required()
      .label("AadharCard"),
    Address: Joi.string().min(10).required().label("Address"),
    MonthlyIncome: Joi.number().min(0).required().label("Monthly Income"),
    Amount: Joi.number().max(500000).required(),
    Years: Joi.number().integer().min(5).max(30).required(),
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Handle submit");
    const { error } = schema.validate(formData, {
      abortEarly: false,
    });
    if (error) {
      console.log("Error : ", error);
      const validationErrors = {};
      error.details.forEach((err) => {
        validationErrors[err.context.key] = err.message;
      });
      setErrors(validationErrors);
      return;
    }

    setOpen(true)
    try {
      const formDataToSend = new FormData();

      console.log(formData.FirstName);
      console.log(formData.flexRadioDefault);

      formDataToSend.append("FirstName", formData.FirstName);
      formDataToSend.append("LastName", formData.LastName);
      formDataToSend.append("PanCard", formData.PanCard);
      formDataToSend.append("AadharCard", formData.AadharCard);
      formDataToSend.append("Age", formData.Age);
      formDataToSend.append("Profession", formData.Profession);
      formDataToSend.append("Address", formData.Address);
      formDataToSend.append("MonthlyIncome", formData.MonthlyIncome);
      formDataToSend.append("flexRadioDefault", formData.flexRadioDefault);
      formDataToSend.append("Reason", formData.Reason);
      formDataToSend.append("Amount", formData.Amount);
      formDataToSend.append("Years", formData.Years);

      console.log(formData);

      await axios
        .post(
          "http://localhost:5000/test/api/users/apply-loan",
          { sessionEmail, formData },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((response) => {
          if (response?.status == 200) {
            /** add toastify if possible */
            console.log(response);

            sessionStorage.setItem("LoanData", "Pending");
            swal({
              icon: "success",
              text: "Your Loan Application has been Submited",
            });
            navigate('/Loan_pending')
          }
        })
        .catch((e) => {
          alert(e.response.data.msg);
        });
    } catch (error) {
      console.error("Error:", error);
    }
    setOpen(false)
  };

  return (
    <div className="aplloan">
      {/* <Tostyfy></Tostyfy> */}
       <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
      // onClick={handleClose}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <Deshbord_Navbar></Deshbord_Navbar>
      <div className="row">
        <div className="col-sm-3">
          <Deshbord_Sidebar></Deshbord_Sidebar>
        </div>
        <div className="col-sm-9 aplform">
          <form onSubmit={handleSubmit} className="p-5">
            <h2 className="mb-4">Loan Application form</h2>
            <h3 style={{ color: "red" }}>
              Your previous application is rejected
            </h3>
            <div className="row">
              <div className="col-sm-6">
                <div class="mb-3 me-2">
                  <label for="exampleInputEmail1" class="form-label">
                    First Name
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    name="FirstName"
                    onChange={handleInputChange}
                  />
                  {errors.FirstName && (
                    <div
                      style={{ marginBottom: "0rem" }}
                      className="text-danger error"
                    >
                      {errors.FirstName}
                    </div>
                  )}
                </div>
              </div>
              <div className="col-sm-6">
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">
                    Last Name
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    name="LastName"
                    onChange={handleInputChange}
                  />
                  {errors.LastName && (
                    <div
                      style={{ marginBottom: "0rem" }}
                      className="text-danger error"
                    >
                      {errors.LastName}
                    </div>
                  )}
                </div>
              </div>

              <div className="col-sm-6">
                <div class="mb-3 me-2">
                  <label for="exampleInputEmail1" class="form-label">
                    Amount
                  </label>
                  <input
                    type="number"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    name="Amount"
                    onChange={handleInputChange}
                  />
                  {errors.Amount && (
                    <div
                      style={{ marginBottom: "0rem" }}
                      className="text-danger error"
                    >
                      {errors.Amount}
                    </div>
                  )}
                </div>
              </div>

              <div className="col-sm-6">
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">
                    Years
                  </label>
                  <input
                    type="number"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    name="Years"
                    onChange={handleInputChange}
                  />
                  {errors.Years && (
                    <div
                      style={{ marginBottom: "0rem" }}
                      className="text-danger error"
                    >
                      {errors.Years}
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-sm-6">
                <div class="mb-3 me-2">
                  <label for="exampleInputEmail1" class="form-label">
                    AadharCard No
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    name="AadharCard"
                    onChange={handleInputChange}
                  />
                  {errors.AadharCard && (
                    <div
                      style={{ marginBottom: "0rem" }}
                      className="text-danger error"
                    >
                      {errors.AadharCard}
                    </div>
                  )}
                </div>
              </div>
              <div className="col-sm-6">
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">
                    Pancard No
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    name="PanCard"
                    onChange={handleInputChange}
                  />
                  {errors.PanCard && (
                    <div
                      style={{ marginBottom: "0rem" }}
                      className="text-danger error"
                    >
                      {errors.PanCard}
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Reason
              </label>
              <input
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                name="Reason"
                onChange={handleInputChange}
              />
              {errors.Reason && (
                <div
                  style={{ marginBottom: "0rem" }}
                  className="text-danger error"
                >
                  {errors.Reason}
                </div>
              )}
            </div>

            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
                onChange={handleInputChange}
                value="Job"
              />
              <label class="form-check-label" for="flexRadioDefault1">
                Job
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
                onChange={handleInputChange}
                value="Business"
              />
              <label class="form-check-label" for="flexRadioDefault2">
                Business
              </label>
              {errors.flexRadioDefault && (
                <div
                  style={{ marginBottom: "0rem" }}
                  className="text-danger error"
                >
                  {errors.flexRadioDefault}
                </div>
              )}
            </div>

            <div className="row mt-2">
              <div className="col-sm-6">
                <div class="mb-3">
                  <div class="mb-3 me-2">
                    <label for="exampleInputEmail1" class="form-label">
                      Profession
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      name="Profession"
                      onChange={handleInputChange}
                    />
                    {errors.Profession && (
                      <div
                        style={{ marginBottom: "0rem" }}
                        className="text-danger error"
                      >
                        {errors.Profession}
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">
                    Age
                  </label>
                  <input
                    type="number"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    name="Age"
                    onChange={handleInputChange}
                  />
                  {errors.Age && (
                    <div
                      style={{ marginBottom: "0rem" }}
                      className="text-danger error"
                    >
                      {errors.Age}
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Income
              </label>
              <input
                type="number"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                name="MonthlyIncome"
                onChange={handleInputChange}
              />
              {errors.MonthlyIncome && (
                <div
                  style={{ marginBottom: "0rem" }}
                  className="text-danger error"
                >
                  {errors.MonthlyIncome}
                </div>
              )}
            </div>

            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Address
              </label>
              <textarea
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                name="Address"
                onChange={handleInputChange}
              />
              {errors.Address && (
                <div
                  style={{ marginBottom: "0rem" }}
                  className="text-danger error"
                >
                  {errors.Address}
                </div>
              )}
            </div>

            <button type="submit" class="btn btn-primary">
              Apply Loan
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Apply_Loan_Rejected;
