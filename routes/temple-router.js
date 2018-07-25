const express = require("express");
const router = express.Router();

const Temple = require('../models/temple-model');
const Booking = require('../models/booking-model')



router.get("/", (req, res, next) => {
    // August Suggestion temple
    const { id } = "5b585732f6f8181b045c84f2";

    Temple.findOne(id)
        .then((temple) => {
            if (!temple) {
                next();
                return;
            }
            res.json(temple);
        })
        .catch((err) => {
            next(err);
        });
});

// Show all temples
router.get("/temples",(req, res, next) => {
    Temple
    .find()
    .sort({ createdAt: -1 })
    .then((temples) => {
        res.json(temples);
    })
    .catch((err) => {
        next(err);
    });
})


// Show one selected temple
router.get("/temple/:id", (req, res, next) => {
    // August Suggestion temple
    const id = req.params.id;
    // res.send(id);

    Temple.findById(id)
        .then((temple) => {
            if (!temple) {
                next();
                return;
            }
            res.json(temple);
        })
        .catch((err) => {
            next(err);
        });
});


// User booking history
router.get("/history", (req, res, next) => {
    // How to check if user logged in or not??

    // Example User id
    const { id } = "5b56f64a101e4b2bc0d1fb06";

    Booking.findOne(id)
        .then((booking) => {
            if (!booking) {
                next();
                return;
            }
            res.json(booking);
        })
        .catch((err) => {
            next(err);
        });
})

// Page before confirmation page and POST to database
router.get("/needconfirm", (req, res, next) => {
    // 1. Pass in the data saved in session as an Object
    // const booking = {userId, templeId, nights, dateArrival, price};

    // 2. Show on front-end in the form

    // Dummy data here, findByid({_id: userID})
    const { userId } = "5b56f64a101e4b2bc0d1fb06";
    Booking.findOne(userId)
        .populate("templeID")                                                 // populate Temple data
        .then((booking) => {
            if (!booking) {
                next();
                return;
            }
            res.json(booking);
        })
        .catch((err) => {
            next(err);
        });

})

// POST save the booking to this user and then load Confirmation page
// call the Booking Model
router.post("/confirmed", (req, res, next) => {
    // the data from the form
    const { firstName, lastName, email, userID, templeID, nights, date, guests, cost } = req.body;

    // Create this record in the database
    Booking.create({firstName, lastName, email, userID, templeID, nights, date, guests, cost })
        .then((newRecord) => {
            // do nothing
        })
        .catch((err) => {
            next(err)
        })
})


module.exports = router;


// // My route sample
// router.get("/temples",(req, res, next) => {
//     Temple
//     .find()
//     .sort()
//     .then()
//     .catch()
// })

