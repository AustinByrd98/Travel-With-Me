import React, {useEffect, useState } from "react";
import { Route, Routes } from 'react-router-dom';
import Index from '../pages/index';
import New from "../pages/new.js";
import Show from "../pages/Show"
import { useNavigate } from "react-router-dom";

// use trips as state, but setting it to null 
const Main = (props) => {
    const navigate = useNavigate()
    const [ trips, setTrips ] = useState(null) 

    const URL = 'http://localhost:4000/trips' 

    // function to get trips 
    // sending a request to fetch  data from the url 
   
    const getTrips = async() => {
        //  pause function here until we get requested response 
        // page is dependent on data, wait to load page until we have data we need 
        const response = await fetch(URL, {
            credentials: "include" //Include credentials (cookie) with the request
        })
        const data = await response.json()
        console.log(data.data+"line 22")
        setTrips(data.data)
    }

    const createTrip = async (trip) =>{
        const response = await fetch(URL, {
            method:'post',
            headers:{
                'Content-Type': "application/json"
            },
            body:JSON.stringify(trip),
            credentials: "include"
        })
        if(response.ok) {
            navigate('/');
        }
        getTrips()
    }

    useEffect(()=>{
        if(props.user) {
            getTrips();
        } else {
            setTrips(null)
        }
    },[props.user])
    
    return (
        <main>
           
            <Routes>
                <Route path= '/' element={<Index trips={trips}/>} />
                <Route path= '/new' element={<New trip={trips} createTrip={createTrip}/> }/>
                <Route path= '/show/:id' element={<Show trip={trips}/>} />
            </Routes>
            
        </main>
    )
}

export default Main