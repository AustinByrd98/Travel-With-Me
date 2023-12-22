const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    username: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    trips: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Trips"
    }]
})

const Users = mongoose.model("Users", UserSchema);

module.exports = Users;