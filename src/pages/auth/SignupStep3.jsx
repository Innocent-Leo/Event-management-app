import React from "react";
import { SlArrowLeft, SlArrowDown } from "react-icons/sl";
import Input from "../../components/ui/Input";
import { Link } from "react-router";

const SignupStep3 = () => {
  return (
    <form className="mx-55 flex h-screen flex-col justify-center gap-6">
      <div className="self-start rounded-full p-2 shadow-md">
        <SlArrowLeft />
      </div>

      <div className="p-6 font-medium shadow-md">
        <div className="mb-6">
          <h1 className="mb-1 text-2xl font-semibold">
            Good job! You're just one step away
          </h1>
          <p>
            We want to serve you based on where you are located and what you
            like...
          </p>
        </div>

        <div className="flex flex-col gap-6 [&>div>h2]:mb-1 [&>div>h2]:font-semibold">
          <div>
            <h2>Select your location</h2>
            <div className="relative">
              <select
                defaultValue=""
                className="text-grey-4 w-60 appearance-none rounded-sm rounded-b-xl p-3 text-sm shadow-md"
              >
                <option value="">Select</option>
              </select>

              <SlArrowDown
                size={10}
                className="absolute top-1/2 left-55 -translate-1/2"
              />
            </div>
          </div>

          <div>
            <h2>Tell us about your hobbies</h2>
            <div className="flex flex-col gap-2 text-sm [&>div]:flex [&>div]:w-full [&>div]:justify-between [&>div>div]:rounded-full [&>div>div]:border [&>div>div]:px-4.5 [&>div>div]:py-1.5">
              <div>
                <div>Label</div>
                <div>Label</div>
                <div>Label</div>
                <div>Label</div>
                <div>Label</div>
                <div>Label</div>
                <div>Label</div>
              </div>
              <div>
                <div>Label</div>
                <div>Label</div>
                <div>Label</div>
                <div>Label</div>
                <div>Label</div>
                <div>Label</div>
                <div>Label</div>
              </div>
              <div>
                <div>Label</div>
                <div>Label</div>
                <div>Label</div>
                <div>Label</div>
                <div>Label</div>
                <div>Label</div>
                <div>Label</div>
              </div>
              <div>
                <div>Label</div>
                <div>Label</div>
                <div>Label</div>
                <div>Label</div>
                <div>Label</div>
                <div>Label</div>
                <div>Label</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-6 self-end font-medium">
        <div className="text-cyan-darkest">Skip</div>
        <Link
          to="/"
          className="text-cyan-lightest bg-dark-cyan w-35 rounded-sm py-2 text-center"
        >
          Finish up
        </Link>
      </div>
    </form>
  );
};

export default SignupStep3;
