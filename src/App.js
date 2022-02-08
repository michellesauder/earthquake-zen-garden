import React, { useEffect, useState } from 'react';
import './App.scss';
import { data } from './data';
import Table from '../src/components/Table';
import Header from '../src/components/Header';

const App = ({}) => {
    const [earthquakeData, setEarthquakeData] = useState([]);
    const [profile, setProfile] = useState({});
    const [siteInfo, setSiteInfo] = useState({});

    useEffect(() => {
        setProfile(data.profile)
        setEarthquakeData(data.data.features)
        setSiteInfo(data.site)
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
