import React from "react";
import "../../App.css";
import "./About.css";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { Parallax } from "react-parallax";
import images from "../../image/image22.jpg";
import office from "../../image/office.jpeg";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center",
};
const insideStyles = {
  // background: "white",
  padding: 20,
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
};

const ImageOne = () => (
  <Parallax bgImage={images} strength={-200}>
    <div style={{ height: 500 }}>
      <div style={insideStyles} className="about">
        KNOW ABOUT US
      </div>
    </div>
  </Parallax>
);

function About() {
  return (
    <>
      <Navbar />

      <div>
        <ImageOne />
      </div>
<div className="wrap">
      {/* <div class="divider">
        <div class="shadow"></div>
      </div> */}

      <div className="about-content">
        <div className="our-mission">
          <h1>Our Mission</h1>
          <p>
            Design, Build, Attract, Ignite talent by connecting people with
            right job opportunity..
          </p>

          <h1>Who We Are ?</h1>
          <p>
            We are a young and dynamic startup working in various HR services.It
            aims at bringing right people at the right place. Our utmost
            priority is client satisfaction which can only be achieved by
            providing the best fit to their firm
          </p>
        </div>

        
      </div>

      
        <div className="exp">
          <h1>Extraordinary Experiences</h1>

          
          <p>
            We are made up with highly experienced people in the field of “head
            hunting” and “technology”. The organization has employees who have
            been IT and human resource professionals with more than 10+ years of
            experience, hence would be the best source to understand the
            customer requirements in terms of technology and competence.
          </p>
          <p>
            They have the ability to scrutinize the candidates with the first
            level of interview in behavioral, competence and technical skills
            which present only “cream candidates” to our clients.
          </p>
        </div>
      
</div>

      <div className="core">
        <h1>Our Core Values</h1>
        <div class="b-divider">
          <div class="shadow"></div>
        </div>

        <p>Following are core values</p>

        <ul>
          <li>Team Building</li>
          <li>Passion</li>
          <li>Excellence</li>
          <li>Integrity</li>
        </ul>
      </div>

      <Footer />
    </>
  );
}

export default About;
