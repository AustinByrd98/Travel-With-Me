import React from "react";
import { useParams, useNavigate, Navigate } from "react-router-dom";
import { useState } from "react";

const NewForm = (props) => {
    const handleChange = props.handleChange()
    const handleSubmit = props.handleSubmit()
    console.log(props)
    console.log(handleChange)
    console.log(handleSubmit)

  
  return (
    <form onSubmit={handleSubmit} >
      <label>
        <p>Name your Trip</p> <input type="text" name="tripName" onChange={handleChange}/>
      </label>
      <label>
        <p>Data</p> <input type="text" name="date" onChange={handleChange}/>
      </label>
      <label>
        <p>Number of People</p> <input type="text" name="peopleNumber" onChange={handleChange}/>
      </label>
      <label>
        <p>Budget</p> <input type="number" name="budget" onChange={handleChange} />
      </label>
      <label>
        <p>Food Plan</p> <input type="text" name="foodPlan" onChange={handleChange} />
      </label>
      <label>
        <p>Food Cost</p> <input type="number" name="foodPricing" onChange={handleChange} />
      </label>
      <label>
        <p>Lodging</p> <input type="text" name="lodging" onChange={handleChange} />
      </label>
      <label>
        <p>Lodging Price</p> <input type="number" name="lodgingPrice" onChange={handleChange} />
      </label>
      <label>
        <p>Destination</p> <input type="text" name="tripLocation" onChange={handleChange} />
      </label>
      <label>
        <p>Visits</p> <input type="text" name="visits" onChange={handleChange} />
      </label>
      <label>
        <p>Travel Means</p>
        <input type="text" name="travelMeans" onChange={handleChange} />
      </label>
      <label>
        <p>Cost Of Travel Means</p>{" "}
        <input type="number" name="travelMeansPrice" onChange={handleChange} />
      </label>
      <input type="submit" value="submit" />
    </form>
  );
};

export default NewForm;
