import React, { useState } from 'react';

const Form = ({ handleChangeData }) => {
    const url = "http://localhost:8080/calculate";
    const [rocketMass, setRocketMass] = useState('');
    const [fuelMass, setFuelMass] = useState('');
    const [uFunction, setUFunction] = useState('');
    const [fFunction, setFFunction] = useState('');
    const postData = async () => {
        const response = await fetch(url, { 
            method: 'POST',
            mode: 'cors',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                "Access-Control-Allow-Credentials": "true",
                'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, DELETE',
                'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
            },
            body: JSON.stringify({
                rocketMass: rocketMass,
                fuelMass: fuelMass,
                uFunction: uFunction,
                fFunction: fFunction
            })
        })
        const data = await response.json();
        handleChangeData(data);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        postData();
    }
    return (
        <form className="form" onSubmit={handleSubmit}>
            <div className="form__rows">
                <div className="form__row">
                    <h2 className="form__title">Rocket Mass</h2>
                    <label htmlFor="rocket-mass"></label>
                    <input type="text" id="rocket-mass" className="form__input" placeholder="100" value={rocketMass} onChange={(e) => setRocketMass(e.target.value)}/>
                </div>
                <div className="form__row">
                    <h2 className="form__title">Fuel Mass</h2>
                    <label htmlFor="fuel-mass"></label>
                    <input type="text" id="fuel-mass" className="form__input" placeholder="100" value={fuelMass} onChange={(e) => setFuelMass(e.target.value)} />
                </div>
                <div className="form__row">
                    <h2 className="form__title">U</h2>
                    <label htmlFor="u-func"></label>
                    <input type="text" id="u-func" className="form__input" placeholder="100" value={uFunction} onChange={(e) => setUFunction(e.target.value)} />
                </div>
                <div className="form__row">
                    <h2 className="form__title">F function</h2>
                    <label htmlFor="f-func"></label>
                    <input type="text" id="f-func" className="form__input" placeholder="2 * t" value={fFunction} onChange={(e) => setFFunction(e.target.value)} />
                </div>
                <button className="form__button" type="submit">Submit</button>
            </div>
        </form>
    );
}

export default Form;