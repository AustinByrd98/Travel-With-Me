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
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="name"
                value={registerForm.name}
                onChange={handleInputChange}
                placeholder="Name"
            />
            <input
                type="email"
                name="email"
                value={registerForm.email}
                onChange={handleInputChange}
                placeholder="Name"
            />
            <input
                type="text"
                name="username"
                value={registerForm.username}
                onChange={handleInputChange}
                placeholder="Name"
            />
            <input
                type="password"
                name="password"
                value={registerForm.password}
                onChange={handleInputChange}
                placeholder="Name"
            />
            <button type="submit">
                Register
            </button>
        </form>
    )
}

export default Register