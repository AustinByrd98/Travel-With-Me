const router = require('express').Router()
const tripsCrlt = require('../controllers')

//routes

//router.get()
//temp testing was having trouble passing the right function to the router.post. Will fix later 
router.post('/', (req,res)=>{
    db.Trips.create(req.body)
    .then((createdTrip)=>{
        if(!createdTrip){
            res.status(400).json({message:"can not make trip"})
        } else {
            res.status(201).json({message:'trip made'})
        }
    })
})

module.exports=router