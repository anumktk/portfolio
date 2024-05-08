import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Components/Home";
import Aboutme from "../Components/Aboutme";
import Experience from "../Components/Experience";
import Skills from "../Components/Skills";
import Footer from "./Footer";
import MainPage from "./MainPage";
import Bot from "./Bot";
import Projects2 from "./Projects2";
import Navbar2 from "./Navbar2";
import Testimonials from "./Testimonials";
import Certifications from "./Certifications";

const Router = () => {
  return (
    <div>
      <BrowserRouter>
        {/* <Navbar /> */}
        <Navbar2 />
        <Bot />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<Aboutme />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects2" element={<Projects2 />} />
          <Route path="/Testimonials" element={<Testimonials />} />
          <Route path="/Certifications" element={<Certifications />} />
        </Routes>
        <MainPage />
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default Router;
