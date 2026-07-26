import React from "react";
import { HiOutlineDotsVertical, HiOutlineCurrencyDollar } from "react-icons/hi";
import { TbArrowBearRight2 } from "react-icons/tb";
import {
  IoCalendarClearOutline,
  IoLocationOutline,
  IoShareOutline,
} from "react-icons/io5";

const EventsCard = ({ events }) => {
  return (
    <>
      {events.map((event) => (
        <div
          key={event.id}
          className="flex items-center justify-center gap-4 rounded-lg bg-white p-4"
        >
          <div className="relative">
            <img
              src={event.image}
              alt=""
              className="h-30 w-200 rounded-lg object-cover"
            />

            <div className="absolute top-3 right-3 rounded-full bg-white p-1">
              <IoShareOutline />
            </div>
          </div>

          <div className="flex w-full flex-col justify-between">
            <div className="text-xs">
              <div>
                <div className="flex justify-between font-bold">
                  <div className="text-sm">{event.eventName}</div>
                  <HiOutlineDotsVertical size={18} strokeWidth={3} />
                </div>
                <div className="text-[10px] font-semibold underline">Music</div>
              </div>

              <div className="mt-2 *:flex *:items-center *:gap-2 *:not-last:mb-1">
                <div>
                  <TbArrowBearRight2 size={14} />
                  <div>{event.invitation}</div>
                </div>

                <div>
                  <IoCalendarClearOutline size={14} />
                  <div>Friday &middot; 25th January 2024 &middot; 19:00</div>
                </div>

                <div>
                  <IoLocationOutline size={14} />
                  <div>{event.location}</div>
                </div>

                <div>
                  <HiOutlineCurrencyDollar size={14} strokeWidth={1} />

                  <div>$20</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default EventsCard;
