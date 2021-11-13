import React from 'react';
import Aunty from '../Aunty/Aunty';
import Father from '../Father/Father';
import Uncale from '../Uncale/Uncale';

const GrandFather = (props) => {
    const {house} = props;
    return (
        <div >
           <h2>GrandFather</h2> 
           <h5>House : {house}</h5>
           <div style={{ display: 'flex'}}>
           <Father house={house} ></Father>
           <Uncale  house={house}></Uncale>
           <Aunty  house={house}></Aunty>
           </div>
          
        </div>
    );
};

export default GrandFather;