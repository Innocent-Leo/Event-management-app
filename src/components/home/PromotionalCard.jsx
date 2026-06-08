import React from "react";
import { assets } from "../../assets/assets";

const PromotionalCard = () => {
  return (
    <div className="mx-42 my-16 flex flex-col gap-10">
      <div className="relative">
        <img
          src={assets.promoCard.promoCard1}
          alt=""
          className="h-135 w-full rounded-3xl object-cover"
        />

        <div className="absolute bottom-12.5 left-14 w-100 text-white *:not-last:mb-6">
          <h1 className="title font-semibold">
            You can now gift tickets to an event to your friend
          </h1>
          <p>Last minute gifting needs, from ₹799</p>

          <button className="bg-dark-cyan text-cyan-lightest flex items-center justify-center gap-2 self-start rounded-md px-6 py-2">
            Send a gift
          </button>
        </div>
      </div>

      <div className="relative">
        <img
          src={assets.promoCard.promoCard2}
          alt=""
          className="h-135 w-full rounded-3xl object-cover"
        />

        <div className="bg-cyan-darkest absolute bottom-18 rounded-r-3xl px-12 py-6 text-white *:not-last:mb-6">
          <h1 className="title font-semibold">Plan your event</h1>
          <p>Organize existing events and contribute in all the fun!</p>

          <button className="bg-dark-cyan text-cyan-lightest flex items-center justify-center gap-2 self-start rounded-md px-6 py-2">
            Organize an event
          </button>
        </div>
      </div>
    </div>
  );
};

export default PromotionalCard;
