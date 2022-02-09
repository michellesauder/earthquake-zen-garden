import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Details from '../components/Details';

const Table = ({ features }) => {

    const [sortedField, setSortedField] = useState(null);

    let sortedFeatures = [...features];
    if (sortedField !== null) {
        sortedFeatures.sort((a, b) => {
        if (a[sortedField] < b[sortedField]) {
          return -1;
        }
        if (a[sortedField] > b[sortedField]) {
          return 1;
        }
        return 0;
      });
    }
    
    return (
        <>
        <table>
            <tr>
                <th onClick={() => setSortedField('title')}>Title</th>
                <th onClick={() => setSortedField('mag')}>Magnitude</th>
                <th onClick={() => setSortedField('time')}>Time</th>
            </tr>
            {sortedFeatures.map((feature)=>{
                return (
                        <tr>
                            <td><Link to={`/details/${feature.id}`} >{feature.properties.place}</Link></td>
                            <td>{feature.properties.mag}</td>
                            <td>{feature.properties.time}</td>
                        </tr>)
                })}
            </table>
        </>
    )
}

export default Table
