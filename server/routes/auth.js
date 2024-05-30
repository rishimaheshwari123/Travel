const express = require("express");
const { registerCtrl, loginCtrl } = require("../controllers/authCtrl");

const router = express.Router();


router.post("/register", registerCtrl)
router.post("/login", loginCtrl)

module.exports = router;