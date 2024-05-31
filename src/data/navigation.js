//icons
import Calendar from "@/assets/icons/calendar.svg";
import Wallet from "@/assets/icons/wallet.svg";
import News from "@/assets/icons/news.svg";
import Mail from "@/assets/icons/mail.svg";
import Graph from "@/assets/icons/graph.svg";
import Flag from "@/assets/icons/flag.svg";
import Config from "@/assets/icons/config.svg";
import Help from "@/assets/icons/help.svg";
import Chat from "@/assets/icons/chat.svg";

const navigationLinks = [
  {
    label: "Activity",
    url: "/",
    icon: Calendar,
    notifications: 0,
  },
  {
    label: "Deposit",
    url: "/dashboard/deposit",
    icon: Wallet,
    notifications: 0,
  },
  {
    label: "News",
    url: "/dashboard/news",
    icon: News,
    notifications: 1,
  },
  {
    label: "Messages",
    url: "/dashboard/messages",
    icon: Mail,
    notifications: 2,
  },
  {
    label: "Analytics",
    url: "/dashboard/analytics",
    icon: Graph,
    notifications: 0,
  },
  {
    label: "Announcements",
    url: "/dashboard/announcements",
    icon: Flag,
    notifications: 0,
  },
];

const supportButtons = [
  {
    label: "Settings",
    icon: Config,
  },
  {
    label: "Help",
    icon: Help,
  },
  {
    label: "Chat",
    icon: Chat,
  },
];

export { navigationLinks, supportButtons };
