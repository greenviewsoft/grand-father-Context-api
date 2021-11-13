import React, { useContext } from 'react';
import { RingContext } from '../../App';

const Special = () => {
   
   const [ornaments, house] = useContext(RingContext)
   console.log(ornaments);
    return (
        <div>
            <h2>Special : {ornaments}</h2>
            <small>House:{house}</small>
        </div>
    );
};

export default Special;