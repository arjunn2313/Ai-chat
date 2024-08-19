import { SignIn } from "@clerk/clerk-react";
import React from "react";
import "./SignIn.css";

export default function SignIN() {
  return (
    <div className="signIn">
      <SignIn
        path="/sign-in"
        signUpUrl="/sign-up"
        forceRedirectUrl="/dashboard"
      />
    </div>
  );
}
