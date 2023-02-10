import { Routes, Route, Navigate } from "react-router-dom";
import React from "react";
import Dashboard from "./pages/Dashboard";
import BaseLayout from "./layouts/BaseLayout";
import PostsManagement from "./pages/PostsManagement";
import Settings from "./pages/Settings";
import Subscription from "./pages/Dashboard/Subscription";
import Revenue from "./pages/Dashboard/Revenue";

const App = () => {
  return (
    <Routes>
      <Route element={<BaseLayout />}>
        <Route path="/DashBoard" element={<Dashboard />}>
          <Route path="/DashBoard/Subscription" element={<Subscription />} />
          <Route path="/DashBoard/Revenue" element={<Revenue />} />
          <Route
            path="/DashBoard"
            element={<Navigate to="/DashBoard/Subscription" replace />}
          />
        </Route>
        <Route path="/PostsManagement" element={<PostsManagement />} />
        <Route path="/Settings" element={<Settings />} />
        <Route path="/" element={<Navigate to="/DashBoard" replace />} />
      </Route>
    </Routes>
  );
};

export default App;
