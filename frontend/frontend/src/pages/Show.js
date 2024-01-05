import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Footer from "../components/footer"

const Show = (props) => {
  if(!props.trip){
    return
    <h2> loading </h2>
  }
  const trips = props.trips 
  const params = useParams()
  const navigate = useNavigate()
  const id = params.id
  const trip = trips.find((trip) => trip._id === id)

  return (
    <div className='trips'>
        <h2>{trips.tripName}</h2>
        <p>{trips.date}</p>
        <p>{trips.peopleNumber}</p>
        <p>{trips.budget}</p>
        <p>{trips.foodPlan}</p>
        <p>{trips.foodPricing}</p>
        <p>{trips.lodging}</p>
        <p>{trips.lodgingPrice}</p>
        <p>{trips.tripLocation}</p>
        <p>{trips.visits}</p>
        <p>{trips.travelMeans}</p>
        <p>{trips.travelMeansPrice}</p>
        <button onClick={navigate('/')}>Back To Trips</button>
        <Footer />
    </div>
  );
};

export default Show;
