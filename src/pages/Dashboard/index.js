import clsx from "clsx";
import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Button from "../../components/Button";

const Dashboard = () => {
  const navigate = useNavigate();
  const [activeChart, setActiveChart] = useState("Subscription");

  return (
    <div>
      <div className="flex gap-1">
        <Button
          onClick={() => {
            setActiveChart("Subscription");
            navigate("/DashBoard/Subscription");
          }}
          className={activeChart === "Subscription" && "text-slate-400"}
          activeValue="Subscription"
          title="Subscription"
        />
        <Button
          onClick={() => {
            setActiveChart("Revenue");
            navigate("/DashBoard/Revenue");
          }}
          className={activeChart === "Revenue" && "text-slate-400"}
          activeValue="Revenue"
          title="Revenue"
        />
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
