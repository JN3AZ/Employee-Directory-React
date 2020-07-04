import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import API from "../utilities/API";
import "../styles/DataDomain.css";
import ThemeContext from "../utils/ThemeContext";

const DataDomain = () => {
  const [developerState, setDeveloperState] = useState({
    users: [],
    order: "descend",
    filteredUsers: [],
    headings: [
      { name: "Image", width: "10%", order: "descend" },
      { name: "name", width: "10%", order: "descend" },
      { name: "phone", width: "20%", order: "descend" },
      { name: "email", width: "20%", order: "descend" },
      { name: "D.O.B", width: "10%", order: "descend" },
    ],
  });

  const handleOrder = (heading) => {
    let currentOrder = developerState.headings
      .filter((elem) => elem.name === heading)
      .map((elem) => elem.order)
      .toString();

    if (currentOrder === "descend") {
      currentOrder = "ascend";
    } else {
      currentOrder = "descend";
    }

    const compareContent = (a, b) => {
      if (currentOrder === "ascend") {
        // condintional for any missing values
        if (a[heading] === undefined) {
          return 1;
        } else if (b[heading] === undefined) {
          return -1;
        } else if (heading === "name") {
          return a[heading].first.localeCompare(b[heading].first);
        } else if (heading === "dob") {
          return a[heading].age - b[heading].age;
        } else {
          return a[heading].localeCompare(b[heading]);
        }
      } else {
        // condintional for any missing values
        if (a[heading] === undefined) {
          return 1;
        } else if (b[heading] === undefined) {
          return -1;
        }
        // compare  and set up numerically
        else if (heading === "name") {
          return b[heading].first.localeCompare(a[heading].first);
        } else if (heading === "dob") {
          return b[heading].age - a[heading].age;
        } else {
          return b[heading].localeCompare(a[heading]);
        }
      }
    };
    const sortedUsers = developerState.filteredUsers.sort(compareContent);
    const updatedHeadings = developerState.headings.map((elem) => {
      elem.order = elem.name === heading ? currentOrder : elem.order;
      return elem;
    });

    setDeveloperState({
      ...developerState,
      filteredUsers: sortedUsers,
      headings: updatedHeadings,
    });
  };

  const handleSearchChange = (event) => {
    const filter = event.target.value;
    const filteredList = developerState.users.filter((item) => {
      let values =
        item.name.first.toLowerCase() + " " + item.name.last.toLowerCase();
      console.log(filter, values);
      if (values.indexOf(filter.toLowerCase()) !== -1) {
        return item;
      }
    });

    setDeveloperState({ ...developerState, filteredUsers: filteredList });
  };

  useEffect(() => {
    API.getUsers().then((results) => {
      console.log(results.data.results);
      setDeveloperState({
        ...developerState,
        users: results.data.results,
        filteredUsers: results.data.results,
      });
    });
  }, []);

  return (
    <ThemeContext.Provider
      value={{ developerState, handleSearchChange, handleOrder }}
    >
      <Nav />
      <div className="data-domain">
        {developerState.filteredUsers.length > 0 ? <DataTable /> : <div></div>}
      </div>
    </ThemeContext.Provider>
  );
};

export default DataDomain;
