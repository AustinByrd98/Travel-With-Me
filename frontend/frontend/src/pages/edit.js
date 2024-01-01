import React, { useState, useEffect } from "react";
import Header from "frontend/frontend/public/components/header.js";

Header = () => {
  <Header></Header>;
};

// initialData to provide data to components before data has been fectched
// onSave waits for one data is returned
const Edit = ({ initialData, onSave }) => {
  // state for edit from
  const [editForm, setEditForm] = useState(initialData);

  useEffect(() => {
    setEditForm(initialData);
  }, [initialData]);

  // handleChange to edit new form
  const handleChange = (event) => {
    setEditForm({ ...editForm, [event.target.name]: event.target.value });
  };

// preventDefault prevents the form from actually submitting
  const handleSubmit = (event) => {
    event.preventDefault();
    onSave(editForm);
  };

  return (
    <form onSubmit={handleSubmit}>
        <input
         type=""
         value={editForm.name}
         name=""
         placeholder=""
         onChange={handleChange}
        />
      <input type="submit" value="submit" />
    </form>
  );
};

export default Edit;
