import React from "react";
import Input from "../ui/Input";
import AuthExtras from "./AuthExtras";
import { useNavigate } from "react-router";

const AuthForm = ({
  checkboxLabel,
  showForgotPassword,
  buttonLabel,
  formLink,
  showExtraField,
}) => {
  let navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(formLink);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      {showExtraField && <Input type="text" id="name" placeholder="Name" />}
      <Input type="email" id="email" placeholder="Email address" />
      <Input type="password" id="email" placeholder="Password" />

      <AuthExtras
        checkboxLabel={checkboxLabel}
        showForgotPassword={showForgotPassword}
      />

      <button
        type="submit"
        className="bg-orange text-cyan-lightest cursor-pointer rounded-md py-2.5 text-lg"
      >
        {buttonLabel}
      </button>
    </form>
  );
};

export default AuthForm;
