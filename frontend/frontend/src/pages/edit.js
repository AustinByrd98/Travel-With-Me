import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

// // initialData to provide data to components before data has been fectched
// // onSave waits for one data is returned
const Edit = (props) => {
  console.log(props)
  const params = useParams();
  const data = props.trip;
  console.log(data);
  const id = params.id;
  console.log(id)
  const trip = data?.find((trip) => trip._id === id);
  const navigate = useNavigate();
  console.log(trip);

  const [editForm, setEditForm] = useState(trip);

  if (!trip) {
    return <h2> Loading... </h2>;
  }

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
    props.updateTrip(editForm)
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
