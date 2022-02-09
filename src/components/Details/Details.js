import React from 'react';
import { useParams } from "react-router-dom";
import { data } from '../../data';
import '../../App/App.scss';
import DetailData from './DetailData';

const Details = () => {
  const { id } = useParams();
  
  const details = data.data.features.find(earthquake => earthquake.id === id)

  return (
      <div className="App">
         <div className='container'>
             <div className="details-container">
                <h3>{details.properties.place}</h3>
                  <DetailData details={details}/>
             </div>
            </div>
      </div>

  )
}
export default Details
