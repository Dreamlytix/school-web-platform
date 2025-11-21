import React from "react";

// components
import Header from "../header/Header";
import Banner from "../banner/Banner";
import Footer from "../footer/Footer";

export default function Layout({ children, showBanner = true, title }) {
  return (
    <>
      <Header />

      <Banner showBanner={showBanner} title={title} />

      {children}
      <Footer />
    </>
  );
}
