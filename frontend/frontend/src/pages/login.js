import React from "react";
import {useState} from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ userLogin }) => {
    const naviagate = useNavigate();
    //Local state for username and password
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    //Function to handle form submission
    const handleSubmit = async(e) => {
        e.preventDefault();
        userLogin(username, password);
    }

    //Function to handle user input changes
    const handleInputChange = (e) => {
        //Update the corresponding state based on input name
        if(e.target.name === "username") {
            setUsername(e.target.value);
        } else if (e.target.name === "password") {
            setPassword(e.target.value);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="username"
                    value={username}
                    onChange={handleInputChange}
                    placeholder="Username"
                />
                <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={handleInputChange}
                    placeholder="Password"
                />
                <button type="submit">
                    Login
                </button>
        </form>
    )
}

export default Login