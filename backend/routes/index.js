const router = require('express').Router()
const tripRoutes = require('./tripRoutes.js')
const userRoutes = require('./userRoutes.js')
const sessionRoutes = require('./sessionRoutes.js')

router.use('/trips', tripRoutes)
router.use('/newuser', userRoutes)
router.use('/session', sessionRoutes)

module.exports= router