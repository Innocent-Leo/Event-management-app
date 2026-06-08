import React from "react";
import NavBar from "./components/ui/NavBar";
import Hero from "./components/home/Hero";
import EventsListing from "./components/home/EventsListing";
import Personalization from "./components/home/Personalization";
import PromotionalCard from "./components/home/PromotionalCard";
import Testimonials from "./components/home/Testimonials";

const App = () => {
  return (
    <div className="font-montserrat text-cyan-darkest">
      <NavBar />
      <Hero />
      <EventsListing />
      <Personalization />
      <PromotionalCard />
      <Testimonials />
    </div>
  );
};

export default App;
