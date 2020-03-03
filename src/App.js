import React from "react";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import About from "./components/About";
import Features from "./components/Features";
import Tours from "./components/Tours";
import Stories from "./components/Stories";
import Book from "./components/Book";
import Footer from "./components/Footer";
import Popup from "./components/Popup";
import "./css/style.css";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Hero />
      <main>
        <About />
        <Features />
        <Tours />
        <Stories />
        <Book />
      </main>
      <Footer />
      <Popup />
    </div>
  );
}

export default App;
