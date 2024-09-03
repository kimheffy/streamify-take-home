"use client";

import * as React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoonStar } from "lucide-react";
import { useTheme } from "next-themes";

export default function ToggleTheme() {
  const { setTheme } = useTheme();

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <MoonStar className="text-white cursor-pointer" />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem
            onSelect={() => setTheme("light")}
            textValue="light"
          >
            Light
          </DropdownMenuItem>
          <DropdownMenuItem onSelect={() => setTheme("dark")} textValue="dark">
            Dark
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
