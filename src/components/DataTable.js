import React, { useData } from "react";
import DataBody from "./DataBody";
import "../styles/DataTable.css";
import ThemeContext from "../utilities/ThemeContext";

const DataTable = () => {
    const data = useData(ThemeContext);
  
    return (
  
      <div className="datatable mt-5">
        <table
          id="table"
          className="table table-striped table-hover table-condensed"
        >
          <thead>
            <tr>
              {context.developerState.headings.map(({ name, width }) => {
                return (
                  <th
                    className="col"
                    key={name}
                    style={{ width }}
                    onClick={() => {
                      // context.handleOrder(name.toLowerCase());
                      context.handleOrder(name);
                    }}
                  >
                    {name}
                    <span className="pointer"></span>
                  </th>
                );
              })}
            </tr>
          </thead>
  
          <DataBody />
        </table>
      </div>
    );
  }
  
  export default DataTable;