const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// import Temple model
const Temple = require('../models/temple-model');

const bookingSchema = new Schema({
    // from User model
    firstName: { type: String, required: true},
    lastName: { type: String, required: true},
    email: { type: String},
    userID: { type: String },
    // from Temple model, will populate Name and picture
    templeID: {
        type: Schema.Types.ObjectId,
        ref: "Temple",
        required: true
     },
    // from booking form
    nights: { type: String },
    date: { type: String },
    guests: { type: String },
    cost: { type: Number}
})


const Booking = mongoose.model("Booking", bookingSchema);

module.exports = Booking;