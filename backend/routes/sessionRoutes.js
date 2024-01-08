const express = require("express");
const router = express.Router();
const {sessionsCtrl}  = require("../controllers")

//session routes
router.post('/', sessionsCtrl.session);
router.post('/logout', sessionsCtrl.deleteSession)

module.exports = router