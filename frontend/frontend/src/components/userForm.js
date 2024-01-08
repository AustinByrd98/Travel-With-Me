import React from "react";

const NewUser = (props) => {
  return (
    <div className="FormStyle">
    <form>
      <label>
        <p>Enter Name</p> <input type="text" name="name" />
      </label> <br />
      <label>
        <p>Create Username</p> <input type="text" name="username" />
      </label> <br />
      <label>
        <p>Create Password</p> <input type="text" name="password" />
      </label> <br />
      <label>
        <p>Provide Email</p> <input type="text" name="email" />
      </label>
    </form>
    </div>
  );
};

export default NewUser;
