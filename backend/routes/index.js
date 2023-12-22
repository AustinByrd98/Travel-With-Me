const router = require('express').Router()
const tripRoutes = require('./tripRoutes.js')

router.use('/trips', tripRoutes)

module.exports= router