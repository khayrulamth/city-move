import React from 'react';
import './Vehicle.css';

const Vehicle = (props) => {
    const {name,source} = props.vehicle;
    return (
        <div id="vehicle" className="vehicle">
            <img src={source} alt="" /><br/>
            <button>{name}</button>
        </div>
    );
};

export default Vehicle;