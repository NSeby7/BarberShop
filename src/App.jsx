import React from "react";
import Hero from "./sections/Hero";
import Header from "./components/Header";
import WhyChoose from "./sections/WhyChoose";
import Pricing from "./sections/Pricing";
import Services from "./sections/Services";
import Gallery from "./sections/Gallery";
import Testimonial from "./sections/Testimonial";
import Footer from "./components/Footer";
import Contact from "./sections/Contact";

const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <WhyChoose />
      <Pricing />
      <Services />
      <Gallery />
      <Testimonial />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
