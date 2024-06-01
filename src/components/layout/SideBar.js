import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigationLinks, supportButtons } from "@/data/navigation";
import Exit from "@/assets/icons/exit.svg";

const SideBar = () => {
  const pathname = usePathname();

  return (
    <aside className="w-80 h-full hidden lg:flex p-5">
      <div className="bg-slate-gradient border-2 border-slate-700 w-full rounded-xl p-5 text-slate-300">
        <Link href={"/"} className="py-5 flex gap-2 text-white items-center">
          <span className="p-2 w-10 text-xl text-center aspect-square rounded-full bg-main-gradient">
            M
          </span>
          <h1 className="text-2xl">Meeteam</h1>
        </Link>
        <nav className="my-5 flex flex-col items-start justify-start gap-3">
          <h3 className="text-lg">Dashboard Overview</h3>
          <ul className="w-full flex flex-col items-start justify-start gap-3">
            {navigationLinks.map((link, index) => (
              <li key={index} className="w-full">
                <Link
                  href={link.url}
                  className={`flex items-center justify-start text-lg gap-2 py-1 px-2 rounded-2xl w-full border border-transparent ${
                    link.url === pathname
                      ? "bg-main-gradient text-white border-0"
                      : "hover:border-slate-700 hover:text-white"
                  }`}
                >
                  <link.icon className="text-xl" />
                  <span className="flex-grow">{link.label}</span>
                  {link.notifications ? (
                    <span className="text-sm text-white text-center w-5 aspect-square bg-green-500 rounded-full">
                      {link.notifications}
                    </span>
                  ) : null}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="my-5 pt-2 pb-2 flex flex-col items-start justify-start gap-3 border border-r-0 border-l-0 border-slate-700">
          <h3 className="text-lg">Support</h3>
          {supportButtons.map((b, index) => (
            <button
              className="flex items-center justify-start text-lg gap-2 py-1 px-2 rounded-2xl w-full border border-transparent hover:border-slate-700 hover:text-white"
              key={index}
            >
              <b.icon className="text-xl" />
              <span>{b.label}</span>
            </button>
          ))}
        </div>
        <div className="my-5 text-lg flex items-center justify-between">
          <span>{`Meeteam ${new Date().getFullYear()}®`}</span>
          <Exit className="text-2xl hover:text-white" />
        </div>
      </div>
    </aside>
  );
};

export default SideBar;
