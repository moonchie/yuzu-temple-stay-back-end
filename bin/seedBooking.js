// Seed booking to show on frontend

const Booking = require("../models/booking-model");
const mongoose = require("mongoose");


mongoose.Promise = Promise;
mongoose
    .connect('mongodb://localhost/yuzu-back-end', {useMongoClient: true})
    .then(() => {
    console.log('Connected to Mongo of Yuzu-back-end!')
    }).catch(err => {
    console.error('Error connecting to mongo', err)
});


const bookingData = [
    {
        firstName: "Peachy",
        lastName: "Green",
        email: "peachy@green.com",
        userID: "5b56f64a101e4b2bc0d1fb06",
        templeID:"5b585732f6f8181b045c84f0",
        nights: "2",
        date: "December 17, 2018",
        guests: "2",
        cost: 180
    }
]

bookingData.forEach((oneBooking) => {
    Booking.create(oneBooking)
      .then((oneBooking) => {
        console.log(`Created record for client ${oneBooking.nameENG}`)
      })
      .catch((err) => {
        console.log("oneBooking data creation failure", err);
      })
  })