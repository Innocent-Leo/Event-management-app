import React from "react";
import TicketFilter from "../../components/profile/TicketFilter";
import TicketsCard from "../../components/profile/TicketsCard";

const MyBookings = (placeholder) => {
  return (
    <div className="bg-light-cyan/20 relative mx-35 my-6 flex flex-col gap-6 rounded-3xl p-10">
      <TicketFilter />
      <TicketsCard />
    </div>
  );
};

export default MyBookings;
