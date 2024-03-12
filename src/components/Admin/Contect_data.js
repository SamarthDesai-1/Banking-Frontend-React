import React, { useState } from 'react';
import '../../style-css/Admin/Contect_data.css';
import Admin_Navbar from './Admin_Navbar';
import Admin_Sidebar from './Admin_Sidebar';
import { useEffect } from 'react';
import axios from 'axios';
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

function Contect_data() {

  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setOpen(true)
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
      setOpen(false)
    };

    fetchData();

  }, [])

  useEffect(() => {
    const filteredResults = data.filter((item) =>
      `${item.Name}  ${item.Email}  ${item.Mobile} ${item.Subject}`
        .toLowerCase()
        .includes(searchQuery.toLowerCase())
    );
    setFilteredData(filteredResults);
  }, [searchQuery, data]);



  const handleSearchAccountNoChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className='contectdata'>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <Admin_Navbar></Admin_Navbar>
      <div className="row"> 
        <div className="col-sm-3">
          <Admin_Sidebar></Admin_Sidebar>
        </div>
        <div className="col-sm-9">
          <div className="contecttable">
            <div className="row">
              <div className="col-md-6">
                <h2 className="mb-3">Contact data</h2>
              </div>
              <div className="col-md-6">
                <form className="d-flex adserch">
                  <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    value={searchQuery}
                    onChange={handleSearchAccountNoChange}
                  />
                  <button className="btn btn-outline-success" type="submit">
                    Search
                  </button>
                </form>
              </div>
            </div>


            <table class="table table-striped">
              <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  {/* <th scope="col">Mobile</th> */}
                  <th scope="col">Subject</th>
                  <th scope="col">Message</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map((elem, index) => (
                  <tr key={index}>
                    <td className="text-deco">{index + 1}</td>
                    <td className="text-deco">{elem.Name}</td>
                    <td className="text-deco">{elem.Email}</td>
                    {/* <td className="text-deco">{elem.Mobile}</td> */}
                    <td className="text-deco">{elem.Subject}</td>
                    <td className="text-deco">{elem.Message}</td>
                    <td className="text-deco">
                      {/* {" "} */}
                      {/* <button className="btn btn-success">Process</button>{" "} */}
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
