import React from "react";
import { assets } from "../../assets/assets";

const Categories = () => {
  return (
    <div className="flex flex-col gap-10 py-8">
      <div>
        <h1 className="text-orange title font-semibold">Categories</h1>
        <div className="bg-light-orange mt-0.50 h-1.25 w-16.5 rounded-md"></div>
      </div>

      <div className="flex flex-col gap-10 font-medium [&_img]:w-30">
        <div className="flex items-center justify-between">
          <div className="flex flex-col items-center justify-center gap-2">
            <img src={assets.categories.Music} alt="" />
            <p>Music</p>
          </div>

          <div className="flex flex-col items-center justify-center gap-2">
            <img src={assets.categories.SportsGames} alt="" />
            <p>Sports & Games</p>
          </div>

          <div className="flex flex-col items-center justify-center gap-2">
            <img src={assets.categories.FoodDrink} alt="" />
            <p>Food & Drink</p>
          </div>

          <div className="flex flex-col items-center justify-center gap-2">
            <img src={assets.categories.TravelTourism} alt="" />
            <p>Travel & Tourism</p>
          </div>

          <div className="flex flex-col items-center justify-center gap-2">
            <img src={assets.categories.Health} alt="" />
            <p>Health & Hygiene</p>
          </div>
        </div>

        <div className="flex items-center justify-between px-14">
          <div className="flex flex-col items-center justify-center gap-2">
            <img src={assets.categories.VisualArts} alt="" />
            <p>Performing & Visual Arts</p>
          </div>

          <div className="flex flex-col items-center justify-center gap-2">
            <img src={assets.categories.Education} alt="" />
            <p>Education</p>
          </div>

          <div className="flex flex-col items-center justify-center gap-2">
            <img src={assets.categories.Politics} alt="" />
            <p>Politics</p>
          </div>

          <div className="flex flex-col items-center justify-center gap-2">
            <img src={assets.categories.Community} alt="" />
            <p>Community</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
