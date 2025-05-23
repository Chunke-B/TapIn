import React from "react";
import { FiSearch, FiBell, FiChevronDown } from "react-icons/fi";
import { IoCalendarOutline } from "react-icons/io5";
import { HiOutlineDownload } from "react-icons/hi";
import "../../styles/_header.scss";

export default function Header({ query, setQuery }) {
  return (
    <header className="header">
      <div className="header__top">
        <div className="header__top-left">
          <FiSearch className="header__top-search--icon" />
          <input
            type="text"
            placeholder="Search courses..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        <div className="header__top-right">
          <FiBell className="header__icon bell" />
          <div className="header__icon-1">1</div>

          <div className="header__top-profile">
            <img src="/profile-pic.jpeg" alt="Profile" />
            <span>John Smith</span>
            <FiChevronDown />
          </div>
        </div>
      </div>

      <div className="header__bottom">
        <h2>My Attendance</h2>
        <div className="header__bottom-left">
          <div className="header__date">
            <IoCalendarOutline />
            <span>May 2024</span>
          </div>

          <button className="header__export">
            <HiOutlineDownload />
            <span>Export</span>
          </button>
        </div>
      </div>
    </header>
  );
}
