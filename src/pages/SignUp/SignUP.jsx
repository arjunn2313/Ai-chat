import React from "react";
import "./SignUp.css";
import { SignUp } from "@clerk/clerk-react";


export default function SignUP() {
  return <div className="signup">
     <SignUp path='/sign-up' signInUrl="sign-in"/>
  </div>;
}
