import React, { useEffect, useState } from "react";
import "../style-css/Fix_deposit_form.css";
import Joi from "joi";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Fix_deposit_form() {

  const [account, setAccount] = useState("");
  const sessionToken = JSON.parse(sessionStorage.getItem("Token"));
  const sessionEmail = JSON.parse(sessionStorage.getItem("Email"));

  const [data, setData] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const OBJ = JSON.parse(sessionStorage.getItem("AccountData"));
    setData(OBJ);
    const OBJ2 = JSON.parse(sessionStorage.getItem("AccountData"));
    setAccount(OBJ2);
  }, []);

  const [formData, setFormData] = useState({
    amount: "",
    timeperiod: "",
    pin: "",
  });

  const [errors, setErrors] = useState({});

  const schema = Joi.object({
    timeperiod: Joi.string().required().label("Time period"),
    pin: Joi.string().required().label("Pin"),
    amount: Joi.string().required().label("Amount"),
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    // setOpen(true);
    e.preventDefault();

    // Validate form data
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
      console.log("API execute successfully");
      console.log("Form Data : ", formData);

      const formDataToSend = new FormData();

      formDataToSend.append("amount", formData.amount);
      formDataToSend.append("pin", formData.pin);
      formDataToSend.append("timeperiod", formData.timeperiod);

      console.log("Form data : ", formData);

      const response = await axios
        .post(
          "http://localhost:5000/test/api/users/open-fd",
          { formData, sessionEmail, sessionToken, data },
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((response) => {
          if (response?.status === 200) {
            console.log("Success from server Fixed deposit");
            console.log(response);
            sessionStorage.setItem("FDdata", JSON.stringify(response.data.msg.Response.Data));
            navigate("/Deposit_status");
          }
        })
        .catch((e) => {
          console.log(
            "Failed to insert data OR may be user enter duplicate data."
          );
          alert(e.response.data.msg);
        });
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="fix">
      <div className="bal">
        <h2 className="">Balance : ${account.Balance}</h2>
      </div>

      <div className=" fixform col-md-8">
        <form onSubmit={handleSubmit} className="mt-4">
          <div class="form-group m-3">
            <label className="mb-2" for="amount">
              Deposit Amount:
            </label>
            <input
              type="number"
              class="form-control"
              id="amount"
              placeholder="Enter amount"
              name="amount"
              onChange={handleInputChange}
            />
            {errors.amount && (
              <div
                style={{ marginBottom: "0rem" }}
                className="text-danger error"
              >
                {errors.amount}
              </div>
            )}
          </div>
          <div class="form-group m-3">
            <label className="mb-2" for="amount">
              Time Period:
            </label>
            <input
              type="number"
              class="form-control"
              id="amount"
              placeholder="Enter Months"
              name="timeperiod"
              onChange={handleInputChange}
            />
            {errors.timeperiod && (
              <div
                style={{ marginBottom: "0rem" }}
                className="text-danger error"
              >
                {errors.timeperiod}
              </div>
            )}
          </div>
          <div class="form-group m-3">
            <label className="mb-2" for="amount">
              PIN:
            </label>
            <input
              type="text"
              class="form-control"
              id="amount"
              placeholder="Enter PIN"
              name="pin"
              onChange={handleInputChange}
            />
            {errors.pin && (
              <div
                style={{ marginBottom: "0rem" }}
                className="text-danger error"
              >
                {errors.pin}
              </div>
            )}
          </div>
          <button type="submit" class="btn btn-primary m-3">
            Submit
          </button>
        </form>
        <h3 className="mt-3">Account for Payout : {account.AccountNo} </h3>
      </div>
    </div>
  );
}

export default Fix_deposit_form;
