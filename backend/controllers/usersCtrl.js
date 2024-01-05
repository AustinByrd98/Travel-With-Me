const bcrypt = require("bcrypt");
const express = require("express");
const db = require("../models")


//create user
const createUser = (req, res) => {
    req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10));
    db.Users.create(req.body).then((createdUser) => {
        if(!createdUser) {
            res.status(400).json({message: "Cannot create new user"})
        } else {
            res.status(200).json({
                message: "User added successfully",
            })
        }
    })
}

module.exports = createUser