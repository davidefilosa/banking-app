import { HeaderBox } from "@/components/header-box";
import { RightSidebar } from "@/components/right-sidebar";
import { getLoggedInUser } from "@/lib/actions/user";
import React from "react";

const HomePage = async () => {
  const user = await getLoggedInUser();
  return (
    <section className="no-scrollbar flex w-full flex-row max-xl:max-h-screen max-xl:overflow-y-auto mt-12 md:mt-0">
      <div className="no-scrollbar flex w-full flex-1 flex-col gap-8 px-5 sm:px-8 py-7 lg:py-12 xl:max-h-screen xl:overflow-y-scroll">
        <header className="flex flex-col justify-between gap-8">
          <HeaderBox
            type="greeting"
            title="Welcome,"
            user={user?.name || "Guest"}
            subtext="Access and manage your account and transactions"
          />
        </header>
      </div>
      <RightSidebar user={user} />
    </section>
  );
};

export default HomePage;
