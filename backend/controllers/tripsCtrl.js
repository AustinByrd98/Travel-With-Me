const db = require('../models')

//create function 
const createTrip =(req,res)=>{
    const newTrip = {
        ...req.body,
        user: req.session.currentUser._id //Assoicating the new trip with the userId
    }
    db.Trips.create(newTrip)
    .then((createdTrip)=>{
        if(!createdTrip){
            res.status(400).json({message:"can not make trip"})
        } else {
            res.status(201).json({data:createdTrip})
        }
    })
}

const getTrips =(req,res)=>{
    db.Trips.find({ user: req.session.currentUser._id})
    .then((foundTrips)=>{
        if(!foundTrips){
            res.status(400).json({message:"cannot find trips "})
        } else{
            res.status(200).json({data:foundTrips})
        }
    })
}

const updateTrips =(req,res)=>{
    const userId = req.session.currentUser._id
    db.Trips.findOneAndUpdate({id: req.params.id, user: userId}, req.body, {new:true})
    .then((updatedTrip)=>{
        if(!updatedTrip){
            res.status(400).json({message:"Couldn't update trip"})
        } else{
            res.status(200).json({data:updatedTrip})
        }
    })
}

const deleteTrip =(req,res)=>{
    const userId = req.session.currentUser._id
    db.Trips.findOneAndDelete({id: req.params.id, user: userId})
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