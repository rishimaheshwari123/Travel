const express = require("express");
const { createCab, getAllCab, deleteCab } = require("../controllers/cab");
const router = express.Router();


router.post("/create", createCab);
router.get("/get", getAllCab);
router.delete("/delete/:id", deleteCab);



module.exports = router;