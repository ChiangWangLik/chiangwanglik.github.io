import React from "react";
import Navbar from "./components/javascripts/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/Home";
import Skills from "./components/pages/Skills";
import Experience from "./components/pages/Experience";
import AboutMe from "./components/pages/AboutMe";
// import Footer from "./components/javascripts/Footer";
import ScrollToTop from "./components/javascripts/ScrollToTop";

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" exact Component={Home} />
          <Route path="/skills" Component={Skills} />
          <Route path="/experience" Component={Experience} />
          <Route path="/about-me" Component={AboutMe} />
        </Routes>
        {/* <Footer /> */}
      </Router>
    </>
  );
}

export default App;
