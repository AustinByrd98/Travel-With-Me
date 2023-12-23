import React from 'react'
import { useState } from 'react'

const TripForm = (props) =>{
    const [formData, setFormData] = useState({
        peopleNumber: '',    
    })
    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }
}

export default TripForm