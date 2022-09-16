import React from "react";
import { Switch, Route, Routes } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import About from "./components/pages/About";
import Service from "./components/pages/Service";
import Contact from "./components/pages/Contact";

import Signup from "./components/pages/signuplogin/Signup";
import Login from "./components/pages/signuplogin/Login";

const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={ <HomePage />}/>


      <Route path="/about" element={ <About />}/>


      <Route path="/service" element={ <Service />}/>


      <Route path="/contact" element={ <Contact />}/>


      <Route path="/signup" element={ <Signup />}/>

      <Route path="/login" element={ <Login />}/>

    </Routes>
  );
};

export default App;
