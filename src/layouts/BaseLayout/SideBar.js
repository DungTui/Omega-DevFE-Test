import clsx from "clsx";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const sidebarList = [
  { label: "Dashboard", value: "Dashboard" },
  { label: "Posts Management", value: "PostsManagement" },
  { label: "Settings", value: "Settings" },
];

const SideBar = () => {
  const [active, setActive] = useState("Dashboard");

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (sidebarList.find((item) => `/${item.value}` === location.pathname)) {
      setActive(location.pathname.substring(1));
    }
  }, [active]);

  return (
    <div className="flex flex-col items-end px-6 pt-6 gap-2">
      {sidebarList.map((item, index) => (
        <span
          key={index}
          className={clsx("cursor-pointer hover:text-slate-500", {
            "text-slate-500": active === item.value,
          })}
          onClick={() => {
            setActive(item.value);
            navigate(`/${item.value}`);
          }}
        >
          {item.label}
        </span>
      ))}
    </div>
  );
};

export default SideBar;
