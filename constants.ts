import { CreditCard, HandCoins, Home, Landmark } from "lucide-react";

export const sidebarLinks = [
  {
    icon: Home,
    route: "/",
    label: "Home",
  },
  {
    icon: Landmark,
    route: "/my-banks",
    label: "My Banks",
  },
  {
    icon: CreditCard,
    route: "/transaction-history",
    label: "Transaction History",
  },
  {
    icon: HandCoins,
    route: "/payment-transfer",
    label: "Transfer Funds",
  },
];
