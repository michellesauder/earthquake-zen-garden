import React from 'react';
import { Link } from 'react-router-dom';

const TableData = ({ tableData }) => {
    var dateOptions = { year: 'numeric', month: 'short', day: 'numeric' };
    var timeOptions = { hour: '2-digit', minute: '2-digit' };

    return (<>
            {tableData.map((feature) => {
                let date = new Date(feature.properties.time);
                    return (
                        <tr key={feature.id}>
                            <td data-label="Title" className="title">
                                <Link to={`/details/${feature.id}`}>
                                {feature.properties.place}</Link>
                            </td>
                                <td data-label="Magnitude" >{feature.properties.mag}</td>
                                <td data-label="Time">{date.toLocaleDateString("en-US", dateOptions)}, {date.toLocaleTimeString("en-US", timeOptions)}</td>
                        </tr>)
                    })
            }
    </>)
}

export default TableData
