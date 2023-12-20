const router = require('express').Router()
const tripRoutes = require('./tripRoutes')

router.use('/trips', tripRoutes)

module.exports= router