import React from "react";

import { FiSearch, FiBell, FiChevronDown } from "react-icons/fi";

const Header = () => {
  return (
    <div className="header">
      <div className="header__top">
        <div className="header__top-left">
          <FiSearch className="header__top-search--icon" />
          <input type="text" placeholder="Search name..." />
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
    </div>
  );
};

export default Header;
