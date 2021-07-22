import React from 'react';
import '../Header/Header.css';
import './Home.css';
import bike from '../../Images/bike.png';
import bus from '../../Images/bus.png';
import car from '../../Images/car.png';
import train from '../../Images/train.png';
import Vehicle from '../Vehicle/Vehicle';

const Home = () => {

    const vehicleSource = [{ 'source': bike }, { 'source': bus }, { 'source': car }, { 'source': train }]
    const vehicleName = ["bike", "bus", "car", "train"];

    for (let i = 0; i < vehicleSource.length; i++) {
        vehicleSource[i].name = vehicleName[i];
    }
    //const newVehicle = [...vehecleSource, vehicleName];

    return (
        <div className="home">
            {
                vehicleSource.map((vehicle) => {
                    return <Vehicle vehicle={vehicle}></Vehicle>
                })
            }
        </div>
    );
};

export default Home;