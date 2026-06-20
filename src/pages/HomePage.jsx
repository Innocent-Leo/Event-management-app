import React from "react";
import Hero from "../components/home/Hero";
import EventsListing from "../components/home/EventsListing";
import Personalization from "../components/home/Personalization";
import PromotionalCard from "../components/home/PromotionalCard";
import Testimonials from "../components/home/Testimonials";

const HomePage = () => {
  return (
    <>
      <Hero />
      <EventsListing />
      <Personalization />
      <PromotionalCard />
      <Testimonials />
    </>
  );
};

export default HomePage;
