<<<<<<< HEAD
import React from 'react';
import '../style-css/NotFoundPage.css'; // Import the CSS file

function NotFoundPage() {
  return (
    <div className="container">
=======
import React from 'react'
import '../style-css/NotFound.css'
import { NavLink } from 'react-router-dom'

function NotFound() {
  return (
    <div className='notfound'>
       <div className="container">
>>>>>>> 1dbede4efc738da5a9f3fd07808e4359d8c35236
      <section>
        <div className="container">
          <div className="text">
            <h1>Page Not Found</h1>
            <p>We can't seem to find the page you're looking for. Please check the URL for any typos.</p>
            <div className="input-box">
            </div>
            <ul className="menu">
<<<<<<< HEAD
              <li><a href="#">Go to Homepage</a></li>
              <li><a href="#">Visit our Blog</a></li>
              <li><a href="#">Contact support</a></li>
=======
              <li><NavLink to="/">Go to Homepage</NavLink></li>
              <li><NavLink to="#">Visit our Blog</NavLink></li>
              <li><NavLink to="/Contect">Contact support</NavLink></li>
>>>>>>> 1dbede4efc738da5a9f3fd07808e4359d8c35236
            </ul>
          </div>
          <div><img className="image" src="./IMAGES/errorimg.png" alt=""/></div>
        </div>
      </section>
    </div>
<<<<<<< HEAD
  );
}

export default NotFoundPage;
=======

    </div>
  )
}

export default NotFound
>>>>>>> 1dbede4efc738da5a9f3fd07808e4359d8c35236
