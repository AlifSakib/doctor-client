import React from "react";
import { Outlet } from "react-router-dom";
import DashboardHome from "../pages/Dashboard/DashboardHome";
import Sidebar from "../pages/Dashboard/Sidebar";
import Navbar from "../Shared/Navbar";

const Dashboard = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="flex">
        <Sidebar></Sidebar>
        <div className="flex-1 mt">
          <DashboardHome></DashboardHome>
        </div>
      </div>
      <Outlet></Outlet>
    </div>
  );
};

export default Dashboard;
