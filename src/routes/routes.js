import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../layout/Dashboard";
import Main from "../layout/Main";
import Login from "../pages/Account/Login/Login";
import Register from "../pages/Account/Register/Register";
import Appointment from "../pages/Appointment/Appointment";
import AllUsers from "../pages/Dashboard/AllUsers";
import DashboardHome from "../pages/Dashboard/DashboardHome";
import Home from "../pages/Home/Home";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/appointment",
        element: <Appointment></Appointment>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "/dashboard/bookinglist",
        element: <DashboardHome></DashboardHome>,
      },
      {
        path: "/dashboard/allusers",
        element: <AllUsers></AllUsers>,
      },
    ],
  },
]);
