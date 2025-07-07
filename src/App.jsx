import React from "react";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import Featuers from "./sections/Featuers";
import Pricing from "./sections/Pricing";
import Faq from "./sections/Faq";
import Testimonials from "./sections/Testimonials";

const App = () => {
  return (
    <main className="overflow-hidden">
      <Header />
      <Hero />
      <Featuers />
      <Pricing />
      <Faq />
      <Testimonials />
    </main>
  );
};

export default App;
