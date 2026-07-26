import React from "react";
import Input from "../ui/Input";
import { PiSlidersHorizontal } from "react-icons/pi";

const TicketFilter = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-6">
        <div className="font-semibold">Filter:</div>
        <div className="flex gap-6 *:w-50 *:rounded-full *:bg-white *:px-6 *:py-2 *:shadow-none *:placeholder:text-sm">
          <Input placeholder="Category" />
          <Input placeholder="Status" />
        </div>
      </div>
      <div className="bg-orange flex items-center justify-center rounded-md px-1.5">
        <PiSlidersHorizontal
          size={18}
          className="text-cyan-lightest rotate-x-180"
        />
      </div>
    </div>
  );
};

export default TicketFilter;
