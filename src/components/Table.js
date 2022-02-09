import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { data } from '../data';
import '../App.scss';

const Table = () => {
    const [sortedField, setSortedField] = useState()
    const [sortAscending, setSortAscending] = useState()
    const [sortedData, setSortedData] = useState(data.data.features)

    if (sortedField === undefined) {
      sortField("place")
    }

    const tableData = sortedData.map((feature) => {
      return (
        <tr key={feature.id}>
          <td data-label="Title" className="primary">
            <Link to={`/details/${feature.id}`}>
              {feature.properties.place}</Link>
          </td>
          <td data-label="Magnitude">{feature.properties.mag}</td>
          <td data-label="Time">{new Date(feature.properties.time).toUTCString()}</td>
        </tr>
      )
    });

    function sortField(name) {
        setSortAscending(!sortAscending)
        sortedData.sort((a, b) => {
          if (a.properties[name] < b.properties[name]) {
            return sortAscending ? 1 : -1
          }
          if (a.properties[name] > b.properties[name]) {
            return sortAscending ? -1 : 1
          }
          return 0
        })
    
        setSortedField(name)
        setSortedData(sortedData)
      }
    
      function sortIndicator(fieldName) {
        if (sortedField === fieldName) {
          if (sortAscending) {
            return "asc"
          }
          return "desc"
        }
      }
    return (
        <>
        <div className="App">
            <table className="container" >
                <th>
                    <tr>
                      <th onClick={() => sortField('place')} className={sortIndicator('place')}>Title</th>
                      <th onClick={() => sortField('mag')} className={sortIndicator('mag')}>Magnitude</th>
                      <th onClick={() => sortField('time')} className={sortIndicator('time')}>Time</th>
                    </tr>
                </th>
            <tbody>
                {tableData}
            </tbody>
            </table>
        </div>
        </>
    )
}

export default Table
