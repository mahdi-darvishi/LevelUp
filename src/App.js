import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

import HomePage from "../src/Components/Pages/HomePage/HomePage";
// import About from "../src/Components/Pages/About/About";
import Services from "../src/Components/Pages/Services/Services";
import Contact from "../src/Components/Pages/Contact/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/about" element={<About />} /> */}
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
