const express = require("express");
const router = express.Router();

const Temple = require('../models/temple-model');



router.get("/", (req, res, next) => {
    // August Suggestion temple
    const { id } = "5b50afaff3749200c0583fba";

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

    Temple.findById(id)                  // HERE CANNOT USE FINDBYID?
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

module.exports = router;


// // My route sample
// router.get("/temples",(req, res, next) => {
//     Temple
//     .find()
//     .sort()
//     .then()
//     .catch()
// })

