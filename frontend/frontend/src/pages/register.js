import React from "react";
import {useState} from "react";

const Register = ({ newUser }) => {
    //Local state for user registration 
    const [registerForm, setRegisterForm] = useState({
        name: "",
        email: "",
        username: "",
        password: "",
    });

    //Function to handle form submission
    const handleSubmit = async(e) => {
        e.preventDefault();
        newUser(registerForm);
        setRegisterForm({
            name: "",
            email: "",
            username: "",
            password: "",
        })
    };

    //Function to handle user input changes
    const handleInputChange = async(e) => {
        //Update the corresponding state based on input name
        setRegisterForm({...registerForm, [e.target.name]: e.target.value})
    };

    return (
        <div className="RegisterStyle">
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="name"
                value={registerForm.name}
                onChange={handleInputChange}
                placeholder="Name"
            /> <br />
            <input
                type="email"
                name="email"
                value={registerForm.email}
                onChange={handleInputChange}
                placeholder="Email"
            /> <br />
            <input
                type="text"
                name="username"
                value={registerForm.username}
                onChange={handleInputChange}
                placeholder="Username"
            /> <br />
            <input
                type="password"
                name="password"
                value={registerForm.password}
                onChange={handleInputChange}
                placeholder="Password"
            /> <br />
            <button type="submit" className="submitButton">
                Register
            </button>
        </form>
        </ div>
    )
}

export default Register