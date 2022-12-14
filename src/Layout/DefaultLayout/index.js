import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const DefaultLayout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="main-container">{children}</div>
      <Footer />
    </>
  );
};

export default DefaultLayout;
