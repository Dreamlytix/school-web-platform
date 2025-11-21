import React from "react";
import { Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/home/Home";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}
