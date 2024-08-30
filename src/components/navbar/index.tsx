"use client";

import { usePathname } from "next/navigation";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import DrawerDropdown from "./drawerdropdown";

const TABS = [
  {
    id: "overview",
    label: "Overview",
    path: "/",
  },
  {
    id: "customers",
    label: "Customers",
    path: "/customers",
  },
  {
    id: "products",
    label: "Products",
    path: "/product",
  },
  {
    id: "settings",
    label: "Settings",
    path: "/settings",
  },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="flex bg-black p-4 justify-between rounded-b-lg drop-shadow-lg items-center">
      <HamburgerMenuIcon className="text-white sm:hidden" />

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
