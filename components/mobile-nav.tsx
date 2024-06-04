"use client";

import { Menu, Vault } from "lucide-react";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import Link from "next/link";
import { sidebarLinks } from "@/constants";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export const MobileNav = () => {
  const pathname = usePathname();

  return (
    <div className="w-full absolute top-0 left-0 flex md:hidden p-4 border-b  items-center justify-between shadow-sm">
      <Sheet>
        <SheetTrigger asChild>
          <Vault className="size-8 text-blue-500" />
        </SheetTrigger>
        <SheetContent side={"left"}>
          <nav className="flex flex-col gap-4">
            <SheetClose asChild>
              <Link
                href={"/"}
                className="mb-12 flex items-center justify-center gap-2 text-blue-500 text-2xl font-bold"
              >
                <Vault className="size-6" />
                <p>Vault</p>
              </Link>
            </SheetClose>

            {sidebarLinks.map((item) => {
              const isActive = pathname === item.route;
              return (
                <SheetClose asChild>
                  <Link
                    href={item.route}
                    key={item.label}
                    className={cn(
                      "flex gap-3 items-center p-2 rounded-lg justify-start text-black hover:bg-blue-500 hover:text-white text-base transition-all",
                      isActive && "bg-blue-500 text-white"
                    )}
                  >
                    <div className="size-6">{<item.icon />}</div>
                    <p>{item.label}</p>
                  </Link>
                </SheetClose>
              );
            })}
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
};