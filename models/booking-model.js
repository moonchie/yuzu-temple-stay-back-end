const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// import Temple model
const Temple = require('../models/temple-model');

const bookingSchema = new Schema({
    // from User model
    userID: { type: String },
    // from Temple model, will populate Name and picture
    templeID: {
        type: Schema.Types.ObjectId,
        ref: "Temple",
        required: true
     },
    // from booking form
    nights: { type: Number },
    date: { type: Date },
    guests: { type: Number },
    cost: { type: Number}
})


const Booking = mongoose.model("Booking", bookingSchema);

module.exports = Booking;