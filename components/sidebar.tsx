"use client";

import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import { Vault } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type Props = {
  user: { firstName: string; lastName: string };
};
export const Sidebar = ({ user }: Props) => {
  const pathname = usePathname();
  return (
    <section className="sticky left-0 top-0 h-screen w-fit flex-col justify-between border-r border-gray-200 bg-white pt-8 text-white max-md:hidden sm:p-4 xl:p-6 2xl:w-[355px]">
      <nav className="flex flex-col gap-4">
        <Link
          href={"/"}
          className="mb-12 flex items-center justify-center gap-2 text-blue-500 text-2xl font-bold"
        >
          <Vault className="size-6" />
          <p className="max-xl:hidden">Vault</p>
        </Link>
        {sidebarLinks.map((item) => {
          const isActive = pathname === item.route;
          return (
            <Link
              href={item.route}
              key={item.label}
              className={cn(
                "flex gap-3 items-center py-1 md:p-3 2xl:p-4 rounded-lg justify-center xl:justify-start text-black hover:bg-blue-500 hover:text-white text-base transition-all",
                isActive && "bg-blue-500 text-white"
              )}
            >
              <div className="relative size-6">{<item.icon />}</div>
              <p className="max-xl:hidden text-base line-clamp-1">
                {item.label}
              </p>
            </Link>
          );
        })}
      </nav>
    </section>
  );
};
