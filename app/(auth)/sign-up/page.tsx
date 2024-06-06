import { AuthForm } from "@/components/auth-form";
import React from "react";

const SignUpPage = () => {
  return (
    <section className="flex items-center justify-center size-full max-sm:px-6">
      <AuthForm type="sign-up" />
    </section>
  );
};

export default SignUpPage;
