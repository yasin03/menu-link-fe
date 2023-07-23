import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

const UserTemplate = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default UserTemplate;
