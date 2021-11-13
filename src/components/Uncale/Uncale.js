import React, { useContext } from 'react';
import { RingContext } from '../../App';

const Uncale = () => {
  
const [ornaments, house] = useContext(RingContext);


    return (
        <div>
            <h2>this is uncale</h2>
            <p>House: {house}</p>
            <p>{ornaments}</p>
        </div>
    );
};

export default Uncale;