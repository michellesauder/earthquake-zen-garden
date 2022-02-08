import React from 'react'
import { Link } from 'react-router-dom';

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
                        <tr key={feature.id}>
                            <td><Link to="/details" >{feature.properties.place}</Link></td>
                            <td>{feature.properties.mag}</td>
                            <td>{feature.properties.time}</td>
                        </tr>)
                })}
            </table>
        </>
    )
}

export default Table
