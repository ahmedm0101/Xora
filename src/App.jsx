import React from "react";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import Featuers from "./sections/Featuers";
import Pricing from "./sections/Pricing";
import Faq from "./sections/Faq";
import Testimonials from "./sections/Testimonials";
import Download from "./sections/Download";
import Footer from "./sections/Footer";

const App = () => {
  return (
    <main className="overflow-hidden">
      <Header />
      <Hero />
      <Featuers />
      <Pricing />
      <Faq />
      <Testimonials />
      <Download />
      <Footer />
    </main>
  );
};

export default App;
