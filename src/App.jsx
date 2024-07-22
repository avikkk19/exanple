import React from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Pricing from "./components/fone";
import Projects from "./components/Projects";
import Tech from "./components/Tech";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Nav />
      <Hero />
      <Pricing />
      <Projects />
      <Tech />
      <Footer />
    </div>
  );
};

export default App;
