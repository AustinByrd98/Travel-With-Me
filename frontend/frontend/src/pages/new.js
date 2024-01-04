import React, { useState } from 'react';
import NewForm from "../components/newForm"
import Header from "frontend/frontend/public/components/header.js";
import NavBar from '../components/navBar'

export default function New(props){
    console.log(props)
    const [newForm, setNewForm] = useState({
        tripName: "",
        date: "",
        peopleNumber: "",
        budget: "",
        foodPlan: "",
        foodPricing: "",
        lodging: "",
        lodgingPrice: "",
        tripLocation: "",
        vists: "",
        travelMeans: "",
        travelMeansPrice: "",
      });
    
      const handleChange = (e) => {
        setNewForm({ ...newForm, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log(newForm)
        props.createTrip(newForm);
        setNewForm({
          tripName: "",
          date: "",
          peopleNumber: "",
          budget: "",
          foodPlan: "",
          foodPricing: "",
          lodging: "",
          lodgingPrice: "",
          tripLocation: "",
          vists: "",
          travelMeans: "",
          travelMeansPrice: "",
        });
      };


    return(
        <>
        <form onSubmit={handleSubmit} >
      <label>
        <p>Name your Trip</p> <input type="text" name="tripName" value={newForm.tripName} onChange={handleChange}/>
      </label>
      <label>
        <p>Data</p> <input type="text" name="date" value={newForm.date} onChange={handleChange}/>
      </label>
      <label>
        <p>Number of People</p> <input type="text" name="peopleNumber" value={newForm.peopleNumber} onChange={handleChange}/>
      </label>
      <label>
        <p>Budget</p> <input type="number" name="budget" value={newForm.budget} onChange={handleChange} />
      </label>
      <label>
        <p>Food Plan</p> <input type="text" name="foodPlan" value={newForm.foodPlan} onChange={handleChange} />
      </label>
      <label>
        <p>Food Cost</p> <input type="number" name="foodPricing" value={newForm.foodPricing} onChange={handleChange} />
      </label>
      <label>
        <p>Lodging</p> <input type="text" name="lodging" value={newForm.lodging} onChange={handleChange} />
      </label>
      <label>
        <p>Lodging Price</p> <input type="number" name="lodgingPrice" value={newForm.lodgingPrice} onChange={handleChange} />
      </label>
      <label>
        <p>Destination</p> <input type="text" name="tripLocation" value={newForm.tripLocation} onChange={handleChange} />
      </label>
      <label>
        <p>Visits</p> <input type="text" name="vists" value={newForm.vists} onChange={handleChange} />
      </label>
      <label>
        <p>Travel Means</p>
        <input type="text" name="travelMeans"value={newForm.travelMeans} onChange={handleChange} />
      </label>
      <label>
        <p>Cost Of Travel Means</p>{" "}
        <input type="number" name="travelMeansPrice" value={newForm.travelMeansPrice} onChange={handleChange} />
      </label><br/>
      <input type="submit" value="submit" />
    </form>
    <Header />
    <NavBar />
        </>
    )
}



