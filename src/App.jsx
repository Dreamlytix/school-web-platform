import React from "react";
import { Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/home/Home";
import Teacher from "./pages/teacher/Teacher";
import Gallery from "./pages/gallery/Gallery";
import Contact from "./pages/contact/Contact";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/our-teachers" element={<Teacher />} />
      <Route path="/our-gallery" element={<Gallery />} />
      <Route path="/contact-us" element={<Contact />} />
    </Routes>
  );
}
