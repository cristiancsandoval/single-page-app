import Link from "next/link";

const navigationLinks = [
  {
    label: "Activity",
    url: "/",
    icon: "",
  },
  {
    label: "Deposit",
    url: "/dashboard/deposit",
    icon: "",
  },
  {
    label: "News",
    url: "/dashboard/news",
    icon: "",
  },
  {
    label: "Messages",
    url: "/dashboard/messages",
    icon: "",
  },
  {
    label: "Analytics",
    url: "/dashboard/analytics",
    icon: "",
  },
  {
    label: "Announcements",
    url: "/dashboard/announcements",
    icon: "",
  },
];

const supportButtons = [
  {
    label: "Settings",
    icon: "",
  },
  {
    label: "Help",
    icon: "",
  },
  {
    label: "Chat",
    icon: "",
  },
];

const SideBar = () => {
  return (
    <aside className="w-96 h-full hidden lg:flex p-5">
      <div className="bg-gray-200 w-full rounded-xl p-5">
        <Link href={"/"} className="py-5 border rounded-xl">
          <h1>Meeteam</h1>
        </Link>
        <nav className="my-5">
          <h3>Dashboard Overview</h3>
          <ul>
            {navigationLinks.map((link, index) => (
              <li key={index}>
                <Link href={link.url}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="my-5">
          <h3>Support</h3>
          {supportButtons.map((button) => (
            <button>{button.label}</button>
          ))}
        </div>
        <div className="my-5">Meeteam</div>
      </div>
    </aside>
  );
};

export default SideBar;
