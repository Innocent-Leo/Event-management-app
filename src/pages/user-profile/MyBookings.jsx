import React from "react";
import Filter from "../../components/profile/Filter";
import TicketsCard from "../../components/profile/TicketsCard";

const MyBookings = (placeholder) => {
  return (
    <div className="bg-light-cyan/20 relative mx-35 my-6 flex flex-col gap-6 rounded-3xl p-10">
      <Filter />
      <TicketsCard />
    </div>
  );
};

export default MyBookings;
