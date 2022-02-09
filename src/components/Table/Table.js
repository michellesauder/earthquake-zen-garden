import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { data } from '../../data';
import '../../App.scss';

const Table = () => {
    const [sortedField, setSortedField] = useState()
    const [sortAscending, setSortAscending] = useState()
    const [sortedData, setSortedData] = useState(data.data.features)

    var dateOptions = { year: 'numeric', month: 'short', day: 'numeric' };
    var timeOptions = { hour: '2-digit', minute: '2-digit' };


    if (sortedField === undefined) {
      sortField("place")
    }

    const tableData = sortedData.map((feature) => {
      let date = new Date(feature.properties.time);
      return (
        <tr key={feature.id}>
          <td data-label="Title" className="title">
            <Link to={`/details/${feature.id}`}>
              {feature.properties.place}</Link>
          </td>
          <td data-label="Magnitude" >{feature.properties.mag}</td>
          <td data-label="Time">{date.toLocaleDateString("en-US", dateOptions)}, {date.toLocaleTimeString("en-US", timeOptions)}</td>
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
            <table className="container" >
                  <tr>
                    <th onClick={() => sortField('place')} className={sortIndicator('place')}>Title</th>
                    <th onClick={() => sortField('mag')} className={sortIndicator('mag')}>Magnitude</th>
                    <th onClick={() => sortField('time')} className={sortIndicator('time')}>Time</th>
                  </tr>
              <tbody>
                  {tableData}
              </tbody>
            </table>
        </>
    )
}

export default Table
