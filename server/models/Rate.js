const mongoose = require("mongoose");

const rateSchema = new mongoose.Schema({
    car: {
        type: String,
        required: true
    },

    seat: {
        type: String,
        required: true
    },
    rate: {
        type: String,
        required: true
    },
})

module.exports = mongoose.model("Rate", rateSchema);