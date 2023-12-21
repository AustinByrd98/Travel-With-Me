const router = require('express').Router()
const {tripsCtrl} = require('../controllers')
//const db = require('../models')

//routes

router.get('/', tripsCtrl.getTrips)
router.post('/', tripsCtrl.createTrip)


//console.log(db.Trips)
module.exports=router