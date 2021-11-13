import React from 'react';

const Brother = (props) => {
    const {house} = props;
    return (
        <div>
            <h2>Brother</h2>
            <p>House: {house}</p>
        </div>
    );
};

export default Brother;