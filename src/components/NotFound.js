import React from 'react'
import '../style-css/NotFound.css'
import { NavLink } from 'react-router-dom'

function NotFound() {
  return (
    <div className='notfound'>
       <div className="container">
      <section>
        <div className="container">
          <div className="text">
            <h1>Page Not Found</h1>
            <p>We can't seem to find the page you're looking for. Please check the URL for any typos.</p>
            <div className="input-box">
            </div>
            <ul className="menu">
              <li><NavLink to="/">Go to Homepage</NavLink></li>
              <li><NavLink to="#">Visit our Blog</NavLink></li>
              <li><NavLink to="/Contect">Contact support</NavLink></li>
            </ul>
          </div>
          <div><img className="image" src="./IMAGES/errorimg.png" alt=""/></div>
        </div>
      </section>
    </div>

    </div>
  )
}

export default NotFound;
