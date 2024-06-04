import { MobileNav } from "@/components/mobile-nav";
import { Sidebar } from "@/components/sidebar";
import React from "react";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  const loggedIn = { firstName: "Davide", lastName: "Filosa" };

  return (
    <main className="flex h-screen w-full font-inter">
      <MobileNav />
      <Sidebar user={loggedIn} />
      {children}
    </main>
  );
};

export default RootLayout;
