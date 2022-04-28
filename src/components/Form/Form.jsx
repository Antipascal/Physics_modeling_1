import React, { useState } from 'react';

const Form = () => {
    const [rocketMass, setRocketMass] = useState('');
    const [fuelMass, setFuelMass] = useState('');
    const [uFunction, setUFunction] = useState('');
    const [fFunction, setFFunction] = useState('');
    const handleSubmit = e => {
        e.preventDefault();
    }
    return (
        <form className="form" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="rocket-mass"></label>
                <input type="text" id="rocket-mass" className="form__input" value={rocketMass} onChange={(e) => setRocketMass(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="fuel-mass"></label>
                <input type="text" id="fuel-mass" className="form__input" value={fuelMass} onChange={(e) => setFuelMass(e.target.value)} />
            </div>
            <div>
                <label htmlFor="u-func"></label>
                <input type="text" id="u-func" className="form__input" value={uFunction} onChange={(e) => setUFunction(e.target.value)} />
            </div>
            <div>
                <label htmlFor="f-func"></label>
                <input type="text" id="f-func" className="form__input" value={fFunction} onChange={(e) => setFFunction(e.target.value)} />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
}

export default Form;