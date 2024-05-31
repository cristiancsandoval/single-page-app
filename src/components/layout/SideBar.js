import Link from "next/link";
import { navigationLinks, supportButtons } from "@/data/navigation";

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
                <Link href={link.url}>
                  <link.icon />
                  <span>{link.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="my-5">
          <h3>Support</h3>
          {supportButtons.map((b, index) => (
            <button key={index}>
              <b.icon />
              <span>{b.label}</span>
            </button>
          ))}
        </div>
        <div className="my-5">Meeteam</div>
      </div>
    </aside>
  );
};

export default SideBar;
