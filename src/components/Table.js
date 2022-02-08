import React from 'react'
import { Link } from 'react-router-dom';
import Details from '../components/Details';

const Table = ({ features }) => {
    return (
        <>
        <table>
            <tr>
                <th>Title</th>
                <th>Magnitude</th>
                <th>Time</th>
            </tr>
            {features.map((feature)=>{
                return (
                        <tr>
                            <td><Link to="/details" element={<Details feature={feature}/>} >{feature.properties.place}</Link></td>
                            <td>{feature.properties.mag}</td>
                            <td>{feature.properties.time}</td>
                        </tr>)
                })}
            </table>
        </>
    )
}

export default Table
