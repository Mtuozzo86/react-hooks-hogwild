import React from 'react'

function HogDetails({details}) {
    return (
      <>
        <div>
          {details.specialty} | Weight: {details.weight}
        </div>
        <div>{details["highest medal achieved"]}</div>
      </>
    );
}

export default HogDetails