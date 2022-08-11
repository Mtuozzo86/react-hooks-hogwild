import React from "react";

function SortPigs({onSort}) {
  function handleSort(e) {
    onSort(e.target.value);
  }
  return (
    <div>
      Sort Pigs
      <select onChange={handleSort}>
        <option value="name">By Name</option>
        <option value="weight">By Weight</option>
      </select>
    </div>
  );
}

export default SortPigs;
