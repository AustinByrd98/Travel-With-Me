import React, {useEffect, useState } from "react";
import { Route, Routes } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import Index from '../pages/index';
import New from "../pages/New.js";
import Show from "../pages/Show"
import { BrowserRouter } from "react-router-dom";
import Edit from "../pages/edit.js"

// use trips as state, but setting it to null 
const Main = (props) => {
    console.log('hi im here')
    const navigate = useNavigate();
    const [ trips, setTrips ] = useState(null) 

    const URL = 'https://travel-with-me.onrender.com/trips/' 

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
        const response = await fetch(URL ,{
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

    const updateTrip = async (trip, id) =>{
        const response = await fetch(URL + "/" + id,{
            method:'put',
            headers:{
                'Content-Type': "application/json"
            },
            body:JSON.stringify(trip),
            credentials: "include" //Inlcude credentials (cookies) with the request
        })
       if(response.ok) {
        getTrips() //Refresh the list of trips after successful edit
       } else {
        console.error("failed to edit trip")
       }
    }

    const deleteTrip = async (id)=>{
        const response = await fetch(URL + "/" + id,{
            method:'DELETE',
            credentials: "include" //Include credentials (cookies) with the request
        })
        if(response.ok) {
            getTrips() //Refresh the list of trips after successful deletion
        } else {
            console.error("failed to delete trip")
        }
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
                <Route path= '/show/:id' element={<Show trips={trips} deleteTrip={deleteTrip}/>} />
                <Route path='/edit/:id' element={<Edit trips={trips} updateTrip={updateTrip}/>} />
            </Routes>
            
        </main>
    )
}

export default Main