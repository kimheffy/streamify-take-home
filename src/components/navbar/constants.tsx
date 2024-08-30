import {
  HomeIcon,
  PersonIcon,
  SpeakerLoudIcon,
  GearIcon,
} from "@radix-ui/react-icons";

export const TABS = [
  {
    id: "overview",
    label: "Overview",
    path: "/",
    icon: HomeIcon,
  },
  {
    id: "customers",
    label: "Customers",
    path: "/customers",
    icon: PersonIcon,
  },
  {
    id: "products",
    label: "Products",
    path: "/product",
    icon: SpeakerLoudIcon,
  },
  {
    id: "settings",
    label: "Settings",
    path: "/settings",
    icon: GearIcon,
  },
];
