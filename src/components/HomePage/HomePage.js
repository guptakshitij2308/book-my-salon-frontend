import React from "react";
import ParticlesBackground from "../ParticlesBackground";
import Card from "./Card/Card";
// import BookMySlot from "./components/BookMySlot";
import Testimonials from "./Testimonials/Testimonials";
// import Footer from "./components/Footer";
import AboutUs from "./AboutUs/AboutUs";
import ContactForm from "./ContactUs/ContactForm";
import Features from "./Features/Features";

const HomePage = () => {
  return (
    <div>
      <ParticlesBackground />
      {/* <Navbar /> */}
      <div>
        <Card />
      </div>
      <AboutUs />
      <Features />
      <Testimonials />
      <ContactForm />
      {/* <Footer /> */}
    </div>
  );
};

export default HomePage;