import React, { useState } from "react";
import "../style-css/Withdrow.css";
import Deshbord_Sidebar from "./Deshbord_Sidebar";
import Deshbord_Navbar from "./Deshbord_Navbar";
import axios from "axios";

function Withdrow() {
  const [amount, setAmount] = useState();
  const [pin, setPin] = useState("");

  const handleData = async () => {
    const sessionEmail = JSON.parse(sessionStorage.getItem("Email"));
    const sessionToken = JSON.parse(sessionStorage.getItem("Token"));

    console.log(sessionEmail);
    console.log(sessionToken);

    console.log(`Amount : ${amount} Pin : ${pin}`);

    try {
      if (amount !== undefined && pin !== "") {
        const data = await axios.post("http://localhost:5000/test/api/users/withdraw-funds", { sessionEmail, sessionToken, amount, pin }, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => {

            console.log(response);

            // setAmount();
            // setPin("")

        }).catch(e => {
            let msgFromServer = e.response.data.msg;
            console.log("Server says : ",msgFromServer);
            alert(msgFromServer);
            return;
        })
      } else {
        alert("Fill the add funds details properly");
        return;
      }
    } catch (error) {}
  };

  return (
    <div className="Withdrow">
      <Deshbord_Navbar></Deshbord_Navbar>
      <div className="row">
        <div className="col-sm-3">
          <Deshbord_Sidebar></Deshbord_Sidebar>
        </div>
        <div className="col-sm-4 withdrowform">
          <form className="p-5">
            <h2 className="">Withdraw Money</h2>
            <p>Enter the amount you eant to Withdrow.</p>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">
                Amount
              </label>
              <input
                type="number"
                class="form-control"
                id="exampleInputPassword1"
                required
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>

            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">
                PIN
              </label>
              <input
                type="password"
                class="form-control pin-only"
                id="exampleInputPassword1"
                required
                maxLength={4}
                onChange={(e) => setPin(e.target.value)}
              />
            </div>

            <input
              type="button"
              class="btn btn-dark"
              value="Withdrow Money"
              onClick={handleData}
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Withdrow;
