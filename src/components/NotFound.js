import React from 'react';
import '../style-css/NotFoundPage.css'; // Import the CSS file

function NotFoundPage() {
  return (
    <div className="container">
      <section>
        <div className="container">
          <div className="text">
            <h1>Page Not Found</h1>
            <p>We can't seem to find the page you're looking for. Please check the URL for any typos.</p>
            <div className="input-box">
            </div>
            <ul className="menu">
              <li><a href="#">Go to Homepage</a></li>
              <li><a href="#">Visit our Blog</a></li>
              <li><a href="#">Contact support</a></li>
            </ul>
          </div>
          <div><img className="image" src="./IMAGES/errorimg.png" alt=""/></div>
        </div>
      </section>
    </div>
  );
}

export default NotFoundPage;