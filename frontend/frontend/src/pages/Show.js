import React, { useState } from 'react'


const tripFrom = (props) =>{
    const [formData, setFormData] = useState({
        peopleNumber: '', 
    })
}

const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value})
}

