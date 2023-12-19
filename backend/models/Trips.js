const { default: mongoose } = require("mongoose");

const PlansSchema = new mongoose.Schema ({
    tripName: String,
    peopleNumber:Number,
    budget:Number,
    foodPlan: String,
    foodPricing: Number,
    lodging: String,
    lodgingPrice:Number,
    tripLocation: String, 
    vists:String,
    travelMeans: String,
    travelMeansPrice: String
})

const Trips = mongoose.model("Trips", PlansSchema)
 
module.exports = Trips