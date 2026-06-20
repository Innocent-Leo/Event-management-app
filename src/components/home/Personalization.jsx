import React from "react";
import { VscEye } from "react-icons/vsc";

const Personalization = () => {
  return (
    <div className="bg-cyan-lightest my-8 flex flex-col gap-10 rounded-3xl p-8 font-medium">
      <div className="flex flex-col gap-2">
        <h1 className="title font-semibold">
          A personal experience like never before
        </h1>
        <p>
          Select your hobbies and other favourite activities to get suggestions
          based on what you love
        </p>
      </div>

      <div className="flex flex-wrap gap-4 [&_div]:rounded-full [&_div]:border [&_div]:px-6 [&_div]:py-2">
        <div>Badminton</div>
        <div>Cricket</div>
        <div>Music</div>
        <div>Cooking</div>
        <div>Traveling</div>
        <div>Dancing</div>
        <div>Adventure Sports</div>
        <div>Art</div>
        <div>Designing</div>
        <div>Politiccal Science</div>
        <div>Computer Science</div>
        <div>Basketball</div>
        <div>Party</div>
        <div>Singing</div>
        <div>EDM</div>
        <div>Fashion</div>
        <div>Dentistry</div>
        <div>Athletics</div>
      </div>

      <button className="bg-dark-cyan text-cyan-lightest flex items-center justify-center gap-2 self-start rounded-md px-6 py-2">
        <span>
          <VscEye />
        </span>
        See more
      </button>
    </div>
  );
};

export default Personalization;
