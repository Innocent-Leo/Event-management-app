import React from "react";
import { data } from "../../data";
import { assets } from "../../assets/assets";
import { FiDownload } from "react-icons/fi";

const TicketsCard = () => {
  return (
    <>
      {data.tickets.map((ticket) => (
        <div
          className="flex justify-between rounded-3xl bg-white px-10 py-7"
          key={ticket.id}
        >
          <div className="bg-grey-0 w-full rounded-l-lg px-4 py-6">
            <div className="flex gap-3">
              <img
                src={ticket.image}
                alt=""
                className="h-40 w-135 rounded-md"
              />

              <div className="flex w-full flex-col justify-between text-[10px] font-medium">
                <div>
                  <div className="mb-1 text-sm font-bold">
                    {ticket.eventName}
                  </div>
                  <div>{ticket.address}</div>
                  <div>
                    {ticket.day} &middot; {ticket.date} &middot; 19:00
                  </div>
                  <div>Quantity: {ticket.quantity}</div>
                  <div>Seat number: H 01, P 02</div>
                </div>

                <div className="flex flex-col gap-1.5 text-[9px] font-normal *:flex *:items-center *:justify-between">
                  <div>
                    <div>Ticket price</div>
                    <div>$800</div>
                  </div>
                  <div>
                    <div>Convenience fees + Taxes</div>
                    <div>$80</div>
                  </div>
                  <div className="border-cyan-darkest my-1 border-b border-dashed"></div>
                  <div className="font-bold">
                    <div>Amount Paid</div>
                    <div>$880</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-grey-0 border-cyan-darkest relative flex w-50 flex-col items-center justify-center rounded-r-lg border-l border-dashed text-[10px] font-medium">
            <span className="absolute -top-3 -left-3 h-6 w-6 rounded-full bg-white"></span>

            <span className="absolute -bottom-3 -left-3 h-6 w-6 rounded-full bg-white"></span>

            <img src={assets.qrCode} alt="qr-code" className="mb-1 w-18" />

            <div>BOOKING ID</div>
            <div className="text-xs">WQFCQ4X</div>

            <div className="mt-4 flex items-center justify-center gap-0.5 font-bold">
              <FiDownload strokeWidth={3} /> Download PDF
            </div>
          </div>

          <div className="text-dark-cyan ml-10 flex w-50 flex-col gap-6 text-xs font-medium *:underline">
            <div className="text-orange">Cancel booking</div>
            <div>Follow organizer</div>
            <div>Report event</div>
            <div>Report a scam</div>
          </div>
        </div>
      ))}
    </>
  );
};

export default TicketsCard;
