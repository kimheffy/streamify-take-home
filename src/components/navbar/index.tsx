"use client";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { TABS } from "./constants";
import DrawerDropdown from "./drawerdropdown";
import HamburgerSheet from "./hamburgersheet";

export function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="flex bg-black p-4 justify-between rounded-b-lg drop-shadow-lg items-center">
      <HamburgerSheet pathname={pathname} />

      <ul className="hidden sm:flex justify-between gap-4">
        {TABS.map(({ id, label, path }) => (
          <li
            key={id}
            className={cn(pathname === path ? "text-white" : "text-stone-400")}
          >
            {label}
          </li>
        ))}
      </ul>

      <DrawerDropdown
        trigger={
          <Avatar className="size-8">
            <AvatarFallback>JK</AvatarFallback>
          </Avatar>
        }
      />
    </nav>
  );
}
