import React, { createContext } from 'react';
import { Link } from 'react-router-dom';
import './Vehicle.css';

export const VehicleContext = createContext();

const Vehicle = (props) => {
    const { name, source } = props.vehicle;
    return (
        <>
            <Link to={`/destination/${name}`}>
                <div id="vehicle" className="vehicle">
                    <img src={source} alt="" /><br />
                    <button>{name}</button>
                </div>
            </Link>
        </>
    );
};

export default Vehicle;