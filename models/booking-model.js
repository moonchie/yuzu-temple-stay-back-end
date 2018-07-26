const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const bookingSchema = new Schema({
    userId: { type: String },
    templeName: String,
    templePicture: String,
    nights: { type: String },
    date: { type: String },
    guests: { type: String },
    totalCost: { type: Number}
})


const Booking = mongoose.model("Booking", bookingSchema);

module.exports = Booking;