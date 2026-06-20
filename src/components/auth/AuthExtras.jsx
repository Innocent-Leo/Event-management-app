import React from "react";
import Input from "../ui/Input";

const AuthExtras = ({ showForgotPassword = false, checkboxLabel }) => {
  return (
    <div className="flex items-center justify-between text-[10px]">
      <label className="flex cursor-pointer items-center gap-1.5">
        <Input type="checkbox" id="remember" className="accent-orange" />
        <span className="text-grey-5">{checkboxLabel}</span>
      </label>

      {showForgotPassword && (
        <a href="" className="text-light-cyan">
          Forgotten password
        </a>
      )}
    </div>
  );
};

export default AuthExtras;
