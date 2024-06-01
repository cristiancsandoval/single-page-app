import HeaderBar from "./HeaderBar";
import SideBar from "./SideBar";

const MainLayout = ({ children }) => {
  return (
    <div className="flex flex-row min-h-screen w-full overflow-hidden bg-page-gradient">
      <SideBar />
      <div className="flex-grow mr-7">
        <HeaderBar />
        <main>{children}</main>
      </div>
    </div>
  );
};

export default MainLayout;
