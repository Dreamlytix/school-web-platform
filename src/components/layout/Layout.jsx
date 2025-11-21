import React from "react";

// components
import Header from "../header/Header";
import Banner from "../banner/Banner";
import Footer from "../footer/Footer";

export default function Layout({ children, showBanner = true }) {
  return (
    <>
      <Header />

      <Banner showBanner={showBanner} />

      {children}
      <Footer />
    </>
  );
}
