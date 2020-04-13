const mongoose = require("mongoose");

const KeySchema = mongoose.Schema({
    _id: {
        type: Number,
        required: true
    },
    key: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("Key", KeySchema);