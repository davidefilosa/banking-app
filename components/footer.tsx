"use client";

import { logout } from "@/lib/actions/user";
import { LogOutIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

type Props = {
  user: User;
  type?: string;
};

export const Footer = ({ user, type }: Props) => {
  const router = useRouter();

  const handleLogout = async () => {
    const loggedOut = await logout();

    if (loggedOut) {
      router.push("/sign-in");
    }
  };
  return (
    <footer className="flex  items-center justify-center gap-2 py-6">
      <div
        className={
          type === "mobile"
            ? "flex size-10 items-center justify-center rounded-full bg-gray-200"
            : "flex size-10 items-center justify-center rounded-full bg-gray-200 max-xl:hidden"
        }
      >
        <p className="text-xl font-bold text-gray-700">
          {user?.name.slice(0, 1)}
        </p>
      </div>
      <div
        className={
          type === "mobile"
            ? "flex flex-1 flex-col justify-center"
            : "flex flex-1 flex-col justify-center max-xl:hidden"
        }
      >
        <h1 className="text-[14px] leading-[20px] truncate text-gray-700 font-semibold">
          {user?.name.split(" ")[0]}
        </h1>
        <p className="text-[14px] leading-[20px] truncate font-normal text-gray-600">
          {user?.email}
        </p>
      </div>
      <div
        className="cursor-pointer flex items-center justify-center"
        onClick={handleLogout}
      >
        <LogOutIcon className="text-gray-500 size-6" />
      </div>
    </footer>
  );
};
