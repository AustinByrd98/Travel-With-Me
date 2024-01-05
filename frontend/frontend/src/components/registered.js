import React from "react";

const RegisteredUser = (props) => {
  return (
    <form>
      <label>
        <p> Enter Username</p> <input type="text" name="username" />
      </label>
      <label>
        <p> Enter Password</p> <input type="text" name="password" />
      </label>
    </form>
  );
};

export default RegisteredUser;
