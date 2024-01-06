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
        <h2>{trip.tripName}</h2>
        <p>{trip.date}</p>
        <p>{trip.peopleNumber}</p>
        <p>{trip.budget}</p>
        <p>{trip.foodPlan}</p>
        <p>{trip.foodPricing}</p>
        <p>{trip.lodging}</p>
        <p>{trip.lodgingPrice}</p>
        <p>{trip.tripLocation}</p>
        <p>{trip.visits}</p>
        <p>{trip.travelMeans}</p>
        <p>{trip.travelMeansPrice}</p>
        <button onClick={() => navigate('/')}>Back To Trips</button>
        <Footer />
    </div>
  );
};

export default Show;
