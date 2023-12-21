
const mongoose = require('mongoose')
const {MONGOURL} =process.env
const dbName = "Travel_App"

mongoose.connect(MONGOURL + dbName,{
    useUnifiedTopology: true,
    useNewurlParser: true
})

mongoose.connection
.on('open',()=>{console.log('Connected')})
.on('close',()=>{console.log('disconected')})
.on('error',(error)=>{console.log(error)})

module.exports={
    Trips: require('./Trips'),
    Users: require('./Users')
}