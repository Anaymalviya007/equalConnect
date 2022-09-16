import React from "react";
import "./HomePage.css";
import Navbar from "../Navbar";
import images from "../../image/image2.jpg";
import image1 from "../../image/image34.jpg";
import { Parallax } from "react-parallax";
import Footer from "../Footer";
import Svg from '../Svg'
import client from '../../image/client.png'






const styles = {
  fontFamily: "sans-serif",
  textAlign: "center",
};
const insideStyles = {
  padding: 20,
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
};

const ImageOne = () => (
  <Parallax bgImage={images} strength={-200}>
    <div style={{ height: 700 }}>
      <div style={insideStyles} className="about">
          <Svg />
          <h4 className="hrs"> HR Services</h4>
      </div>
    </div>
  </Parallax>
);


const ImageTwo = () => (
  <Parallax bgImage={image1} strength={-200}>
    <div style={{ height: 800 }} >
      <div style={insideStyles} >

      <div className="content">
       <div className="img-txt3" id="why">WHY US</div>

      <div className="img-txt3">
        <p >
          We are proficient at quickly and efficiently matching the right
          candidates to the right jobs by offering wide range of services. Most
          reliable solutions while working in to close proximity with clients.
        </p>
         <p >
           1. For employers, We have technical panel with 10+ experience which
           will understand requirements clearly and same will be pass to
           recruiting team, that means we offer you proven winners who best fits
           your corporate culture and job requirements. We provide the services
           for the most competitive prices in market
         </p>
         <p>
           2. For employees, we have the contacts, knowledge, experience and
           insights to get you place at right place
         </p>
       </div>
     </div>
          
      </div>
    </div>
  </Parallax>
);




function HomePage() {
  return (
    <>
      <Navbar />

      <div>
        <ImageOne />
      </div>

      {/* SECOND SECTION */}

      <div>
      <div className="text-box">
        “If you think it's expensive to hire a professional, wait until you hire
        by equalConnect”
        <div className="text-box">Join hands</div>
      </div>

      <div className="text-box2">CLIENT'S</div>

      <div class="h-divider">
        <div class="shadow"></div>
      </div>


          <div className="cli">
              <img src={client} />
              </div>
      </div>


    




      








      {/* WHY US SECTION */}
      <div >
        <ImageTwo />
      </div>

      {/* STORY */}

      <div className="story">Few Success STORY</div>
      
      <div className='story1'>
        equalConnect team placed various candidates directly as well as using
        channel partner in various IT MNC….
      </div>

      <Footer />
    </>
  );
}

export default HomePage;
