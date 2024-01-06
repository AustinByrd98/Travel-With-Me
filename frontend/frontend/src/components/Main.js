import React, {useEffect, useState } from "react";
import { Route, Routes } from 'react-router-dom';
import Index from '../pages/index';
import New from "../pages/New.js";
import Show from "../pages/Show.js";
import { BrowserRouter} from "react-router-dom";
import Edit from "../pages/edit.js";

// use trips as state, but setting it to null 
const Main = (props) => {
    console.log('hi im here')
    const [ trips, setTrips ] = useState(null) 

    const URL = 'http://localhost:4000/trips/' 

    // function to get trips 
    // sending a request to fetch  data from the url 
   
    const getTrips = async() => {
        //  pause function here until we get requested response 
        // page is dependent on data, wait to load page until we have data we need 
        const response = await fetch(URL)
        const data = await response.json()
        console.log(data.data+"line 22")
        setTrips(data.data)
    }

    const createTrip = async (trip) =>{
        await fetch(URL ,{
            method:'post',
            headers:{
                'Content-Type': "application/json"
            },
            body:JSON.stringify(trip)
        })
        getTrips()
    }
    const updateTrip = async (trip, id) =>{
        await fetch(URL + id,{
            method:'put',
            headers:{
                'Content-Type': "application/json"
            },
            body:JSON.stringify(trip)
        })
        getTrips()
    }

    console.log(useEffect)
    useEffect(()=>{
        console.log('use-effect')
        getTrips()
    },[])
    console.log(trips)
    return (
        <main>
           
            <Routes>
                <Route path= '/' element={<Index trips={trips}/>} />
                <Route path= '/new' element={<New trip={trips} createTrip={createTrip}/> }/>
                <Route path= '/show/:id' element={<Show trips={trips}/>} />
                <Route path='/edit/:id' element={<Edit trip={trips} updateTrip={updateTrip}/>} />
            </Routes>
            
        </main>
    )
}

export default Main