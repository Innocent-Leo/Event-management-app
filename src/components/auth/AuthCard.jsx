import React from "react";
import { assets } from "../../assets/assets";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa6";
import Input from "../ui/Input";
import AuthExtras from "./AuthExtras";
import { Link } from "react-router";

const AuthCard = ({
  title,
  text,
  checkboxLabel,
  showForgotPassword,
  buttonLabel,
  linkLabel,
}) => {
  return (
    <div className="grid h-screen grid-cols-2 items-center justify-center">
      <div className="mx-auto flex flex-col gap-6 rounded-sm p-6 text-xs font-medium shadow-md">
        <div className="font-semibold [&>h1]:mb-3 [&>h1]:text-3xl">
          <h1 className="">{title}</h1>
          <p className="">{text}</p>
        </div>

        <form action="" className="flex flex-col gap-4">
          <Input type="email" id="email" placeholder="Email address" />
          <Input type="password" id="email" placeholder="Password" />

          <AuthExtras
            checkboxLabel={checkboxLabel}
            showForgotPassword={showForgotPassword}
          />

          <button
            type="submit"
            className="bg-orange text-cyan-lightest rounded-md py-2.5 text-lg"
          >
            {buttonLabel}
          </button>
        </form>

        <div className="relative">
          <hr className="border-[#f5f5f5]" />
          <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-2 text-[10px]">
            Or
          </p>
        </div>

        <div className="flex flex-col items-center justify-center gap-4 font-semibold">
          <div className="flex items-center justify-center gap-4 text-[10px] *:flex *:items-center *:justify-center *:gap-2 *:rounded-lg *:border *:border-[#d9d9d9] *:px-4 *:py-0.75">
            <div>
              <FcGoogle size={18} />
              <p>Sign in with Google</p>
            </div>

            <div>
              <FaApple size={20} />
              <p>Sign in with Apple</p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-2">
            <p>Don't have an account?</p>
            <Link to="/signup" className="text-dark-cyan font-medium">
              {linkLabel}
            </Link>
          </div>
        </div>
      </div>
      <div>
        <img
          className="h-screen rounded-l-4xl object-cover"
          src={assets.banners.splashImage}
          alt=""
        />
      </div>
    </div>
  );
};

export default AuthCard;
