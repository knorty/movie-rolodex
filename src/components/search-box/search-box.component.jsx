import React from "react";
import "./search-box.styles.css";

const SearchBox = ({ handleSearch, placeholder }) => {
  return (
    <input
      className="search"
      type="search"
      placeholder={placeholder}
      onChange={(e) => handleSearch(e.target.value)}
    />
  );
};

export default SearchBox;
