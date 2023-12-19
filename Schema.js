const { default: mongoose } = require("mongoose");

const Plans = new mongoose.Schema {
    tripName:String
    peopleNumber:Number,
    budget:Number,
    foodPlan: string,
    foodPricing: Number
    lodging: string,
    lodgingPrice:Number
    tripLocation: string, 
    vists:string,
    travelMeans: string,
    travelMeansPrice:string
}