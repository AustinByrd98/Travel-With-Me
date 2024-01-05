const express = require("express");
const router = express.Router();
const {usersCtrl} = require("../controllers");

//user routes
router.post('/', usersCtrl.createUser)
