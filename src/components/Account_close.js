import React from "react";
import "../style-css/Account_close.css";
import Deshbord_Sidebar from "./Deshbord_Sidebar";
import Deshbord_Navbar from "./Deshbord_Navbar";
import { useNavigate } from "react-router-dom";
import Joi from "joi";
import { useState } from "react";
import axios from "axios";

function Account_close() {
  const navigate = useNavigate();
  const [account, setAccount] = useState("");

  const [formData, setFormData] = useState({
    FirstName: "",
    LastName: "",
    Email: "",
    AccountNo: "",
    Reason: "",
  });

  const [errors, setErrors] = useState({});

  const schema = Joi.object({
    FirstName: Joi.string().required().label("First Name"),
    LastName: Joi.string().required().label("Last Name"),
    Email: Joi.string()
      .email({ tlds: { allow: false } })
      .required()
      .label("Email"),
    AccountNo: Joi.string().required().label("Account Number"),
    Reason: Joi.string().required().label("Reason"),
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

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

    try {
      const sessionToken = JSON.parse(sessionStorage.getItem("Token"));
      const sessionEmail = JSON.parse(sessionStorage.getItem("Email"));
      const accountNo = JSON.parse(
        sessionStorage.getItem("AccountData")
      ).AccountNo;
      const userID = JSON.parse(sessionStorage.getItem("AccountData"))._id;
      const formDataToSend = new FormData();

      formDataToSend.append("FirstName", formData.FirstName);
      formDataToSend.append("LastName", formData.LastName);
      formDataToSend.append("AccountNo", formData.AccountNo);
      formDataToSend.append("Reason", formData.Reason);

      console.log(formDataToSend);

      const data = await axios
        .post(
          "http://localhost:5000/test/api/users/close-account",
          { sessionEmail, sessionToken, formData, accountNo, userID },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((response) => {
          console.log(response);
          setAccount(response.data.Data);
        })
        .catch((e) => {
          alert(e.response.data.msg);
        });
    } catch (e) {
      console.log("error from try catch");
    }
  };

  const handleEvent = async () => {
    const sessionEmail = JSON.parse(sessionStorage.getItem("Email"));
    const data = await axios
      .post(
        "http://localhost:5000/test/api/users/exists-request",
        { sessionEmail },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        console.log("Status report : ", response);

        if (response?.status === 200) {
          console.log(response);
          if (response.data.Data[0].Status === "Pending") {
            alert(response.data.msg);
          } 
          if (response.data.Data[0].Status === "reject") {
            alert(response.data.msg);
          }
        }
      })
      .catch((e) => {
        console.log(e);
        alert(e.response.data.msg);
      });
  };

  return (
    <div className="acclose">
      <Deshbord_Navbar></Deshbord_Navbar>
      <div className="row">
        <div className="col-md-3">
          <Deshbord_Sidebar></Deshbord_Sidebar>
        </div>
        <div className="col-md-7 closeform">
          <form onSubmit={handleSubmit} className="p-5">
            <h2 className="mb-4">Account close Application Form</h2>

            <button onClick={handleEvent} className="stbtn btn btn-primary">
              Status
            </button>

            <div className="row">
              <div className="col-md-6">
                <div class="mb-3 pe-2">
                  <label for="exampleInputEmail1" class="form-label">
                    First Name
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleInputEmail1"
                    // required
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
              <div className="col-md-6">
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">
                    Last Name
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleInputEmail1"
                    // required
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
            </div>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Account Number
              </label>
              <input
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                // required
                aria-describedby="emailHelp"
                name="AccountNo"
                onChange={handleInputChange}
              />
              {errors.AccountNo && (
                <div
                  style={{ marginBottom: "0rem" }}
                  className="text-danger error"
                >
                  {errors.AccountNo}
                </div>
              )}
            </div>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Email Address
              </label>
              <input
                type="Email"
                class="form-control"
                id="exampleInputEmail1"
                // required
                aria-describedby="emailHelp"
                name="Email"
                onChange={handleInputChange}
              />
              {errors.Email && (
                <div
                  style={{ marginBottom: "0rem" }}
                  className="text-danger error"
                >
                  {errors.Email}
                </div>
              )}
            </div>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Reason
              </label>
              <textarea
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                // required
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
            <button type="submit" class="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Account_close;
