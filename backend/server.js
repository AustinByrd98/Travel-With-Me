require("dotenv").config()
//PORT var
const {PORT} = process.env
//requirements 
const express = require("express")
const app = express()
const cors = require("cors")
const dataBase = require("./models/index")
const routes = require("./routes/index.js")
//middlewear
app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use('/', routes)
app.use((req,res)=>{res.status(404).json({message:"This is not a proper route"})})

// app.get('/', (req,res)=>{
//     res.send('hello world ')
// })

//listen function

app.listen(PORT,()=>{console.log("listening on port "+ PORT)})


