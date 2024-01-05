const mongoose = require("mongoose");

const PlansSchema = new mongoose.Schema ({
    tripName:{type:String, required: true},
    // want to try using Date type here 
    date: {type:String, required:true },
    peopleNumber:Number,
    budget:Number,
    foodPlan: String,
    foodPricing: Number,
    lodging: String,
    lodgingPrice:Number,
    tripLocation:{type:String, required:true} , 
    vists:String,
    travelMeans: String,
    travelMeansPrice: String,
    user : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users",
        required: true
    }
})

const Trips = mongoose.model("Trips", PlansSchema)
 
module.exports = Trips