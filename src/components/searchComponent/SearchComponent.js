import React from "react";
import "./SearchComponent.scss";
const SearchComponent = ({
  searchTerm,
  setSearchTerm,
  placeholder = "search",
}) => {
  return (
    <div className="searchBar-main">
      <input
        className="searchBar-main__search-input"
        placeholder={placeholder}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div
        className="searchBar-main__searchTerm"
        style={{ marginLeft: "15rem", color: "white" }}
      >
        e.g Meat, Vegetable, Fish
      </div>
    </div>
  );
};

export default SearchComponent;
