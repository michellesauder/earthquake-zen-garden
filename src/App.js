import React, { useEffect, useState } from 'react';
import './App.scss';
import { data } from './data';
import Table from '../src/components/Table';

const App = ({}) => {
    const [earthquakeData, setEarthquakeData] = useState([]);

    useEffect(() => {
        setEarthquakeData(data.data.features)
    }, []);

    return (
    <>
    <div className="App">
        <div className="container">
            <h1>
                USGS All Earthquakes, Past Hour
            </h1>
            <Table features={earthquakeData}/>
        </div>
    </div>
    </>
    )
}

export default App
