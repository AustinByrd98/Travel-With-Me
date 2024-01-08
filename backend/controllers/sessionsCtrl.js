const bcrypt = require("bcrypt");
const Users = require("../models/Users");
const express = require("express");

//existing user logs in
const session = (req, res) => {
  //find the username in the db
  console.log(`Before setting session: `, req.session);
  Users.findOne({ username: req.body.username }).then((foundUser) => {
    if (!foundUser) {
      res.status(400).json({ message: "cannot find username" });
    } else {
      //If user is found
      if (bcrypt.compareSync(req.body.password, foundUser.password)) {
        //Check if a session already exists and matches the current user
        if (
          req.session.currentUser &&
          req.session.currentUser._id === foundUser._id
        ) {
          //The session exists ofr the current user and the currentSession-Id matches foundUser_Id, so continue the session
          res.status(200).json({
            message: "Login Successful",
            user: { id: foundUser._id, username: foundUser.username },
          });
        } else {
          //No current session or that current session._Id did not match foundUser._Id
          //Regenerate session when new use logs in
          req.session.regenerate((err) => {
            if (err) {
              res.status(500).json({ message: "Error regenerating session" });
            } else {
              //Set new session info
              req.session.currentUser = {
                id: foundUser._id,
                username: foundUser.username,
              };
              res.status(200).json({
                message: "login Successful",
                user: { id: foundUser._id, username: foundUser.username },
              });
            }
          });
        }
      } else {
        res.status(400).json({ message: "passwords do not match " });
      }
    }
  });
};

const deleteSession = (req, res) => {
  req.session.destroy((err) => {
    //Handle error
    if (err) {
      res.status(400).json({ message: "Error destroying the session" });
    } else {
      //Clear the session cookie from the client's browser
      res.clearCookie('connect.sid');
      //Successfully destroyed the session
      res.status(200).json({ message: "Session ended successfully" });
    }
  });
};

module.exports = {
  session,
  deleteSession,
};
