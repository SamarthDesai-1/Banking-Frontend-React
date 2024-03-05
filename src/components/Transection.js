import React, { useEffect, useState } from "react";
import Deshbord_Navbar from "./Deshbord_Navbar";
import Deshbord_Sidebar from "./Deshbord_Sidebar";
import DownloadForOfflineIcon from "@mui/icons-material/DownloadForOffline";
import "../style-css/Transection.css";
import axios from "axios";

function Transection() {

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [statement, setStatement] = useState("");

  const sessionEmail = JSON.parse(sessionStorage.getItem("Email"));
  const sessionToken = JSON.parse(sessionStorage.getItem("Token"));

  useEffect(() => {

    const fetchData = async () => {

        await axios.post("http://localhost:5000/test/api/users/transaction-history", { sessionEmail, sessionToken }, {
            headers: {
                'Content-Type': 'application/json',
            }
        }).then(response => {
            console.log(response);
            if (response?.status == 200) {
                console.log("Data : ", response.data.Data[0]);
                console.log("Status is 200");
                setStatement(response.data);
                console.log("Statement : ", statement)
            }
        }).catch(e => console.log("Error : ", e));
        
    };

    fetchData();
  }, []);

  return (
    <div className="Transection">
      <Deshbord_Navbar></Deshbord_Navbar>
      <div className="row">
        <div className="col-sm-3">
          <Deshbord_Sidebar></Deshbord_Sidebar>
        </div>
        <div className="col-sm-9">
          <h2 className="m-4">
            <b>Statements</b>
          </h2>
          <DownloadForOfflineIcon className="download"></DownloadForOfflineIcon>
          <div className="date">
            <form action="">
              <div className="row">
                <div className="col-md-4 ms-4">
                  <div>
                    From :-
                    <input type="date" name="" id="" />
                  </div>
                </div>
                <div className="col-md-4">
                  <div>
                    To :-
                    <input type="date" name="" id="" />
                  </div>
                </div>
                <div className="col-md-2">
                  <div>
                    <button className="btn btn-primary">Search</button>
                  </div>
                </div>
              </div>

              <div className="trans p-4 mt-3">
                <table class="table table-striped">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">First</th>
                      <th scope="col">Last</th>
                      <th scope="col">Handle</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>@fat</td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td colspan="2">Larry the Bird</td>
                      <td>@twitter</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Transection;
