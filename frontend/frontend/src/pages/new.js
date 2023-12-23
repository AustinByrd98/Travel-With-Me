import React, { useState } from 'react';

const [formData, setFormData] = useState({
    peopleNumber: '',    
})
const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value})
}


