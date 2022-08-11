import React, { useState} from 'react'
import HogDetails from './HogDetails';

function Hog({ name, img, details }) {


    const [viewDetails, setViewDetails] = useState(false)

    return (
      <div className="pig-card">
        <div>{name}</div>
            <img onClick={() => setViewDetails(!viewDetails)} className='pig-img' src={img} alt={img} />
            {viewDetails && <HogDetails details={details}/>}
            
      </div>
    );
}

export default Hog