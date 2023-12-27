import React from "react";

const NewUser = (props) => {
  return (
    <form>
      <label>
        <p>Enter Name</p> <input type="text" name="name" />
      </label>
      <label>
        <p>Create Username</p> <input type="text" name="username" />
      </label>
      <label>
        <p>Create Password</p> <input type="text" name="password" />
      </label>
      <label>
        <p>Provide Email</p> <input type="text" name="email" />
      </label>
    </form>
  );
};

export default NewUser;
