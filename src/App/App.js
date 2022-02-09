import React from 'react';
import './App.scss';
import Table from '../components/Table/Table';

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
