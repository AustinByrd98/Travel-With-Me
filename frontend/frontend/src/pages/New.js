import React, { useState } from 'react';


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
      <div className='FormStyle'>
        <form onSubmit={handleSubmit} >
      <label>
        <span>Name your Trip </span> <input type="text" name="tripName" value={newForm.tripName} onChange={handleChange}/>
      </label><br />
      <label>
        <span>Data </span> <input type="text" name="date" value={newForm.date} onChange={handleChange}/><br />
      </label><br />
      <label>
        <span>Number of People </span> <input type="text" name="peopleNumber" value={newForm.peopleNumber} onChange={handleChange}/>
      </label><br />
      <label>
        <span>Budget </span> <input type="number" name="budget" value={newForm.budget} onChange={handleChange} />
      </label><br />
      <label>
        <span>Food Plan </span> <input type="text" name="foodPlan" value={newForm.foodPlan} onChange={handleChange} />
      </label><br />
      <label>
        <span>Food Cost </span> <input type="number" name="foodPricing" value={newForm.foodPricing} onChange={handleChange} />
      </label><br />
      <label>
        <span>Lodging </span> <input type="text" name="lodging" value={newForm.lodging} onChange={handleChange} />
      </label><br />
      <label>
        <span>Lodging Price </span> <input type="number" name="lodgingPrice" value={newForm.lodgingPrice} onChange={handleChange} />
      </label><br />
      <label>
        <span>Destination </span> <input type="text" name="tripLocation" value={newForm.tripLocation} onChange={handleChange} />
      </label><br />
      <label>
        <span>Excursion </span> <input type="text" name="vists" value={newForm.vists} onChange={handleChange} />
      </label><br />
      <label>
        <span>Travel Means </span>
        <input type="text" name="travelMeans"value={newForm.travelMeans} onChange={handleChange} />
      </label><br />
      <label>
        <span>Cost Of Travel Means </span>{" "}
        <input type="number" name="travelMeansPrice" value={newForm.travelMeansPrice} onChange={handleChange} />
      </label><br />
      <input className='submitButton' type="submit" value="submit" />
    </form>
      </div>
    )
}



