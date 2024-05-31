import SideBar from "./SideBar";

const MainLayout = ({ children }) => {
  return (
    <div className="flex flex-row h-screen w-full overflow-hidden bg-page-gradient">
      <SideBar />
      <main>{children}</main>
    </div>
  );
};

export default MainLayout;
