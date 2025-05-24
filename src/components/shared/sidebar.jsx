import React from "react";
import {
  FiGrid,
  FiBook,
  FiSettings,
  FiHelpCircle,
  FiLogOut,
} from "react-icons/fi";
import { FaRegCalendarCheck } from "react-icons/fa";
import "./../../styles/Sidebar.scss";
import { Link } from "react-router-dom";

export default function Sidebar({ onLogoutClick }) {
  return (
    <aside className="sidebar">
      {/* <div className="sidebar__logo">EduTrack</div> */}
      <div className="sidebar__logo">TapIn</div>
      <nav>
        <ul>
          <div>
            <li className="active">
              <Link to="/dashboard" className="links active ">
                <FiGrid /> Dashboard
              </Link>
            </li>
            <li>
              <Link to="/attendance" className="links ">
                <FaRegCalendarCheck /> Attendance
              </Link>
            </li>
            {/* <li>
              <FiBook /> My Courses
            </li> */}
            <li>
              <Link to="/settings" className="links ">
                <FiSettings /> Settings
              </Link>
            </li>
            <li onClick={onLogoutClick}>
              <Link to="/logout" className="links ">
                <FiLogOut /> Logout
              </Link>
            </li>
          </div>
        </ul>
      </nav>
    </aside>
  );
}
