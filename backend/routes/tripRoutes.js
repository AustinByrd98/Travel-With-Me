const router = require('express').Router()
const {tripsCtrl} = require('../controllers')


//routes

router.get('/', tripsCtrl.getTrips)
router.post('/', tripsCtrl.createTrip)
router.put('/:id', tripsCtrl.updateTrips)
router.delete('/:id', tripsCtrl.deleteTrip)


//console.log(db.Trips)
module.exports=router