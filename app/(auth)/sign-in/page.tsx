import { AuthForm } from "@/components/auth-form";
import React from "react";

const SignInPage = () => {
  return (
    <section className="flex items-center justify-center size-full max-sm:px-6">
      <AuthForm type="sign-in" />
    </section>
  );
};

export default SignInPage;
