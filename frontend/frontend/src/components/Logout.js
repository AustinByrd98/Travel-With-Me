import React from "react";
import { useNavigate } from "react-router-dom";

const Logout = (props) => {
    const URL = "http://localhost:4000/"
    const navigate = useNavigate();
    //Function for users to logout
    const logoutUser = async() => {
        const response = await fetch(URL + "session/logout", {
            method: "post",
            credentials: "include"
        });
        if(response.ok) {
            props.setUser(null);
            navigate('/');
        } else {
            console.error("logout failed");
        }
    }
    return (
        <button onClick={logoutUser}>
            Logout
        </button>
    )
}

export default Logout