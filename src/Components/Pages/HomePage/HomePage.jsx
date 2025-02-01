import React from "react";
import Navbar from "../../../../src/Components/Navigation/Navbar";
import HeroSection from "../../../../src/Components/HeroSection/HeroSection";
import Features from "../../Features/Features";
import CardComponent from "../../Price/CardComponent";
import CallToAction from "../../CallToAction/CallToAction";
import Review from "../../Review/Review";
import Footer from "../../Footer/footer";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Features />
      <CardComponent />
      <CallToAction />
      <Review />
      <Footer />
    </>
  );
};

export default HomePage;
