import { MobileNav } from "@/components/mobile-nav";
import { Sidebar } from "@/components/sidebar";
import { getLoggedInUser } from "@/lib/actions/user";
import React from "react";

const RootLayout = async ({ children }: { children: React.ReactNode }) => {
  const loggedIn = await getLoggedInUser();

  return (
    <main className="flex h-screen w-full font-inter">
      <MobileNav user={loggedIn} />
      <Sidebar user={loggedIn} />
      {children}
    </main>
  );
};

export default RootLayout;
