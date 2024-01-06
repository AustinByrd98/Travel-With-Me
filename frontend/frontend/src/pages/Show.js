import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Footer from "../components/footer"

const Show = (props) => {

const params = useParams()
  const trips = props.trips 
  console.log(trips)
  const id = params.id
  const trip = trips?.find((trip) => trip._id === id)
  const navigate = useNavigate()
    console.log(trip)
  if(!trip){
    return( <h2> Loading... </h2>)
  }

  return (
    <div className='trips'>
        <h2>Trip Name: {trip.tripName}</h2>
        <p>Trip Date: {trip.date}</p>
        <p>People: {trip.peopleNumber}</p>
        <p>Budget: ${trip.budget}</p>
        <p>Food Plan: {trip.foodPlan}</p>
        <p>Food Cost Plan: ${trip.foodPricing}</p>
        <p>Lodging: {trip.lodging}</p>
        <p>Lodging Cost: ${trip.lodgingPrice}</p>
        <p>Location: {trip.tripLocation}</p>
        <p>Visits: {trip.visits}</p>
        <p>Trasportation: {trip.travelMeans}</p>
        <p>Trasportation Cost: ${trip.travelMeansPrice}</p>
        <Footer />
    </div>
  );
};

export default Show;
