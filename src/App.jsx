import React from "react";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import Featuers from "./sections/Featuers";
import Pricing from "./sections/Pricing";

const App = () => {
  return (
    <main className="overflow-hidden">
      <Header />
      <Hero />
      <Featuers />
      <Pricing />
    </main>
  );
};

export default App;
