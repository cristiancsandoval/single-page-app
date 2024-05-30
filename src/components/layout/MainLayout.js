import SideBar from "./SideBar";

const MainLayout = ({ children }) => {
  return (
    <div className="flex flex-row h-screen w-full overflow-hidden">
      <SideBar />
      <main className="w-full border">{children}</main>
    </div>
  );
};

export default MainLayout;
