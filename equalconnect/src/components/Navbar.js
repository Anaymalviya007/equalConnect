import React, { useState } from "react";
import "./navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import Button from '@mui/material/Button';
import Lo from './equalLogo.png'
import { NavLink, Link, useNavigate } from "react-router-dom";



function Navbar() {

  const navigate = useNavigate();

  const navigateTOpage = (url) => {
    // 👇️ navigate to path
    navigate(url);
  };


  const [showMediaIcons, setShowMediaIcons] = useState(false);



  return (
    <>
      <nav className="main-nav">
        {/* 1st logo part  */}
        <div className="logo">
          {/* <i className="fa-solid fa-circle-nodes" /> */}
          <img src={Lo} id="lo" />
        </div>

        {/* 2nd menu part  */}
        <div
          className={showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"}>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">about</NavLink>
            </li>
            <li>
              <NavLink to="/service">services</NavLink>
            </li>
            {/* <li>
              <NavLink to="/post">Post</NavLink>
            </li> */}
            <li>
              <NavLink to="/contact">contact</NavLink>
            </li>
          </ul>
        </div>

        {/* 3rd social media links */}
        <div className="social-media">
          <ul className="social-media-desktop">
            <li>
              <Button id="sign" variant="contained" onClick={() => navigateTOpage("/signup")}>Signup</Button>
              <Button variant="contained" onClick={() => navigateTOpage("/login")}>LogIn</Button>
              
            </li>
          </ul>

          {/* hamburget menu start  */}
          <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu color="black" />
            </a>
          </div>
        </div>
      </nav>


    </>
  );
}

export default Navbar;
