import React from "react";
import {useState} from "react";
import { Route, Routes, useResolvedPath, useNavigate } from "react-router-dom"
import MainNavBar from "./navBar";
import Login from "../pages/login"
import Register from "../pages/register"

//Function for manipulating users state from parent App.js
const Auth = (props) => {
    const navigate = useNavigate()

    const URL = "https://travel-with-me.onrender.com/"

    //Function for registered users loggin in
    const userLogin = async(username, password) => {
        const response = await fetch(URL + "session", {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({username, password}),
            credentials: "include"
        })
        if(response.ok) {
            const data = await response.json(); //waits for the JSON parsing to be complete
            console.log(data)
            props.setUser({
                id: data.user.id,
                username: data.user.username
            });
            navigate('/');
        }
    }

    //Function for new users registering
    const newUser = async(username, password) => {
        const response = await fetch(URL + "newuser", {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body:JSON.stringify(username, password)
        })
        if(response.ok) {
            navigate('/login')
        }
    }

    //Function for users to logout
     const logoutUser = async() => {
        const response = await fetch(URL + "logout", {
            method: "get",
            credentials: "include"
        });
        if(response.ok) {
            props.setUser(null);
            navigate('/')
        } else {
            console.error("logout failed")
        }
    }

    return(
        <>
            <Routes>
                <Route path='/login' element={<Login userLogin={userLogin}/>}></Route>
                <Route path='/register' element={<Register newUser={newUser}/>}></Route>
            </Routes>
        </>
    )
    
}

export default Auth