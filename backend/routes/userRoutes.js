const express = require("express");
const router = express.Router();
const createUser = require("../controllers/usersCtrl.js");

//user routes
router.post('/', createUser)

module.exports = router