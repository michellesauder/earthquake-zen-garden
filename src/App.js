import React, { useEffect, useState } from 'react';
import './App.scss';
import { data } from './data';
import Table from '../src/components/Table';

const App = () => {
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
        <div className="header">
            <img src={siteInfo.logoImage}/>
            <h2 className="title">{siteInfo.title}</h2>
            <a href="/profile">Welcome {profile.firstName}</a>
        </div>
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
