const db = require('../models')

//create function 
const createTrip =(req,res)=>{
    db.Trips.create(req.body)
    .then((createdTrip)=>{
        if(!createdTrip){
            res.status(400).json({message:"can not make trip"})
        } else {
            res.status(201).json({message:'trip made'})
        }
    })
}

module.exports={
    createTrip,
}