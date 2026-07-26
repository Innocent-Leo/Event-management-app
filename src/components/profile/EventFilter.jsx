import React from "react";
import { PiSlidersHorizontal } from "react-icons/pi";

const EventFilter = ({ title }) => {
  return (
    <div className="flex items-center justify-between">
      <div>
        <div className="text-orange text-lg font-semibold">{title}</div>
        <div className="bg-light-orange mt-0.50 h-1.25 w-12 rounded-md"></div>
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

export default EventFilter;
