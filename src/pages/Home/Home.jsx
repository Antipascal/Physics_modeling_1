import React from 'react';
import Chart from '../../components/Chart/Chart';
import Form from '../../components/Form/Form';
import Header from '../../components/Header/Header';

const Home = ({ data, handleChangeData }) => {
    return (
        <>
            <div className="top-bar"></div>
            <Header />
            <div className="container">
                <Form handleChangeData={handleChangeData}/>
                <Chart data={data}/>
            </div>
        </>
    )
}

export default Home;