import Header from "compnents/Header/Header";
import Footer from "compnents/Footer/Footer";
import React from "react";

const Layout = ({ children }) => {
  return (
    <>
      <Header></Header>
      {children}
      <Footer></Footer>
    </>
  );
};

export default Layout;
