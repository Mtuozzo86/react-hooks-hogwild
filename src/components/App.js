import React, { useState } from "react";
import Nav from "./Nav";

import hogs from "../porkers_data";
import Hogs from "./Hogs";
import FilterPigs from "./FilterPigs";
import SortPigs from "./SortPigs";

function App() {
  const [filterBy, setFilterBy] = useState("All");
  const [sortBy, setSortBy] = useState("name");

  const displayHogs = hogs
    .filter((pig) => {
      if (filterBy === "All") {
        return true;
      } else if (filterBy === "true") {
        return pig.greased;
      } else {
        return !pig.greased;
      }
    })
    .sort((a, b) => {
      if (sortBy === "weight") {
        return a.weight - b.weight;
      } else {
        return a.name.localeCompare(b.name);
      }
    });

  return (
    <div className="App">
      <Nav />
      <FilterPigs onHandleFilter={setFilterBy} />
      <SortPigs onSort={setSortBy} />
      <Hogs hogs={displayHogs} />
    </div>
  );
}

export default App;
