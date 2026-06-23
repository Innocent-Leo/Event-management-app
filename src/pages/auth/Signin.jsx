import React from "react";
import AuthCard from "../../components/auth/AuthCard";

const Signin = () => {
  return (
    <>
      <AuthCard
        title={"Welcome back!"}
        subtitle={"Enter your credentials to access your account"}
        showExtraField={false}
        checkboxLabel={"Remember me"}
        showForgotPassword={true}
        buttonLabel={"Sign in"}
        footerText={"Don't have an account?"}
        footerLinkText={"Sign up"}
      />
    </>
  );
};

export default Signin;
