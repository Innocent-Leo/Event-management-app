import React from "react";
import NavBar from "./components/ui/NavBar";
import Hero from "./components/home/Hero";
import EventsListing from "./components/home/EventsListing";

const App = () => {
  return (
    <div className="font-montserrat text-cyan-darkest">
      <NavBar />
      <Hero />
      <EventsListing />
    </div>
  );
};

export default App;
