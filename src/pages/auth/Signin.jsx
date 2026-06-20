import React from "react";
import AuthCard from "../../components/auth/AuthCard";

const Signin = () => {
  return (
    <>
      <AuthCard
        title={"Welcome back!"}
        text={"Enter your credentials to access your account"}
        checkboxLabel={"Remember me"}
        showForgotPassword={true}
        buttonLabel={"Sign in"}
        linkLabel={"Sign up"}
      />
    </>
  );
};

export default Signin;
