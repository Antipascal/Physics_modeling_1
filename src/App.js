import React, { useState } from 'react';
import Home from './pages/Home/Home';
import Loader from './components/Loader/Loader';

import './styles/styles.css';

const App = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState({
        rocketMass: '',
        fuelMass: '',
        uFunction: '',
        fFunction: ''
    });
    const handleDataChange = (data) => {
        setData(data);
        console.log(data);
        console.log(isLoading);
    }
    const handleIsLoading = () => {
        setIsLoading(isLoading => !isLoading);
        console.log(data);
        console.log(isLoading);
    }
    return isLoading ? <Loader /> : <Home data={data} handleChangeData={handleDataChange} handleIsLoading={handleIsLoading} />
}

export default App;