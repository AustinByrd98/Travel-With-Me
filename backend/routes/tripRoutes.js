const router = require('express').Router()
const {tripsCtrl} = require('../controllers')
//const db = require('../models')

//routes

router.get('/', tripsCtrl.getTrips)
router.post('/new', tripsCtrl.createTrip)
router.put('/:id',tripsCtrl.updateTrips)
router.delete('/:id', tripsCtrl.deleteTrip)


//console.log(db.Trips)
module.exports=router