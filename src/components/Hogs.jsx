import React from "react";
import Hog from "./Hog";

function Hogs({ hogs }) {
  const listOfHogs = hogs.map((hog) => {
    return (
      <Hog
        key={hog.name}
        name={hog.name}
        img={hog.image}
        details={hog}
      />
    );
  });
  return <div className="pigs-container">{listOfHogs}</div>;
}

export default Hogs;
