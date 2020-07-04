import React, {useContext} from "react";
// import "../styles/SearchBox.css";
import ThemeContext from "../utilities/ThemeContext";

const SearchDOB = () => {
  const context = useContext(ThemeContext);

  return (
    <div className="searchbox">
       <div className="input-group">
      <div className="input-group-prepend">
        <span className="input-group-text" id="">
          D.O.B
          </span>
      </div>
      <input type="date" className="form-control"   onChange={e => context.handleSearchChange(e)}/>
      <input type="date" className="form-control"   onChange={e => context.handleSearchChange(e)}/>
      </div>
    </div>
  );
};
export default SearchDOB;