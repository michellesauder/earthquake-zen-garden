import React from 'react'

const DetailData = ({ details }) => {

    const fields = [
        { label: "Title", value: "title" },
        { label: "Magnititude", value: "mag" },
        { label: "Time", value: "time" },
        { label: "Status", value: "status" },
        { label: "Tsunami", value: "tsunami" },
        { label: "Type", value: "type" }
      ];

    const detailData = [];


    fields.map(field => {
        if (field.value === "time") {
          details.properties[field.value] = new Date(details.properties[field.value]).toUTCString()
        }
        detailData.push(
          <div className='row' key={field.value}>
            <div className='title'>
              {field.label}
            </div>
            <div className='value'>
              {details.properties[field.value]}
            </div>
          </div>
        )
      });


    return (
        <div>{detailData}</div>
    )
}

export default DetailData
