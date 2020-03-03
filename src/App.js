import React from "react";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import About from "./components/About";
import Features from "./components/Features";
import Tours from "./components/Tours";
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
      </main>
    </div>
  );
}

export default App;
