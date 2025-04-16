import React from "react";
import Navbar from "../../component/Navbar";
import Footer from "../../component/Footer";
import Banner from "../../component/Banner";
import Section from "../../component/Section";
import Cards from "../../component/Cards";

const Home = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <Section />
      <Cards />
      <Footer />
    </>
  );
};

export default Home;
