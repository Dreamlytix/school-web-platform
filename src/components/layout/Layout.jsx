import React from "react";

// components
import Header from "../header/Header";
import Banner from "../banner/Banner";
import Footer from "../footer/Footer";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <Banner />

      {children}

      <Footer />
    </>
  );
}
