import React from "react";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import Featuers from "./sections/Featuers";

const App = () => {
  return (
    <main className="overflow-hidden">
      <Header />
      <Hero />
      <Featuers />
    </main>
  );
};

export default App;
