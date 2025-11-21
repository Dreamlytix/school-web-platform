import React from "react";
import { Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/home/Home";
import Contact from "./pages/contact/Contact";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact-us" element={<Contact />} />
    </Routes>
  );
}
