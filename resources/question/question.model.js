const mongoose = require("mongoose");

const schemaUser = new mongoose.Schema({
    question: {
        type: String,
        required: true
    },
    response1: {
        type: String,
        required: true
    },
    response2: {
        type: String,
        required: true
    },
    rightAnswer: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model("Question", schemaUser);