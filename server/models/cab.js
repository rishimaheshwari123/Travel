const mongoose = require("mongoose");

const cabSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },

    desc: {
        type: String,
        required: true
    },
    vName: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    }

})

module.exports = mongoose.model("cab", cabSchema);