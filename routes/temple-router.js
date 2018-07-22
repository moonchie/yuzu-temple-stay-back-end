const express = require("express");
const router = express.Router();

const Temple = require('../models/temple-model');



router.get("/",(req, res, next) => {
    Temple.findById("5b50afaff3749200c0583fba")
    .then((temple) => {
        res.json(temples);
    })
    .catch((err) => {next(err)})
})

router.get("/temples",(req, res, next) => {
    Temple.find()
    //.sort()
    .then(temples => {
        if(err) {
          res.json(err);
          return;
        }
        res.send(temples);
    })
    .catch(err => next(err))
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

