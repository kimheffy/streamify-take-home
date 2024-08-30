"use client";

import { useMediaQuery } from "usehooks-ts";
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
} from "@/components/ui/drawer";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";

const ITEMS = [
  { id: "profile", value: "Profile", type: "label" },
  { id: "separator-0", type: "separator" },
  { id: "billing", value: "Billing", type: "label" },
  { id: "settings", value: "Settings", type: "label" },
  { id: "new-team", value: "New Team", type: "label" },
  { id: "separator-1", type: "separator" },
  { id: "log-out", value: "Log out", type: "label" },
];

function DrawerItems() {
  return (
    <div>
      {ITEMS.map((item) =>
        item.type === "separator" ? (
          <Separator key={item.id} />
        ) : (
          <div key={item.id} className="p-4 text-base font-normal">
            {item.value}
          </div>
        ),
      )}
    </div>
  );
}

export default function DrawerDropdown({
  trigger,
}: {
  trigger: React.ReactNode;
}) {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (isDesktop) {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>{trigger}</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {ITEMS.map((item) =>
            item.type === "separator" ? (
              <DropdownMenuSeparator key={item.id} />
            ) : (
              <DropdownMenuItem key={item.id}>{item.value}</DropdownMenuItem>
            ),
          )}
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }

  return (
    <Drawer>
      <DrawerTrigger asChild>{trigger}</DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>Jeffrey Kim</DrawerTitle>
          <DrawerDescription>kim.jeffrey.eng@gmail.com</DrawerDescription>
        </DrawerHeader>
        <Separator />
        <DrawerItems />
      </DrawerContent>
    </Drawer>
  );
}
