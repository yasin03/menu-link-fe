import React from "react";
import Header from "../components/header/Header";
import Banner from "../components/home/Banner";
import AboutSection from "../components/home/AboutSection";
import InfoSection from "../components/home/InfoSection";
import OfferSection from "../components/home/OfferSection";
import Footer from "../components/footer/Footer";

const HomePage = () => {
  return (
    <>
      <Banner />
      <AboutSection />
      <InfoSection />
      <OfferSection />
    </>
  );
};

export default HomePage;
