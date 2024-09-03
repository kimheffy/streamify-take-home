"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import { TABS } from "./constants";

export default function HamburgerSheet({ pathname }: { pathname: string }) {
  return (
    <Sheet>
      <SheetTrigger asChild className="sm:hidden">
        <Menu className="text-white" />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="text-left">Streamify</SheetTitle>
          <SheetDescription className="text-left">
            Next generation streaming platform.
          </SheetDescription>
        </SheetHeader>
        <div className="py-12">
          <ul className="flex flex-col gap-4">
            {TABS.map((tab) => {
              const Icon = tab.icon;
              return (
                <li
                  key={tab.id}
                  className={cn(
                    "flex items-center",
                    pathname === tab.path ? "text-black" : "text-stone-400",
                  )}
                >
                  <Icon className="size-5 mr-2" />
                  <span className="font-medium">{tab.label}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </SheetContent>
    </Sheet>
  );
}
