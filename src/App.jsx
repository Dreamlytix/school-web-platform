import React from "react";
import { Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/home/Home";
import Teacher from "./pages/teacher/Teacher";
import Gallery from "./pages/gallery/Gallery";
import Contact from "./pages/contact/Contact";
import Achievements from "./pages/achievements/Achievements";
import FeeDetails from "./pages/admission/FeeDetails";
import OnlineAdmission from "./pages/admission/OnlineAdmission";

import FAQ from "./pages/quickLinks/Faq";
import PrivacyPolicy from "./pages/quickLinks/PrivacyPolicy";
import TermsAndConditions from "./pages/quickLinks/TermsAndConditions";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/our-teachers" element={<Teacher />} />
      <Route path="/our-gallery" element={<Gallery />} />
      <Route path="/contact-us" element={<Contact />} />
      <Route path="/achievements" element={<Achievements />} />
      <Route path="/fee-details" element={<FeeDetails />} />
      <Route path="/online-admission" element={<OnlineAdmission />} />

      <Route path="/faq" element={<FAQ />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms-conditions" element={<TermsAndConditions />} />
    </Routes>
  );
}
