import React, {useContext} from "react";
import "../styles/SearchName.css";
import ThemeContext from "../utilities/ThemeContext";

const SearchName = () => {
  const context = useContext(ThemeContext);

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