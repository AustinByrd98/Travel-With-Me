const mongoose = require("mongoose");

const PlansSchema = new mongoose.Schema ({
    tripName:{type:String, required: false},
    // want to try using Date type here 
    date: {type:String, required:false },
    peopleNumber:Number,
    budget:Number,
    foodPlan: String,
    foodPricing: Number,
    lodging: String,
    lodgingPrice:Number,
    tripLocation:{type:String, required:false} , 
    vists:String,
    travelMeans: String,
    travelMeansPrice: String,
    user : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users"
    }
})

const Trips = mongoose.model("Trips", PlansSchema)
 
module.exports = Trips