const express = require("express")
const bcrypt = require("bcrypt");

// import User model
const User = require("../models/user-model.js");

const router = express.Router();

// -------  ROUTES ---------
// Sign up
router.post("/register", (req, res, next) => {
    const { firstName, lastName, email, originalPassword } = req.body;

    // check if password is empty
    if (originalPassword == "" || originalPassword.match(/[0-9]/) === null) {
        const err = new Error("Please enter a valid password. It cannot be empty and it has to contain a number.");
        next(err);
        return;
    }

    // Usee bcrypt to crypt the password that user has entered
    const encryptedPassword = bcrypt.hashSync(originalPassword, 10);

    // Create this record in the database
    User.create({firstName, lastName, email, encryptedPassword })
        .then((newUser) => {
            // log the user in directly and show him/her info
            req.logIn(newUser, () => {
                newUser.encryptedPassword = undefined;
                res.json({ userDoc: newUser });
            });
        })
        .catch((err) => {
            next(err)
        })
})

//Log in
router.post("/authentication", (req, res, next) => {
    const { email, loginPassword } = req.body;

  // Check if this email exists or not
    User.findOne({ email })
        .then((userDoc) => {
        if (!userDoc) {
        // A customized error message
        const err = new Error("This email address was not registered with Yuzu before");
        next(err);
        return;
      }

      // Check if the password is correct
      const { encryptedPassword } = userDoc;
      if (!bcrypt.compareSync(loginPassword, encryptedPassword)) {
        const err = new Error("Wrong password");
        next(err);
        return;
      }

      // Log the userIn and passin his/her json data
      req.logIn(userDoc, () => {
        userDoc.encryptedPassword = undefined;
        res.json({ userDoc });
      });
    })
    .catch((err) => {
      next(err);
    });
});

// Log out
router.delete("/logout", (req, res, next) => {
    req.logOut();
    res.json({ userDoc: null });
});

// check Log in
router.get("/checklogin", (req, res, next) => {
  if (req.user) {
    // hide encryptedPassword before sending the JSON (it's a security risk)
    req.user.encryptedPassword = undefined;
  }
  res.json({ userDoc: req.user });
});




module.exports = router;