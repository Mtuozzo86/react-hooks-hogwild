import React, { useState } from "react";
import Nav from "./Nav";

import hogs from "../porkers_data";
import Hogs from "./Hogs";
import FilterPigs from "./FilterPigs";
import SortPigs from "./SortPigs";

function App() {
  const [filterBy, setFilterBy] = useState("All");
  const [sortBy, setSortBy] = useState("name");

  function handleFilter(chosenFilter) {
    setFilterBy(chosenFilter);
  }

  function handleSort(option) {
    setSortBy(option);
  }

  const sortedByName = [...hogs].sort((a, b) => {
    if (a.name < b.name) {
      return -1;
    }
  });

  const sortedByWeight = [...hogs].sort((a, b) => a - b);

  const displayHogs = hogs
    .filter((pig) => {
      if (filterBy === "All") {
        return true;
      } else if (filterBy === "true") {
        return pig.greased;
      } else {
        return !pig.greased;
      }
    });

  return (
    <div className="App">
      <Nav />
      <FilterPigs onHandleFilter={handleFilter} />
      <SortPigs onSort={handleSort} />
      <Hogs hogs={displayHogs} />
    </div>
  );
}

export default App;
