import React from "react";
import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import About from "../components/About";
import Features from "../components/Features";
import Tours from "../components/Tours";
import StoriesSection from "../components/StoriesSection";
import Book from "../components/Book";
import Footer from "../components/Footer";
import Popup from "../components/Popup";

function Landing() {
  return (
    <React.Fragment>
      <Navigation />
      <Hero />
      <main>
        <About />
        <Features />
        <Tours />
        <StoriesSection />
        <Book />
      </main>
      <Footer />
      <Popup />
    </React.Fragment>
  );
}

export default Landing;
