import Search from "@/assets/icons/search.svg";
import Grid from "@/assets/icons/grid.svg";
import Bell from "@/assets/icons/bell.svg";
import User from "@/assets/icons/user.svg";

const HeaderBar = () => {
  return (
    <header className="w-full flex items-center justify-end gap-5 py-5 my-5 text-slate-300">
      <button className="text-lg hover:text-white">
        <Search />
      </button>
      <button className=" text-lg hover:text-white">
        <Grid />
      </button>
      <button className="px-2 py-1 rounded-3xl text-white flex items-center justify-center gap-1 bg-main-gradient hover:opacity-80">
        <Bell className=" text-lg" />
        <span>8</span>
      </button>
      <button className="flex items-center justify-center gap-1 hover:text-white">
        <User className=" text-lg" />
        <span>Cristian S.</span>
      </button>
    </header>
  );
};

export default HeaderBar;
