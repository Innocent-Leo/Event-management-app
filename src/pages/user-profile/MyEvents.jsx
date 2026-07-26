import React from "react";
import EventsCard from "../../components/profile/EventsCard";
import { data } from "../../data";
import EventFilter from "../../components/profile/EventFilter";

const MyEvents = () => {
  return (
    <div className="bg-light-cyan/20 relative mx-35 my-6 flex flex-col gap-12 rounded-3xl p-10">
      <div className="flex flex-col gap-6">
        <EventFilter title={"Upcoming"} />
        <EventsCard events={data.events.upcoming} />
      </div>

      <div className="flex flex-col gap-6">
        <EventFilter title={"Older"} />
        <EventsCard events={data.events.older} />
      </div>
    </div>
  );
};

export default MyEvents;
