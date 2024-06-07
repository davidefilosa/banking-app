import { Plus } from "lucide-react";
import Link from "next/link";
import React from "react";
import { BankCard } from "./bank-card";

type Props = {
  user: User;
};

export const RightSidebar = ({ user }: Props) => {
  return (
    <aside className="no-scrollbar hidden h-screen max-h-screen flex-col border-l border-gray-200 xl:flex w-[355px] xl:overflow-y-scroll">
      <section className="flex flex-col pb-8">
        <div className="h-[120px] w-full bg-gradient-to-bl to-blue-200 via-purple-500 from-pink-200" />
        <div className="relative flex px-6 max-xl:justify-center">
          <div className="flex items-center justify-center absolute -top-8 size-24 rounded-full bg-gray-100 border-8 border-white p-2 shadow-md">
            <span className="text-5xl font-bold text-blue-500">
              {user.name.slice(0, 1)}
            </span>
          </div>

          <div className="flex flex-col pt-24">
            <h1 className="text-[24px] leading-[30px] font-semibold text-gray-900">
              {user.name}
            </h1>
            <p className="text-[16px] leading-[20px]  text-gray-900">
              {user.email}
            </p>
          </div>
        </div>
      </section>
      <section className="flex flex-col justify-between gap-8">
        <div className="flex w-full justify-between px-6 py-2">
          <h2 className="text-[18px] leading-[22px] font-semibold text-gray-900">
            My Banks
          </h2>
          <Link href={"/"} className="flex items-center gap-2">
            <Plus className="size-4" />
            Add bank
          </Link>
        </div>
        <div className="relative flex flex-1 flex-col items-center justify-center gap-5 w-full">
          <div className="relative z-10 right-2">
            <BankCard type="visa" />
          </div>
          <div className="absolute left-8 top-8 z-0 mr-4">
            <BankCard type="mastercard" />
          </div>
        </div>
      </section>
    </aside>
  );
};
