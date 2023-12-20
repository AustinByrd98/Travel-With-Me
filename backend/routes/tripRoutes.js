const router = require('express').Router()
const tripsCrlt = require('../controllers/tripsCtrl')
const db = require('../models')

//routes

//router.get()
//temp testing was having trouble passing the right function to the router.post. Will fix later 
router.post('/', tripsCrlt.createTrip)


console.log(db.Trips)
module.exports=router