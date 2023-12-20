const { error } = require('console')
const mongoose = require('mongoose')
const {MONGOULR} = process.env

mongoose.connect(MONGOULR,{
    useUnifiedTopology: true,
    useNewurlParser: true
})

mongoose.connection
.on('open',()=>{console.log('Connected')})
.on('close',()=>{console.log('disconected')})
.on('error',()=>{console.log(error)})

module.exports={
    Trips: require('./Trips')
}