import React from 'react';
import axle from "../../Logo/Images/axle.jpg"
import './Footer.css';

function Footer() {
  return (
    <div className="footerParentDiv">
      <div className="content">
        {/* <div>
          <div className="heading">
            <p>POPULAR LOCATIONS</p>
          </div>
          <div className="list">
            <ul>
              <li>Bengaluru</li>
              <li>Mumbai</li>
              <li>Chennai</li>
            </ul>
          </div>
        </div> */}

        <div>
          <div className="heading">
            <p>ABOUT US</p>
          </div>
          <div className="list">
            <ul>
              <li>Axle Machines</li>
              <li>Careers</li>
              <li>Contact Us :  axle.machines@gmail.com</li>
              {/* <li>OLXPeople</li> */}
            </ul>
          </div>
        </div>

        {/* <div>
          <div className="heading">
            <p>Vriddhi</p>
          </div>
          <div className="list">
            <ul>
              <li>Help</li>
              <li>Sitemap</li>
              <li>Legal & Privacy information</li>
            </ul>
          </div>
        </div> */}
      </div>
      <center>

        <div className="footer" >

          {/* <p>Other Countries Pakistan - South Africa - Indonesia</p> */}
          <p style={{ marginLeft: "600px" }}>Powered by Axle Machines

            <img src={axle} alt='axle' style={{ height: "30px", marginLeft: "10px" }}></img>
          </p>

        </div>
      </center>

    </div>
  );
}

export default Footer;
