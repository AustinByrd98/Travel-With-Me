const router = require('express').Router()
const {tripsCtrl} = require('../controllers')
const isAuthenticated = require("../authentication/authentication")

//routes

router.get('/', isAuthenticated, tripsCtrl.getTrips)
router.post('/', isAuthenticated, tripsCtrl.createTrip)
router.put('/:id',isAuthenticated, tripsCtrl.updateTrips)
router.delete('/:id', isAuthenticated, tripsCtrl.deleteTrip)


//console.log(db.Trips)
module.exports=router