import React from "react";

function FilterPigs({ onHandleFilter }) {
  console.log(onHandleFilter)
  
    function handleFilterSelect(e) {
        onHandleFilter(e.target.value)
    }
  return (
    <div>Filter Pigs
      <select onChange={handleFilterSelect} name="Greased Pigs">
        <option value="All">All Pigs</option>
        <option value={true}>Greased</option>
        <option value={false}>Not Greased</option>
      </select>
    </div>
  );
}

export default FilterPigs;
