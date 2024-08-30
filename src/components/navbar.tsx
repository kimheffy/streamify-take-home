"use client";

import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

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

// TODO: Import and use Avatar component from shad.cn, use radix-icons for Hamburger icon
export function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="flex bg-black p-4 justify-between rounded-b-lg drop-shadow-lg">
      <div className="text-white sm:hidden">=</div>

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
      <div className="text-white">avatar</div>
    </nav>
  );
}
