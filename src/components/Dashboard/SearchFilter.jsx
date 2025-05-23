import React from "react";
import { FaSearch, FaFilter } from "react-icons/fa";

const SearchFilter = () => {
  return (
    <div className="search-filter">
      <div className="search-box">
        <FaSearch />
        <input type="text" placeholder="Search courses..." />
      </div>
      <button className="filter-button">
        <FaFilter /> Filter
      </button>
    </div>
  );
};

export default SearchFilter;
