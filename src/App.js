import React, { useEffect, useState } from 'react';
import './App.scss';
import { data } from './data';
import Table from '../src/components/Table';

const App = () => {
    return (
    <>
    <div className="App">
        <div className="container">
            <h2>USGS All Earthquakes, Past Hour</h2>
            <Table />
        </div>
    </div>
    </>
    )
}

export default App
