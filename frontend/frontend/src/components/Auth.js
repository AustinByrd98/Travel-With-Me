import React from "react";
import {useState} from "react";
import { Route, Routes, useResolvedPath } from "react-router-dom"
import Login from "../pages/login"
import Register from "../pages/register"

//Function for manipulating users state from parent App.js
const Auth = (props) => {

    const URL = "http://localhost:4000/"

    //Function for registered users loggin in
    const userLogin = async(username, password) => {
        const response = await fetch(URL + "session", {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(username, password)
        })
        if(response.ok) {
            const data = await response.json(); //waits for the JSON parsing to be complete
            props.setUser({
                id: data.user.id,
                username: data.user.username
            })
        }
    }

    //Function for new users registering
    const newUser = async(username, password) => {
        await fetch(URL + "user", {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body:JSON.stringify(username, password)
        })
    }

    return(
        <>
            <Routes>
                <Route path='/session' element={<Login userLogin={userLogin}/>}></Route>
                <Route path='/user' element={<Register newUser={newUser}/>}></Route>
            </Routes>
        </>
    )
    
}