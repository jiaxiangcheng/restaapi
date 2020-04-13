const mongoose = require("mongoose");

const LicenseSchema = mongoose.Schema({
    _id: {
        type: Number,
        required: true
    },
    userId: {
        type: String,
        required: true
    },
    machineId: {
        type: String,
        required: true
    },
    key: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("License", LicenseSchema);