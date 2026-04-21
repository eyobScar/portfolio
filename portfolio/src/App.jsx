import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import TechStack from "./Components/TechStack/TechStack";
import About from "./Components/About/About";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <TechStack />
    </div>
  );
};

export default App;
