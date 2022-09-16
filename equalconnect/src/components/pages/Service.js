import React from "react";
import "../../App.css";
import Navbar from "../Navbar";
import Footer from "../Footer";
import "./Service.css";
import images from "../../image/image9.jpg";
import { Parallax } from "react-parallax";

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
  <Parallax bgImage={images} strength={-300}>
    <div style={{ height: 500 }}>
      <div style={insideStyles} className="about">
        SERVICES
      </div>
    </div>
  </Parallax>
);

function Service() {
  return (
    <>
      <Navbar />

      <div>
        <ImageOne />
      </div>

      <div className="text-box2">
        IT'S TIME TO HIRE BEST <br />
        QUALITY OF CANDIDATE'S
      </div>

      <div className="b-divider">
        <div className="shadow"></div>
      </div>

      <div className="right-pos">You Landed at the right place</div>
      <div className="body">
        <div className="row1-container">
          <div className="box box-down cyan">
            <h2>Resume Writing</h2>
            <p>Our expert write's best resume for candidates as per industry</p>
            <img
              src="https://assets.codepen.io/2301174/icon-supervisor.svg"
              alt=""
            />
          </div>

          <div className="box red">
            <h2>Staffing</h2>
            <p>
              We not only provide recruitment services to our clients, but also
              help in branding the same
            </p>
            <img
              src="https://assets.codepen.io/2301174/icon-team-builder.svg"
              alt=""
            />
          </div>

          <div className="box box-down blue">
            <h2>Training</h2>
            <p>
              {" "}
              We provide training on following topics for more detail Kindly
              Drop us a mail <br />
              1. Telecom Domain -BSS
              <br />
              2. GoLang Programming
              <br />
              3. C++/C Programming
              <br />
              4. Design Patterns (C++)
            </p>
            <img
              src="https://assets.codepen.io/2301174/icon-calculator.svg"
              alt=""
            />
          </div>
        </div>
        <div className="row2-container">
          <div className="box orange">
            Name
            <h2>Executive Search</h2>
            <p>Head of Deptts, VPs, CxOs, Directors hiring</p>
            <img
              src="https://assets.codepen.io/2301174/icon-karma.svg"
              alt=""
            />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Service;
