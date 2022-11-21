import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../pages/Dashboard/Sidebar";
import Navbar from "../Shared/Navbar";

const Dashboard = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="flex">
        <Sidebar></Sidebar>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
