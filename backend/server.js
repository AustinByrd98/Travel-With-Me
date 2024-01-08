require("dotenv").config()
//PORT var
const {PORT} = process.env
//requirements 
const express = require("express")
const app = express()
const cors = require("cors")
const session = require("express-session")
const MongoStore = require("connect-mongo")
const dataBase = require("./models/index")
const routes = require("./routes/index.js")
const corsOptions = {
    origin: "http://localhost:3000",
    credentials: true,
}
//middlewear
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors(corsOptions))
app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
        mongoUrl: process.env.MONGOULR,
        collectionName: "sessions"
    }),
    cookie: {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 1000 * 60 * 60 * 24
    }
}))

app.use('/', routes)
app.use((req,res)=>{res.status(404).json({message:"This is not a proper route"})})

// app.get('/', (req,res)=>{
//     res.send('hello world ')
// })

//listen function

app.listen(PORT,()=>{console.log("listening on port "+ PORT)})


