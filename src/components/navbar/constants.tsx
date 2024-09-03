import { HouseIcon, UsersIcon, Speaker, Cog } from "lucide-react";

export const TABS = [
  {
    id: "overview",
    label: "Overview",
    path: "/",
    icon: HouseIcon,
  },
  {
    id: "customers",
    label: "Customers",
    path: "/customers",
    icon: UsersIcon,
  },
  {
    id: "products",
    label: "Products",
    path: "/product",
    icon: Speaker,
  },
  {
    id: "settings",
    label: "Settings",
    path: "/settings",
    icon: Cog,
  },
];
