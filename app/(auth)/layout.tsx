import { getLoggedInUser } from "@/lib/actions/user";
import { redirect } from "next/navigation";
import React from "react";

const AuthLayout = async ({ children }: { children: React.ReactNode }) => {
  const user = await getLoggedInUser();
  if (user) return redirect("/");
  return <main>{children}</main>;
};

export default AuthLayout;
