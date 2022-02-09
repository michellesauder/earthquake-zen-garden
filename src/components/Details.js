import React from 'react';
import { useParams } from 'react-router-dom';
import { data } from '../data';
import '../App.scss';

const Details = () => {
    const params = useParams();
    const featureId = params.id;
    const features = data.data.features;
    const feature = features.find(feature => feature.id === featureId)
    const { properties } = feature;

    return (
        <div className="App">
            <div className="container">
                <h1>{properties.place}</h1>
                <table>
                    <tr>
                        <td>Title</td>
                        <td>{properties.title}</td>
                    </tr>
                    <tr>
                        <td>Magnitude</td>
                        <td>{properties.mag}</td>
                    </tr>
                    <tr>
                        <td>Time</td>
                        <td>{properties.time}</td>
                    </tr>
                    <tr>
                        <td>Status</td>
                        <td>{properties.status}</td>
                    </tr>
                    <tr>
                        <td>Tsunami</td>
                        <td>{properties.tsunami}</td>
                    </tr>
                    <tr>
                        <td>Type</td>
                        <td>{properties.type}</td>
                    </tr>
                </table>
            </div>
        </div>
    )
}

export default Details
