import React, { useState } from 'react';
import '../../App/App.scss';
import TableData from './TableData';
import data from '../../data.json';


const Table = () => {
    const [sortedField, setSortedField] = useState();
    const [sortAscending, setSortAscending] = useState();
    const [sortedData, setSortedData] = useState(data.data.features)

    if (sortedField === undefined) {
      sortField("place")
    }

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
              <tbody>
                <tr>
                      <th onClick={() => sortField('place') } className={sortIndicator('place')}>Title</th>
                      <th onClick={() => sortField('mag')} className={sortIndicator('mag')}>Magnitude</th>
                      <th onClick={() => sortField('time')} className={sortIndicator('time')}>Time</th>
                </tr>
                <TableData tableData={sortedData}/>
              </tbody>
            </table>
        </>
    )
}

export default Table
