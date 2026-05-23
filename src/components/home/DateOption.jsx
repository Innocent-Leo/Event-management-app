import React from "react";

const DateOption = () => {
  return (
    <div className="bg-grey-0 flex items-center justify-center gap-9 py-12 font-medium">
      <div className="bg-light-cyan border-light-cyan rounded-full border px-4.5 py-2 text-white">
        Today
      </div>
      <div className="border-light-cyan rounded-full border px-4.5 py-2">
        Tomorrow
      </div>
      <div className="border-light-cyan rounded-full border px-4.5 py-2">
        This weekend
      </div>
      <div className="border-light-cyan rounded-full border px-4.5 py-2">
        Calendar
      </div>
    </div>
  );
};

export default DateOption;
