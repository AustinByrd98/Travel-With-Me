const db = require('../models')

//create function 
const createTrip =(req,res)=>{
    db.Trips.create(req.body)
    .then((createdTrip)=>{
        if(!createdTrip){
            res.status(400).json({message:"can not make trip"})
        } else {
            res.status(201).json({data:createdTrip})
        }
    })
}

const getTrips =(req,res)=>{
    db.Trips.find({})
    .then((foundTrips)=>{
        if(!foundTrips){
            res.status(400).json({message:"cannot find trips "})
        } else{
            res.status(200).json({data:foundTrips})
        }
    })
}

const updateTrips =(req,res)=>{
    db.Trips.findByIdAndUpdate(req.params.id, req.body, {new:true})
    .then((updatedTrip)=>{
        if(!updatedTrip){
            res.status(400).json({message:"Couldn't update trip"})
        } else{
            res.status(200).json({data:updatedTrip})
        }
    })
}

const deleteTrip =(req,res)=>{
    db.Trips.findByIdAndDelete(req.params.id)
    .then((deletedTrip)=>{
        if(!deletedTrip){
            res.status(400).json({message:"Couldn't delete trip"})
        } else{
            res.status(200).json({data:deletedTrip, message:"trip deleted"})
        }
    })
}

module.exports={
    createTrip,
    getTrips,
    updateTrips,
    deleteTrip
}