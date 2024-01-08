const db = require('../models')

//create function 
const createTrip = (req, res) => {
    //Check if the user session exists
    if(!req.session.currentUser) {
        return res.status(400).json({ message: "No active session found"});
    };
    //Creating the new trip object
    const newTrip = {
        ...req.body,
        user: req.session.currentUser.id
    };
    //Create the trip
    db.Trips.create(newTrip).then((createdTrip) => {
        if(!createdTrip) {
            return res.status(400).json({ message: "Cannot make trip"})
        }
            //Trip is created successfully, now update the user's trip array
            return db.Users.findByIdAndUpdate(
                req.session.currentUser.id,
                {$push: {trips: createdTrip._id}},
                {new: true}
            );
        }).then((updatedUser) => {
            if(updatedUser) {
                //The user db was successfully updated with the new trip id
                return res.status(201).json({ message: "Trip created and user updated successfully"})
            } else {
                //The user document was not found or updated
                return res.status(404).json({ message: "User not found or not updated"})
            }
        })
        .catch((error) => {
            //Handle any errors in the process
            console.error("Error in trip creating or updating user: ", error);
            return res.status(500).json({ message: "Error creating trip or updating user"})
        })
}


const getTrips =(req,res)=>{
    db.Trips.find({ user: req.session.currentUser.id})
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