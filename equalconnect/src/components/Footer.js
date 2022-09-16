import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <div className="pg-footer">
      <footer className="footer">
        <svg
          className="footer-wave-svg"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 100"
          preserveAspectRatio="none"
        >
          <path
            className="footer-wave-path"
            d="M851.8,100c125,0,288.3-45,348.2-64V0H0v44c3.7-1,7.3-1.9,11-2.9C80.7,22,151.7,10.8,223.5,6.3C276.7,2.9,330,4,383,9.8 c52.2,5.7,103.3,16.2,153.4,32.8C623.9,71.3,726.8,100,851.8,100z"
          ></path>
        </svg>



        <div className="footer-content">
          <div className="footer-content-column">
            <div className="footer-logo">
              <Link className="footer-logo-link" to="/">
                <span className="hidden-link-text">LOGO</span>
                <h1>equalConnect</h1>
              </Link>
            </div>
            <div className="footer-menu">
              {/* <h2 className="footer-menu-name"> equalConnect</h2> */}
              {/* <ul id="menu-get-started" className="footer-menu-list">
                <li className="menu-item menu-item-type-post_type menu-item-object-product">
                  <a href="#">Start</a>
                </li>
                <li className="menu-item menu-item-type-post_type menu-item-object-product">
                  <a href="#">Documentation</a>
                </li>
              </ul> */}
            </div>
          </div>



          <div className="footer-content-column">
            <div className="footer-menu">
              <h2 className="footer-menu-name"> Address</h2>
              <ul id="menu-legal" className="footer-menu-list">
                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-privacy-policy menu-item-170434">
                  <a href="https://goo.gl/maps/2TMqrjPZcoC1UU8y5">Gaana,Near RNSIT college,Channasandra, Bangalore, India,560098</a>
                </li>
              </ul>
            </div>
          </div>




          <div className="footer-content-column">
            <div className="footer-menu">
              <h2 className="footer-menu-name"> Quick Links</h2>
              <ul id="menu-quick-links" className="footer-menu-list">
                <li className="menu-item menu-item-type-custom menu-item-object-custom">
                  <Link  to="/about">
                    About
                  </Link>
                </li>
                <li className="menu-item menu-item-type-custom menu-item-object-custom">
                  <Link  to="/service">
                    Services
                  </Link>
                </li>
                {/* <li className="menu-item menu-item-type-post_type menu-item-object-page">
                  <a href="#">Post</a>
                </li> */}
                <li className="menu-item menu-item-type-post_type menu-item-object-page">
                  <Link  to="/contact">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-content-column">
            <div className="footer-call-to-action">
              <h2 className="footer-call-to-action-title"> Let's Chat</h2>
              <p className="footer-call-to-action-description">
                Have a support question?
              </p>
              <Link
                className="footer-call-to-action-button button"
                to="/contact"
                target="_self"
              >
                
                Get in Touch
              </Link>
            </div>


            <div className="footer-call-to-action">
              <h2 className="footer-call-to-action-title"> Contact Us</h2>
              <p className="footer-call-to-action-link-wrapper">
              
                <a
                  className="footer-call-to-action-link"
                  href="tel:0124-64XXXX"
                  target="_self"
                >
                  <h3>+91 9540316917</h3><br/>
                  <h3>hr@equalconnect.in</h3>
                </a>
              </p>
            </div>
          </div>

        </div>

        <div className="footer-copyright">
          <div className="footer-copyright-wrapper">
            <p className="footer-copyright-text">
              <a className="footer-copyright-link" href="#" target="_self">
              Copyright © 2022 equalConnect
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
