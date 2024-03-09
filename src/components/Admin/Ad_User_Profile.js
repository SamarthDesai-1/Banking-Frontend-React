import React from 'react'
import '../../style-css/Admin/Ad_User_Profile.css'
import { NavLink } from 'react-router-dom'


function Ad_User_Profile() {
  return (
    <div className='aduserprofile'>
      <div style={{ minHeight: '100vh', backgroundColor: '#f3f4f6', display: 'grid', gridTemplateRows: 'auto 1fr auto', color: '#111', fontFamily: 'Arial, sans-serif' }}>
            <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', paddingTop: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '20px', width: '70vw' }}>
                  {/* <img src={`http://localhost:5000/uploads/${image}`} width="100" height="100" style={{ borderRadius: '50%', objectFit: 'cover' }} /> */}
                  <div style={{ display: 'grid', gridGap: '5px' }}>
                    {/* <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', margin: 0 }}>{`${data.FirstName} ${data.LastName}`}</h1> */}
                    {/* <p style={{ fontSize: '0.875rem', margin: 0, color: '#666' }}>Customer ID : {!data ? "Waiting..." : data._id}</p> */}
                  </div>
                  
                </div>
                {/* content */}
              </div>
            </div>
            <div style={{ borderTop: '1px solid #ddd', padding: '20px 0' }}>
              <div className="d-flex">
                <h2 style={{ fontWeight: 'bold', color: '#666',marginLeft:"37px" }} className=''>Balance</h2>
                {/* <h2 className='ms-5'>${data.Balance}</h2> */}
              </div>

              <hr />
              <div style={{ padding: '0 20px', maxWidth: '1200px', margin: '0 auto' }}>
                <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold', margin: '0 0 10px' }}>Account Details</h2>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px' }}></div>

                <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '10px' }}>
                  <div style={{ fontSize: '0.875rem', fontWeight: 'bold', color: '#666' }}>Account Number</div>
                  {/* <div style={{ marginLeft: "230px" }}>{data.AccountNo}</div> */}
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '10px' }}>
                  <div style={{ fontSize: '0.875rem', fontWeight: 'bold', color: '#666' }}>Account Type</div>
                  {/* <div style={{ marginLeft: "254px" }}>{data.AccountType}</div> */}
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '10px' }}>
                  <div style={{ fontSize: '0.875rem', fontWeight: 'bold', color: '#666' }}>IFSC</div>
                  {/* <div style={{ marginLeft: "322px" }}>{data.IFSC}</div> */}
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '10px' }}>
                  <div style={{ fontSize: '0.875rem', fontWeight: 'bold', color: '#666' }}>MICR</div>
                  {/* <div style={{ marginLeft: "316px" }}>{data.MICR}</div> */}
                </div>
                <hr />

                <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold', margin: '0 0 10px' }}>Personal Details</h2>

                <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '10px' }}>
                  <div style={{ fontSize: '0.875rem', fontWeight: 'bold', color: '#666' }}>First Name</div>
                  {/* <div style={{ marginLeft: "275px" }}>{data.FirstName}</div> */}
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '10px' }}>
                  <div style={{ fontSize: '0.875rem', fontWeight: 'bold', color: '#666' }}>Last Name</div>
                  {/* <div style={{ marginLeft: "277px" }}>{data.LastName}</div> */}
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '10px' }}>
                  <div style={{ fontSize: '0.875rem', fontWeight: 'bold', color: '#666' }}>Mobile Number</div>
                  {/* <div style={{ marginLeft: "243px" }}>{data.Mobile}</div> */}
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '10px' }}>
                  <div style={{ fontSize: '0.875rem', fontWeight: 'bold', color: '#666' }}>Email Address</div>
                  {/* <div style={{ marginLeft: "251px" }}>{data.Email}</div> */}
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '10px' }}>
                  <div style={{ fontSize: '0.875rem', fontWeight: 'bold', color: '#666' }}>Pancard Number</div>
                  {/* <div style={{ marginLeft: "231px" }}>{data.PanCard}</div> */}
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '10px' }}>
                  <div style={{ fontSize: '0.875rem', fontWeight: 'bold', color: '#666' }}>Aadhar Card Number</div>
                  {/* <div style={{ marginLeft: "199px" }}>{data.AadharCard}</div> */}
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '10px' }}>
                  <div style={{ fontSize: '0.875rem', fontWeight: 'bold', color: '#666' }}>Nominee</div>
                  {/* <div style={{ marginLeft: "289px" }}>{accountOpen.Nominee}</div> */}
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '10px' }}>
                  <div style={{ fontSize: '0.875rem', fontWeight: 'bold', color: '#666' }}>Nominee Aadhar Card Number</div>
                  {/* <div style={{ marginLeft: "132px" }}>{accountOpen.NomineeAadharCard}</div> */}
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '10px' }}>
                  <div style={{ fontSize: '0.875rem', fontWeight: 'bold', color: '#666' }}>Address</div>
                  {/* <div style={{ marginLeft: "297px" }}>{accountOpen.Address}</div> */}
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '10px' }}>
                  <div style={{ fontSize: '0.875rem', fontWeight: 'bold', color: '#666' }}>Date of Birth</div>
                  {/* <div style={{ marginLeft: "268px" }}>{accountOpen.DOB}</div> */}
                </div>
              </div>
            </div>
          </div>
    </div>
  )
}

export default Ad_User_Profile
