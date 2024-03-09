import React, { useState } from 'react';
import '../../style-css/Admin/Contect_data.css';
import Admin_Navbar from './Admin_Navbar';
import Admin_Sidebar from './Admin_Sidebar';
import { useEffect } from 'react';
import axios from 'axios';

function Contect_data() {

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {

      await axios.get("http://localhost:5000/test/api/users/get-contact-data", {
        headers: {
          "Content-Type": "application/json",
        },
      }).then(response => {
        if (response?.status == 200) {
          console.log(response);
          setData(response.data.Data);
        }
      }).catch((e) => console.log(e));
    };

    fetchData();

  }, [])

  return (
    <div className='contectdata'>
      <Admin_Navbar></Admin_Navbar>
      <div className="row">
        <div className="col-sm-3">
            <Admin_Sidebar></Admin_Sidebar>
        </div>
        <div className="col-sm-9">
        <div className="contecttable">
            <h2 className="mb-3">Contact data</h2>
            <table class="table table-striped">
              <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Mobile</th>
                  <th scope="col">Subject</th>
                  <th scope="col">Message</th>
                </tr>
              </thead>
              <tbody>
                {data.map((elem, index) => (
                  <tr key={index}>
                    <td className="text-deco">{index + 1}</td>
                    <td className="text-deco">{elem.Name}</td>
                    <td className="text-deco">{elem.Email}</td>
                    <td className="text-deco">{elem.Mobile}</td>
                    <td className="text-deco">{elem.Subject}</td>
                    <td className="text-deco">{elem.Message}</td>
                    <td className="text-deco">
                      {" "}
                      <button className="btn btn-success">Query</button>{" "}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contect_data
