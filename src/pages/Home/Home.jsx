import React from 'react';
import Chart from '../../components/Chart/Chart';
import Form from '../../components/Form/Form';

const Home = ({ data, handleChangeData }) => {
    return (
        <div>
            <div className="top-bar"></div>
            <Form handleChangeData={handleChangeData}/>
            <Chart data={data}/>
        </div>
    )
}

export default Home;