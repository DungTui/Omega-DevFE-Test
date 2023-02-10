import React, { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import SideBar, { sidebarList } from "./SideBar";

const BaseLayout = () => {
  const location = useLocation();
  const [headerTitle, setHeaderTitle] = useState("Dashboard");

  useEffect(() => {
    sidebarList.map((item) => {
      if (location.pathname.includes(item.value)) {
        setHeaderTitle(item.label);
      }
    });
  }, [location.pathname]);

  return (
    <div className="flex px-16">
      <div className="basis-1/6">
        <SideBar />
      </div>
      <div className="basis-5/6">
        <div className="text-2xl text-slate-500 mb-6">{headerTitle}</div>
        <div className="">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default BaseLayout;
