import React from "react";
import { useState } from "react";
import { Route, Routes } from 'react-router-dom';
import Index from '../pages/index';

// use trips as state, but setting it to null 
const Main = (props) => {
    const [ trips, setTrips ] = useState(null) 

    const URL = 'http://localhost:4000/trips/' 

    // function to get trips 
    // sending a request to fetch  data from the url 
    const getTrips = async() => {
        //  pause function here until we get requested response 
        // page is dependent on data, wait to load page until we have data we need 
        const response = await fetch(URL)
        const data = await response.json()
        setTrips(data.data)
    }
    return (
        <main>
            <Routes>
                <Route path='/' element={<Index trips={trips}/>} />
            </Routes>
        </main>
    )
}