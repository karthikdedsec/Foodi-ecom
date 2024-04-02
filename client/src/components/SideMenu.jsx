import { AiFillLock } from "react-icons/ai";
import { RxAvatar } from "react-icons/rx";
import { BiUser } from "react-icons/bi";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const SideMenu = () => {
  const menuItems = [
    {
      name: "Profile",
      url: "/me/profile",
      icon: <BiUser />,
    },
    {
      name: "Update Profile",
      url: "/me/update_profile",
      icon: <BiUser />,
    },
    {
      name: "Upload Avatar",
      url: "/me/upload_avatar",
      icon: <RxAvatar />,
    },
    {
      name: "Update Password",
      url: "/me/update_password",
      icon: <AiFillLock />,
    },
  ];

  const location = useLocation();

  const [activeMenuItem, setActiveMenuItem] = useState(location.pathname);

  const handleMenuItemClick = (url) => {
    setActiveMenuItem(url);
  };

  return (
    <div className="mt-5 pl-4 space-y-8">
      {menuItems.map((item, index) => (
        <>
          <Link
            key={index}
            to={item.url}
            className={`font-bold  py-2 px-3 border flex items-center border-gray-300 rounded-md transition duration-300 ease-in-out hover:bg-gray-100 ${
              activeMenuItem.includes(item.url) ? "active" : ""
            }`}
            aria-current={activeMenuItem.includes(item.url) ? "true" : "false"}
            onClick={() => handleMenuItemClick(item.url)}
          >
            {item.icon}
            <span className="inline-block align-middle">{item.name}</span>
          </Link>
        </>
      ))}
    </div>
  );
};
export default SideMenu;
