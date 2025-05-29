// src/components/lecturer/LecturerSidebar.jsx

import React from "react";
import { NavLink } from "react-router-dom";
import {
  FiHome,
  FiBookOpen,
  FiCheckSquare,
  FiBarChart2,
  FiSettings,
  FiLogOut,
} from "react-icons/fi";
import "../../styles/lecturer/LecturerSidebar.scss";

const LecturerSidebar = () => {
  const menuItems = [
    {
      name: "Dashboard",
      path: "/lecturer/dashboard",
      icon: <FiHome />,
    },
    { name: "My Classes", path: "/lecturer/classes", icon: <FiBookOpen /> },
    {
      name: "Attendance",
      path: "/lecturer/attendance",
      icon: <FiCheckSquare />,
    },
    // {
    //   name: "QR Generator",
    //   path: "/lecturer/qr-generator",
    //   icon: <FiCodesandbox />,
    // },
    { name: "Reports", path: "/lecturer/reports", icon: <FiBarChart2 /> },
    { name: "Settings", path: "/lecturer/settings", icon: <FiSettings /> },
    { name: "Logout", path: "/lecturer/logout", icon: <FiLogOut /> },
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar__logo">TapIn</div>
      <div>
        <nav className="sidebar-menu">
          {menuItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              end={item.path === "/lecturer/dashboard"} // Ensure 'Dashboard' matches exactly
              className={({ isActive }) =>
                isActive ? "menu-item active" : "menu-item"
              }
            >
              <span className="icon">{item.icon}</span>
              <span className="text">{item.name}</span>
            </NavLink>
          ))}
        </nav>
      </div>
    </aside>
  );
};

export default LecturerSidebar;
