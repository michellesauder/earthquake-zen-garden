import React from 'react';
import { useParams } from "react-router-dom";
import { data } from '../data';
import '../App.scss';

const Details = () => {
  const { id } = useParams()
  const details = data.data.features.find(earthquake => earthquake.id === id)
  const fields = [
    { label: "Title", value: "title" },
    { label: "Magnititude", value: "mag" },
    { label: "Time", value: "time" },
    { label: "Status", value: "status" },
    { label: "Tsunami", value: "tsunami" },
    { label: "Type", value: "type" }
  ]

  const detailTemplate = []

  fields.map(field => {
    if (field.value === "time") {
      details.properties[field.value] = new Date(details.properties[field.value]).toUTCString()
    }

    detailTemplate.push(
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
      <div className="App">
         <div className='container'>
             <div className="details-container">
                <h3>{details.properties.place}</h3>
                    <div>
                        {detailTemplate}
                    </div>
             </div>
            </div>
      </div>

  )
}
export default Details



// import React from 'react';
// import { useParams } from 'react-router-dom';
// import { data } from '../data';
// import '../App.scss';

// const Details = () => {
//     const params = useParams();
//     const featureId = params.id;
//     const features = data.data.features;
//     const feature = features.find(feature => feature.id === featureId)
//     const { properties } = feature;

//     return (
//         <div className="App">
//             <div className="container">
//                 <div className="details-container">
//                     <h3>{properties.place}</h3>
//                     <table>
//                         <tr>
//                             <td>Title</td>
//                             <td>{properties.title}</td>
//                         </tr>
//                         <tr>
//                             <td>Magnitude</td>
//                             <td>{properties.mag}</td>
//                         </tr>
//                         <tr>
//                             <td>Time</td>
//                             <td>{properties.time}</td>
//                         </tr>
//                         <tr>
//                             <td>Status</td>
//                             <td>{properties.status}</td>
//                         </tr>
//                         <tr>
//                             <td>Tsunami</td>
//                             <td>{properties.tsunami}</td>
//                         </tr>
//                         <tr>
//                             <td>Type</td>
//                             <td>{properties.type}</td>
//                         </tr>
//                     </table>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Details
