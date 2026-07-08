import React from "react";
import { SlArrowLeft } from "react-icons/sl";
import Input from "../../components/ui/Input";
import { Link } from "react-router";

const SignupStep1 = () => {
  return (
    <form className="mx-55 flex h-screen flex-col justify-center gap-6">
      <div className="self-start rounded-full p-2 shadow-md">
        <SlArrowLeft />
      </div>

      <div className="p-6 font-medium shadow-md">
        <div className="mb-6">
          <h1 className="mb-1 text-2xl font-semibold">
            Let us get to know you better
          </h1>
          <p>
            We will use this information to personalize your experience and
            cater for individual needs.
          </p>
        </div>

        <div className="flex flex-col gap-6 [&>div>h2]:mb-1 [&>div>h2]:font-semibold">
          <div>
            <h2>What is your date of birth?</h2>
            <Input
              type="date"
              className="text-grey-4 rounded-sm rounded-b-xl p-2 text-sm shadow-md"
            />
          </div>

          <div>
            <h2>Please specify your gender</h2>
            <div className="text-grey-4 flex items-center gap-4 text-sm">
              <div className="flex items-center gap-1">
                <Input id="male" type="radio" className="size-4 shadow-none" />
                <label htmlFor="male">Male</label>
              </div>

              <div className="flex items-center gap-1">
                <Input
                  id="female"
                  type="radio"
                  className="size-4 shadow-none"
                />
                <label htmlFor="female">Female</label>
              </div>

              <div className="flex items-center gap-1">
                <Input id="other" type="radio" className="size-4 shadow-none" />
                <label htmlFor="other">Other</label>
              </div>

              <div className="flex items-center gap-1">
                <Input
                  id="naGender"
                  type="radio"
                  className="size-4 shadow-none"
                />
                <label htmlFor="naGender">Prefer not to answer</label>
              </div>
            </div>
          </div>

          <div>
            <h2>Please specify your relationship status</h2>
            <div className="text-grey-4 flex items-center gap-4 text-sm">
              <div className="flex items-center gap-1">
                <Input
                  id="single"
                  type="radio"
                  className="size-4 shadow-none"
                />
                <label htmlFor="single">Single</label>
              </div>

              <div className="flex items-center gap-1">
                <Input
                  id="married"
                  type="radio"
                  className="size-4 shadow-none"
                />
                <label htmlFor="married">Married</label>
              </div>

              <div className="flex items-center gap-1">
                <Input
                  id="naRelationship"
                  type="radio"
                  className="size-4 shadow-none"
                />
                <label htmlFor="naRelationship">Prefer not to answer</label>
              </div>
            </div>
          </div>

          <div>
            <h2>Do you have any kids?</h2>
            <div className="text-grey-4 flex items-center gap-4 text-sm">
              <div className="flex items-center gap-1">
                <Input id="yes" type="radio" className="size-4 shadow-none" />
                <label htmlFor="yes">Yes</label>
              </div>

              <div className="flex items-center gap-1">
                <Input id="no" type="radio" className="size-4 shadow-none" />
                <label htmlFor="no">No</label>
              </div>

              <div className="flex items-center gap-1">
                <Input
                  id="naKids"
                  type="radio"
                  className="size-4 shadow-none"
                />
                <label htmlFor="naKids">Prefer not to answer</label>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-6 self-end font-medium">
        <div className="text-cyan-darkest">Skip</div>
        <Link
          to="../step-2"
          className="text-cyan-lightest bg-dark-cyan w-35 rounded-sm py-2 text-center"
        >
          Next
        </Link>
      </div>
    </form>
  );
};

export default SignupStep1;
