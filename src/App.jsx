import React from "react";

// react router dom
import { Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/home/Home";

import FeeDetails from "./pages/admission/FeeDetails";
import OnlineAdmission from "./pages/admission/OnlineAdmission";

import OurFaculty from "./pages/teacher/Teacher";
import Gallery from "./pages/gallery/Gallery";
import Contact from "./pages/contact/Contact";

import FAQ from "./pages/quickLinks/Faq";
import Achievements from "./pages/achievements/Achievements";
import PrivacyPolicy from "./pages/quickLinks/PrivacyPolicy";
import TermsAndConditions from "./pages/quickLinks/TermsAndConditions";

// Coming Soon page
import ComingSoon from "./pages/comingSoon/ComingSoon";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/fee-details" element={<FeeDetails />} />
      <Route path="/online-admission" element={<OnlineAdmission />} />

      <Route path="/our-faculty" element={<OurFaculty />} />
      <Route path="/our-gallery" element={<Gallery />} />
      <Route path="/contact-us" element={<Contact />} />

      <Route path="/faq" element={<FAQ />} />
      <Route path="/achievements" element={<Achievements />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms-conditions" element={<TermsAndConditions />} />

      {/* WILDCARD ROUTE */}
      <Route path="*" element={<ComingSoon />} />
    </Routes>
  );
}
