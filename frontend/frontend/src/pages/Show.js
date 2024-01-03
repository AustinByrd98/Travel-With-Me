<<<<<<< HEAD
import React from 'react'
import { useState } from 'react'
import NewForm from '../components/newForm'

const TripForm = (props) =>{
  return(
<>
<NewForm/>

</>

  )
}
=======
import React from "react";
import { useParams, useNavigate } from "react-router-dom";

>>>>>>> 12fd4ac42fe177361ac55ad674ebdc5106a803be

const Show = (props) => {
  const trips = props.trips 
  const params = useParams()
  const navigate = useNavigate()
  const id = params.id
  const trip = trips.find((trip) => trip._id === id)


   
  return (
    <div className='trips'>
        <h2>{trips.tripName}</h2>
        <h2>{trips.date}</h2>
        <h2>{trips.peopleNumber}</h2>
        <h2>{trips.budget}</h2>
        <h2>{trips.foodPlan}</h2>
        <h2>{trips.foodPricing}</h2>
        <h2>{trips.lodging}</h2>
        <h2>{trips.lodgingPrice}</h2>
        <h2>{trips.tripLocation}</h2>
        <h2>{trips.visits}</h2>
        <h2>{trips.travelMeans}</h2>
        <h2>{trips.travelMeansPrice}</h2>
        <button onClick={navigate('/')}>Back To Trips</button>
    </div>
  );
};

export default Show;
