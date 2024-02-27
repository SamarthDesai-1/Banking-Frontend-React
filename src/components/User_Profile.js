import React from 'react'

function User_Profile() {
  return (
    <div>
          <div style={{minHeight: '100vh', backgroundColor: '#f3f4f6', display: 'grid', gridTemplateRows: 'auto 1fr auto', color: '#111', fontFamily: 'Arial, sans-serif'}}>
      <div style={{padding: '20px', maxWidth: '1200px', margin: '0 auto'}}>
        <div style={{display: 'flex', flexDirection: 'column', gap: '10px', paddingTop: '20px'}}>
          <div style={{display: 'flex', alignItems: 'center', gap: '20px' , width: '92vw'}}>
            <div style={{width: '60px', height: '60px', borderRadius: '50%', backgroundColor: '#ccc'}}></div>
            <div style={{display: 'grid', gridGap: '5px'}}>
              <h1 style={{fontSize: '1.5rem', fontWeight: 'bold', margin: 0}}>Walter White</h1>
              <p style={{fontSize: '0.875rem', margin: 0, color: '#666'}}>ID: 1234567890</p>
            </div>
            <div style={{marginLeft: 'auto'}}>
              <button style={{padding: '10px 20px', fontSize: '0.875rem', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px'}}>Edit Profile</button>
            </div>
          </div>
          <div style={{borderTop: '1px solid #ddd', borderBottom: '1px solid #ddd', padding: '20px 0'}}>
            <div style={{display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '10px'}}>
              <div style={{fontSize: '0.875rem', fontWeight: 'bold', color: '#666'}}>Email</div>
              <div style={{marginLeft:"218px"}}>walter@example.com</div>
            </div>
            <div style={{display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '10px'}}>
              <div style={{fontSize: '0.875rem', fontWeight: 'bold', color: '#666'}}>Phone</div>
              <div style={{marginLeft:"212px"}}>+1 (123) 456-7890</div>
            </div>
            <div style={{display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '10px'}}>
              <div style={{fontSize: '0.875rem', fontWeight: 'bold', color: '#666'}}>Address</div>
              <div style={{marginLeft:"200px"}}>308 Negra Arroyo Lane, Albuquerque, New Mexico</div>
            </div>
          </div>
        </div>
      </div>
      <div style={{borderTop: '1px solid #ddd', padding: '20px 0'}}>
        <div style={{padding: '0 20px', maxWidth: '1200px', margin: '0 auto'}}>
          <h2 style={{fontSize: '1.25rem', fontWeight: 'bold', margin: '0 0 10px'}}>Account Details</h2>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px'}}>
            <div style={{display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '10px'}}>
              <div style={{fontSize: '0.875rem', fontWeight: 'bold', color: '#666'}}>Account Number</div>
              <div style={{marginLeft:"180px"}}>1234567890</div>
            </div>
            <div style={{display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '10px'}}>
              <div style={{fontSize: '0.875rem', fontWeight: 'bold', color: '#666'}}>Account Type</div>
              <div style={{marginLeft:"180px"}}>Checking</div>
            </div>
            <div style={{display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '10px'}}>
              <div style={{fontSize: '0.875rem', fontWeight: 'bold', color: '#666'}}>Balance</div>
              <div style={{marginLeft:"244px"}}>$5,432.10</div>
            </div>
          </div>
        </div>
      </div>
      <div style={{padding: '20px', maxWidth: '1200px', margin: '0 auto', width: '92vw'}}>
        <div>
          <h2 style={{fontSize: '1.25rem', fontWeight: 'bold', margin: '0 0 10px'}}>Transaction History</h2>
          <div style={{overflowX: 'auto'}}>
            <table class="table table-striped table-hover">
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
        </div>
      </div>
      <div style={{borderTop: '1px solid #ddd', padding: '20px 0'}}>
        <div style={{padding: '0 20px', maxWidth: '1200px', margin: '0 auto'}}>
          <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <div>
              <button style={{padding: '10px 20px', fontSize: '0.875rem', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px'}}>Transfer Funds</button>
            </div>
            <div>
              <button style={{padding: '10px 20px', fontSize: '0.875rem', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px'}}>View Statements</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    </div>
  )
}

export default User_Profile
