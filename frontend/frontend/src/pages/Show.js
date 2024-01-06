import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Footer from "../components/footer"

const Show = (props) => {
  // console.log(props.trip)
  const params = useParams()
  const id = params.id
  const trips = props.trip
  const trip = trips?.find((trip) => trip._id === id)
  const navigate = useNavigate()

  if(!props.trip){
    return
    <h2> Loading... </h2>
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
