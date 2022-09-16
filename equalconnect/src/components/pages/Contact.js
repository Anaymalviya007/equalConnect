import React from "react";
import "../../App.css";
import Navbar from "../Navbar";
import Footer from "../Footer";
import "./Contact.css";
import images from "../../image/image20.jpg";
import { Parallax } from "react-parallax";
import Fcontact from '../Fcontact';

const insideStyles = {
  // background: "white",
  padding: 20,
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
};

const ImageOne = () => (
  <Parallax bgImage={images} strength={500}>
    <div style={{ height: 500 }}>
      <div style={insideStyles} className="about" id="t">
        CONTACT US
      </div>
    </div>
  </Parallax>
);

function Contact() {
  return (
    <>
      <Navbar />

      <div>
        <ImageOne />
      </div>







      <div className="text-box-ct">

        <form className="for">     {/* value="Send Message" */}
            <h1>Contact Us</h1>
            <p>Please take a moment to get in touch, we will get back to you shortly.</p>

            <div class="column">
                <label for="the-name">Your Name</label>
                <input type="text" name="name" id="the-name"/>

                <label for="the-email">Email Address</label>
                <input type="email" name="email" id="the-email"/>

                <label for="the-phone">Phone Number</label>
                <input type="tel" name="phone" id="the-phone"/>
            </div>

              <div class="column">
                <label for="the-message">Message</label>
                <textarea name="message" id="the-message"></textarea>
                <input type="submit" value="Send Message"/>
              </div>
          </form>
          
      </div>


        <div>
          <Fcontact />
        </div>




      <div className="info">
        <h1>CONTACT INFO</h1>
        <h3>Email Us</h3>
        <p>hr@equalconnect.in</p>
        <h3>Address 1 : (Headquarter)</h3>
        <p>Gaana, Near RNSIT College, R.R. Nagar , Bangalore,K.A. 560098,Indore</p>
       
        <h3>Address 2 :</h3>
        <p>355-B Amrit Palace, Nipania, Indore 452010,India</p>
        <h3>Call Us</h3>
        <p>+91-9540316917</p>
      </div>

      <Footer />
    </>
  );
}

export default Contact;
