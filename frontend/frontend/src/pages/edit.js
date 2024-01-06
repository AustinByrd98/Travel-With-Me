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
    //onSave(editForm);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={editForm.tripName}
        name="tripName"
        placeholder={editForm.tripName}
        onChange={handleChange}
      />
      <input type="submit" value="submit" />
    </form>
  );
};

export default Edit;
