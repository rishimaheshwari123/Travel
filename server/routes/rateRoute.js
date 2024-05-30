const express = require("express");
const { createRate, getRate, deleteRate } = require("../controllers/RateCtrl");

const router = express.Router();


router.post("/rate", createRate)
router.get("/get-rate", getRate)
router.delete("/delete-rate/:id", deleteRate)

module.exports = router;