import React from "react";
import AuthCard from "../../components/auth/AuthCard";

const Signup = () => {
  return (
    <>
      <AuthCard
        title={"Get started now"}
        showExtraField={true}
        buttonLabel={"Sign up"}
        showForgotPassword={false}
        footerText={"Have an account?"}
        footerLinkText={"Sign in"}
        checkboxLabel={
          <>
            I agree to the{" "}
            <a href="#" className="underline">
              terms and conditions
            </a>
          </>
        }
      />
    </>
  );
};

export default Signup;
