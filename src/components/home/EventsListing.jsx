import React from "react";
import { assets } from "../../assets/assets";
import { data } from "../../data";
import {
  IoHeartOutline,
  IoShareOutline,
  IoEllipsisVerticalSharp,
} from "react-icons/io5";

const EventsListing = () => {
  return (
    <div className="flex flex-col gap-8 px-42 py-8">
      <div className="text-grey-4 flex items-center gap-7 text-sm font-medium">
        <p className="text-light-cyan font-semibold underline decoration-2 underline-offset-4">
          All
        </p>
        <p>For you</p>
        <p>Free</p>
        <p>Online</p>
        <p>Music</p>
        <p>Sports & Games</p>
        <p>Politics</p>
        <p>Community</p>
      </div>

      <div className="bg-light-cyan/20 flex flex-col gap-6 rounded-3xl p-9">
        <div>
          <h1 className="text-orange font-semibold">Popular in Delhi</h1>
          <div className="bg-light-orange mt-0.50 h-1.25 w-11.5 rounded-md"></div>
        </div>

        <div className="grid grid-cols-4 gap-8">
          {data.popular.map((event) => (
            <div
              key={event.id}
              className="flex flex-col gap-2 rounded-xl bg-white p-3"
            >
              <div className="relative">
                <div className="overflow-hidden rounded-xl">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="h-30 w-full object-cover"
                  />
                </div>

                <div className="absolute top-3 right-3 flex items-center justify-center gap-2">
                  <span className="rounded-full bg-white p-1">
                    <IoShareOutline />
                  </span>
                  <span className="rounded-full bg-white p-1">
                    <IoHeartOutline />
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-2 font-medium">
                <div className="flex flex-col gap-1">
                  <div className="flex items-center justify-between">
                    <h2 className="font-semibold">
                      {event.title.length <= 17
                        ? event.title
                        : `${event.title.slice(0, 17)}...`}
                    </h2>
                    <IoEllipsisVerticalSharp className="-mr-1.5" />
                  </div>

                  <div className="flex flex-col gap-1.5 text-[9px] leading-2.5">
                    <p>
                      {event.day} &middot; {event.date} &middot; {event.time}
                    </p>
                    <p>{event.location}</p>
                    <div className="flex items-center justify-between">
                      <p className="decoration-grey-3 underline">
                        {event.username}
                      </p>
                      <p>{event.followers} followers</p>
                    </div>
                  </div>

                  <p className="py-1 text-[8px]">{event.attendance}</p>

                  <p className="text-[11px]">{event.content.slice(0, 83)}...</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-light-cyan/20 flex flex-col gap-6 rounded-3xl p-9">
        <div>
          <h1 className="text-orange font-semibold">More Events</h1>
          <div className="bg-light-orange mt-0.50 h-1.25 w-11.5 rounded-md"></div>
        </div>

        <div className="grid grid-cols-4 gap-8">
          {data.moreEvents.map((event) => (
            <div
              key={event.id}
              className="flex flex-col gap-2 rounded-xl bg-white p-3"
            >
              <div className="relative">
                <div className="overflow-hidden rounded-xl">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="h-30 w-full object-cover"
                  />
                </div>

                <div className="absolute top-3 right-3 flex items-center justify-center gap-2">
                  <span className="rounded-full bg-white p-1">
                    <IoShareOutline />
                  </span>
                  <span className="rounded-full bg-white p-1">
                    <IoHeartOutline />
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-2 font-medium">
                <div className="flex flex-col gap-1">
                  <div className="flex items-center justify-between">
                    <h2 className="font-semibold">
                      {event.title.length <= 17
                        ? event.title
                        : `${event.title.slice(0, 17)}...`}
                    </h2>
                    <IoEllipsisVerticalSharp className="-mr-1.5" />
                  </div>

                  <div className="flex flex-col gap-1.5 text-[9px] leading-2.5">
                    <p>
                      {event.day} &middot; {event.date} &middot; {event.time}
                    </p>
                    <p>{event.location}</p>
                    <div className="flex items-center justify-between">
                      <p className="decoration-grey-3 underline">
                        {event.username}
                      </p>
                      <p>{event.followers} followers</p>
                    </div>
                  </div>

                  <p className="py-1 text-[8px]">{event.attendance}</p>

                  <p className="text-[11px]">{event.content.slice(0, 83)}...</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventsListing;
