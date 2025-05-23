import React from "react";
import { FiSearch } from "react-icons/fi";

const SearchBar = ({ query, setQuery }) => (
  <div className="dashboard__search">
    <FiSearch />
    <input
      type="text"
      placeholder="Search courses..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  </div>
);

export default SearchBar;
