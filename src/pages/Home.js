import React from "react";
import AppHeader from "../components/AppHeader";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Benefits from "../components/Benefits";
import Stats from "../components/Stats";
import Work from "../components/Work";
import Testimonials from "../components/Testimonials";
import Offers from "../components/Offers";
import Team from "../components/Team";
import Contact from "../components/Contact";
import Blog from "../components/Blog";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <AppHeader />
      <Navbar />
      <Hero />
      <Services />
      <Benefits />
      <Stats />
      <Work />
      <Testimonials />
      <Offers />
      <Team />
      <Contact />
      <Blog />
      <Footer />
    </div>
  );
};

export default Home;
