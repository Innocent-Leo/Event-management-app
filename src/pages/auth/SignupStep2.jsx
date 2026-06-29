import React from "react";
import { SlArrowLeft, SlArrowDown } from "react-icons/sl";
import Input from "../../components/ui/Input";
import { Link } from "react-router";

const SignupStep2 = () => {
  return (
    <form className="mx-55 flex h-screen flex-col justify-center gap-6">
      <div className="self-start rounded-full p-2 shadow-md">
        <SlArrowLeft />
      </div>

      <div className="p-6 font-medium shadow-md">
        <div className="mb-6">
          <h1 className="mb-1 text-2xl font-semibold">
            We look out for you in any way possible
          </h1>
          <p>Let us make this journey as convenient for you as we can...</p>
        </div>

        <div className="flex flex-col gap-6 [&>div>h2]:mb-1 [&>div>h2]:font-semibold">
          <div>
            <h2>How do you rate yourself in terms of your current health?</h2>
            <div className="text-grey-4 [&>label>Input]:accent-orange flex items-center gap-4 text-sm">
              <label className="flex items-center gap-1">
                <Input
                  id="excellent"
                  type="radio"
                  className="size-4 shadow-none"
                />
                <span htmlFor="excellent">Excellent</span>
              </label>

              <label className="flex items-center gap-1">
                <Input id="good" type="radio" className="size-4 shadow-none" />
                <span htmlFor="good">Good</span>
              </label>

              <label className="flex items-center gap-1">
                <Input id="fair" type="radio" className="size-4 shadow-none" />
                <span htmlFor="fair">Fair</span>
              </label>

              <label className="flex items-center gap-1">
                <Input id="poor" type="radio" className="size-4 shadow-none" />
                <span htmlFor="poor">Poor</span>
              </label>

              <label className="flex items-center gap-1">
                <Input
                  id="naHealth"
                  type="radio"
                  className="size-4 shadow-none"
                />
                <span htmlFor="naHealth">Prefer not to answer</span>
              </label>
            </div>
          </div>

          <div>
            <h2>Do you have any disability?</h2>
            <div className="text-grey-4 [&>label>Input]:accent-orange flex items-center gap-4 text-sm">
              <label className="flex items-center gap-1">
                <Input id="yes" type="radio" className="size-4 shadow-none" />
                <span htmlFor="yes">Yes</span>
              </label>

              <label className="flex items-center gap-1">
                <Input id="no" type="radio" className="size-4 shadow-none" />
                <span htmlFor="no">No</span>
              </label>

              <label className="flex items-center gap-1">
                <Input
                  id="naDisability"
                  type="radio"
                  className="size-4 shadow-none"
                />
                <span htmlFor="naDisability">Prefer not to answer</span>
              </label>
            </div>
          </div>

          <div>
            <h2>Please select one from the options</h2>
            <div className="relative">
              <select
                name=""
                id=""
                className="text-grey-4 w-60 appearance-none rounded-sm rounded-b-xl p-3 text-sm shadow-md"
              >
                <option value="" selected>
                  Select
                </option>
              </select>

              <SlArrowDown
                size={10}
                className="absolute top-1/2 left-55 -translate-1/2"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-6 self-end font-medium">
        <div className="text-cyan-darkest">Skip</div>
        <Link
          to="/signup/step-3"
          className="text-cyan-lightest bg-dark-cyan w-35 rounded-sm py-2 text-center"
        >
          Next
        </Link>
      </div>
    </form>
  );
};

export default SignupStep2;
