import React from "react";
import NavBar from "./components/ui/NavBar";
import Hero from "./components/home/Hero";
import EventsListing from "./components/home/EventsListing";
import Personalization from "./components/home/Personalization";
import PromotionalCard from "./components/home/PromotionalCard";

const App = () => {
  return (
    <div className="font-montserrat text-cyan-darkest">
      <NavBar />
      <Hero />
      <EventsListing />
      <Personalization />
      <PromotionalCard />
    </div>
  );
};

export default App;
