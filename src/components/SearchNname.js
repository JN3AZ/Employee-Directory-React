import React from "react";
import "../styles/SearchName.css";

const SearchName = () => {
  const data = useData();

  return (
    <div className="searchbox">
      <div className="input-group">
        <div className="input-group-prepend">
          <span className="input-group-text">Search</span>
        </div>
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="name"
          aria-label="Search"
          onChange={(e) => context.handleSearchChange(e)}
        />
      </div>
    </div>
  );
};

export default SearchName;