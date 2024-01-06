import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

// // initialData to provide data to components before data has been fectched
// // onSave waits for one data is returned
const Edit = (props) => {



  const params = useParams()
  const trips = props.trips 
  console.log(trips)
  const id = params.id
  console.log(id)
  const trip = trips?.find((trip) => trip._id === id)
  const navigate = useNavigate()
    console.log(trip)
  const [editForm, setEditForm] = useState(trip);
  if (!editForm) {
    return <h2> Loading... </h2>;
  }
  
  
 


  // trip was undefined, needed to provided a default inital state - used or operator 
 

  // 
  //   // state for edit from

  // useEffect(() => {
  //   setEditForm(initialData);
  // }, [initialData]);

  // handleChange to edit new form
  const handleChange = (event) => {
    setEditForm({ ...editForm, [event.target.name]: event.target.value });
  };

  // preventDefault prevents the form from actually submitting
  const handleSubmit = (event) => {
    event.preventDefault();
    props.updateTrip(editForm, trip._id)
    navigate('/')
    //onSave(editForm);
  };
console.log(editForm.vists)
  return (
    <form onSubmit={handleSubmit}>
    <label>
      <span>Name your Trip </span> <input type="text" name="tripName" value={editForm.tripName} onChange={handleChange}/>
    </label><br />
    <label>
      <span>Date </span> <input type="text" name="date" value={editForm.date} onChange={handleChange}/><br />
    </label><br />
    <label>
      <span>Number of People </span> <input type="text" name='peopleNumber' value={editForm.peopleNumber} onChange={handleChange}/>
    </label><br />
    <label>
      <span>Budget </span> <input type="number" name="budget" value={editForm.budget} onChange={handleChange} />
    </label><br />
    <label>
      <span>Food Plan </span> <input type="text" name="foodPlan" value={editForm.foodPlan} onChange={handleChange} />
    </label><br />
    <label>
      <span>Food Cost </span> <input type="number" name="foodPricing" value={editForm.foodPricing} onChange={handleChange} />
    </label><br />
    <label>
      <span>Lodging </span> <input type="text" name="lodging" value={editForm.lodging} onChange={handleChange} />
    </label><br />
    <label>
      <span>Lodging Price </span> <input type="number" name="lodgingPrice" value={editForm.lodgingPrice} onChange={handleChange} />
    </label><br />
    <label>
      <span>Destination </span> <input type="text" name="tripLocation" value={editForm.tripLocation} onChange={handleChange} />
    </label><br />
    <label>
      <span>Travel Means </span>
      <input type="text" name="travelMeans" value={editForm.travelMeans} onChange={handleChange} />
    </label><br />
    <label>
      <span>Cost Of Travel Means </span>
      <input type="number" name="travelMeansPrice" value={editForm.travelMeansPrice} onChange={handleChange} />
    </label><br />
    <input type="submit" value="submit" />
  </form>
);
};

export default Edit;
