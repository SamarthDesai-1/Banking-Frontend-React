import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../style-css/User_Profile.css'
import EditIcon from '@mui/icons-material/Edit';
import Tooltip from '@mui/material/Tooltip';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { NavLink } from 'react-router-dom';
import Deshbord_Navbar from './Deshbord_Navbar';
import Deshbord_Sidebar from './Deshbord_Sidebar';
import Tostyfy from './Tostyfy';

function User_Profile() {

  const [data, setData] = useState("");
  const [accountOpen, setAccountOpen] = useState("");
  const [image, setImage] = useState();

  const [open, setOpen] = useState(false);


  useEffect(() => {

    let obj = JSON.parse(sessionStorage.getItem("AccountData"));
    setImage(obj.Photo);
    setData(obj);

    let OBJ = JSON.parse(sessionStorage.getItem("AccountOpenData"));
    setAccountOpen(OBJ);

    console.log(data);
    console.log(accountOpen);

  }, []);

  return (
    <div className='user'>
      {/* <Tostyfy></Tostyfy> */}
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
      // onClick={handleClose}
      >
        <CircularProgress color="inherit" />
      </Backdrop>

      <Deshbord_Navbar></Deshbord_Navbar>
      <div className="row usermain">
        <div className="col-sm-3">
          <Deshbord_Sidebar></Deshbord_Sidebar>
        </div>
        <div className="col-sm-9">
          <div style={{ minHeight: '100vh', backgroundColor: '#f3f4f6', display: 'grid', gridTemplateRows: 'auto 1fr auto', color: '#111', fontFamily: 'Arial, sans-serif' }}>
            <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', paddingTop: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '20px', width: '70vw' }}>
                  <img src={`http://localhost:5000/uploads/${image}`} width="100" height="100" style={{ borderRadius: '50%', objectFit: 'cover' }} />
                  <div style={{ display: 'grid', gridGap: '5px' }}>
                    <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', margin: 0 }}>{`${data.FirstName} ${data.LastName}`}</h1>
                    <p style={{ fontSize: '0.875rem', margin: 0, color: '#666' }}>Customer ID : {!data ? "Waiting..." : data._id}</p>
                  </div>
                  <div style={{position: "absolute", right: "35px" }}>
                  <Tooltip title="Edit Profile" arrow>
                  <NavLink to="/Edit_Profile" style={{color:"black"}}><EditIcon style={{fontSize:"30px"}} ></EditIcon></NavLink>
                    {/* <NavLink style={{ zIndex:"1"}} to="/Edit_Profile"> <button style={{padding: '10px 20px', fontSize: '0.875rem', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px' }}>Edit Profile</button></NavLink> */}
                    </Tooltip>
                  </div>
                  
                </div>
                {/* content */}
              </div>
            </div>
            <div style={{ borderTop: '1px solid #ddd', padding: '20px 0' }}>
              <div className="d-flex">
                <h2 style={{ fontWeight: 'bold', color: '#666' }} className='ps-4'>Balance</h2>
                <h2 className='ms-5'>₹ {data.Balance}</h2>
              </div>

              <hr />
              <div style={{ padding: '0 20px', maxWidth: '1200px', margin: '0 auto' }}>
                <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold', margin: '0 0 10px' }}>Account Details</h2>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px' }}></div>

                <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '10px' }}>
                  <div style={{ fontSize: '0.875rem', fontWeight: 'bold', color: '#666' }}>Account Number</div>
                  <div style={{ marginLeft: "230px" }}>{data.AccountNo}</div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '10px' }}>
                  <div style={{ fontSize: '0.875rem', fontWeight: 'bold', color: '#666' }}>Account Type</div>
                  <div style={{ marginLeft: "254px" }}>{data.AccountType}</div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '10px' }}>
                  <div style={{ fontSize: '0.875rem', fontWeight: 'bold', color: '#666' }}>IFSC</div>
                  <div style={{ marginLeft: "322px" }}>{data.IFSC}</div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '10px' }}>
                  <div style={{ fontSize: '0.875rem', fontWeight: 'bold', color: '#666' }}>MICR</div>
                  <div style={{ marginLeft: "316px" }}>{data.MICR}</div>
                </div>
                <hr />

                <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold', margin: '0 0 10px' }}>Personal Details</h2>

                <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '10px' }}>
                  <div style={{ fontSize: '0.875rem', fontWeight: 'bold', color: '#666' }}>First Name</div>
                  <div style={{ marginLeft: "275px" }}>{data.FirstName}</div>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '10px' }}>
                  <div style={{ fontSize: '0.875rem', fontWeight: 'bold', color: '#666' }}>Last Name</div>
                  <div style={{ marginLeft: "277px" }}>{data.LastName}</div>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '10px' }}>
                  <div style={{ fontSize: '0.875rem', fontWeight: 'bold', color: '#666' }}>Mobile Number</div>
                  <div style={{ marginLeft: "243px" }}>{data.Mobile}</div>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '10px' }}>
                  <div style={{ fontSize: '0.875rem', fontWeight: 'bold', color: '#666' }}>Email Address</div>
                  <div style={{ marginLeft: "251px" }}>{data.Email}</div>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '10px' }}>
                  <div style={{ fontSize: '0.875rem', fontWeight: 'bold', color: '#666' }}>Pancard Number</div>
                  <div style={{ marginLeft: "231px" }}>{data.PanCard}</div>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '10px' }}>
                  <div style={{ fontSize: '0.875rem', fontWeight: 'bold', color: '#666' }}>Aadhar Card Number</div>
                  <div style={{ marginLeft: "199px" }}>{data.AadharCard}</div>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '10px' }}>
                  <div style={{ fontSize: '0.875rem', fontWeight: 'bold', color: '#666' }}>Nominee</div>
                  <div style={{ marginLeft: "289px" }}>{accountOpen.Nominee}</div>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '10px' }}>
                  <div style={{ fontSize: '0.875rem', fontWeight: 'bold', color: '#666' }}>Nominee Aadhar Card Number</div>
                  <div style={{ marginLeft: "132px" }}>{accountOpen.NomineeAadharCard}</div>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '10px' }}>
                  <div style={{ fontSize: '0.875rem', fontWeight: 'bold', color: '#666' }}>Address</div>
                  <div style={{ marginLeft: "297px" }}>{accountOpen.Address}</div>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '10px' }}>
                  <div style={{ fontSize: '0.875rem', fontWeight: 'bold', color: '#666' }}>Date of Birth</div>
                  <div style={{ marginLeft: "268px" }}>{accountOpen.DOB}</div>
                </div>
              </div>
            </div>

            <div style={{ borderTop: '1px solid #ddd', padding: '20px 0' }}>
              <div style={{ padding: '0 20px', maxWidth: '1200px', margin: '0 auto' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <div>
                    <NavLink to="/Account_Transfer"><button style={{ padding: '10px 20px', fontSize: '0.875rem', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px' }}>Transfer Funds</button></NavLink>
                  </div>
                  <div>
                    <NavLink to="/Transection"><button style={{ padding: '10px 20px', fontSize: '0.875rem', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px' }}>View Statements</button></NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default User_Profile;

