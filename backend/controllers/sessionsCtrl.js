const bcrypt = require("bcrypt");
const db = require("../models");
const express = require("express");


//existing user logs in
const session = (req, res) => {
    //Find the username in the db
    db.Users.findOne({ username: req.body.username }).then((foundUser) => {
      if (!foundUser) {
        res.status(400).json({ message: "cannot find trips" });
      } else {
        //If user is found
        if (bcrypt.compareSync(req.body.password, foundUser.password)) {
          req.session.currentUser = {
            id: foundUser._id,
            username: foundUser.username,
          };
          res.status(200).json({
            message: "Login successful",
            user: { id: foundUser._id, username: foundUser.username },
          });
        } else {
          res.status(400).json({ message: "passwords do not match" });
        }
      }
    });
}

module.exports = session;