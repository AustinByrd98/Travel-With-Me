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
    res.send('get trips ')
    db.Trips.find({})
    .then((foundTrips)=>{
        if(!foundTrips){
            res.status(400).json({message:"cannot find trips "})
        } else{
            res.status(200).json({data:foundTrips})
        }
    })
}

module.exports={
    createTrip,
    getTrips
}