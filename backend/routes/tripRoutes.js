const router = require('express').Router()
const  { tripsCtrl } = require('../controllers')
const db = require('../models')

//routes

//router.get()
//temp testing was having trouble passing the right function to the router.post. Will fix later 
router.post('/', tripsCtrl.createTrip)
router.get('/', tripsCtrl.getTrips)


// console.log(db.Trips)
module.exports=router