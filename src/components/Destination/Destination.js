import React, { useState } from 'react';
import './Destination.css';
import Map from '../Map/Map';
import { useParams } from 'react-router';

const Destination = () => {

    const [value, setValue] = useState(false);
    const { vehicleId } = useParams();
    const [toValue, setToValue] = useState("");
    const [fromValue, setFromValue] = useState("");

    const handleBlur = (e) => {
        if (e.target.name === 'from') {
            const fromInputValue = e.target.value;
            // isFieldValid = fromValue.length >= 1;
            if (fromValue.length >= 1) {
                setFromValue(fromInputValue);
            }
        }

        if (e.target.name === 'to') {
            const toInputValue = e.target.value;
            if (toValue.length > 1) {
                setToValue(toInputValue)
            }
        }
        if (fromValue && toValue) {
            setValue(true);
        }

    }

    const handleSubmit = () => {



    }

    return (
        <div className="map-search destination">
            <div className="search">
                {
                    !value ? <div className="inputs">
                        <p>You choose: {vehicleId} journey. </p>
                        <label id='top-label' htmlFor="form">Pick from</label>
                        <input onBlur={handleBlur} type="text" name="from" placeholder="from" id="" />
                        <label htmlFor="to">Pick to</label>
                        <input onBlur={handleBlur} type="text" name="to" placeholder="to" id="" />
                        <input onClick={handleSubmit}
                            type="button" name="submit" value="Submit" />
                    </div> : <div className="inputs">
                        <p>You choose: {vehicleId} journey. </p>
                        <label id='top-label' htmlFor="form">Pick from</label>
                        <input defaultValue={fromValue} type="text" name="from" placeholder="from" id="" />
                        <label htmlFor="to">Pick to</label>
                        <input defaultValue={toValue} type="text" name="to" id="" />

                    </div>
                }
            </div>
            <Map></Map>
        </div>
    );
}


export default Destination;