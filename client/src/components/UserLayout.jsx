import SideMenu from "./SideMenu";

const UserLayout = ({ children }) => {
  return (
    <div className="min-h-screen">
      <div className="mt-2 mb-2 pt-24 pb-7">
        <h2 className="text-center font-bold">User Settings</h2>
      </div>
      <div className="">
        <div className="flex flex-row gap-2 justify-around">
          <div className="grid grid-cols-1 lg:grid-cols-1">
            <SideMenu />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-1 user-dashboard">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};
export default UserLayout;
