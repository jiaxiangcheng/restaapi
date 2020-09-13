const express = require("express");
const router = express.Router();
const License = require("../models/License");

router.get("/", async (req, res) => {
    try {
        let licenses = await License.find();
        res.json(licenses);
    } catch (error) {
        res.json({message: error});
    }
});

router.get("/total", async (req, res) => {
    try {
        let total = await License.countDocuments();
        res.json({"total": total});
    } catch (error) {
        res.json({message: error});
    }
});

router.get("/check", async (req, res) => {
    try {
        var userId = req.body.userId;
        var machineId = req.body.machineId;
        var count = 0;
        if (!req.body.hasOwnProperty("key")) {
            count = await License.countDocuments({"userId": userId, "machineId": machineId});
        } else {
            var key = req.body.key;
            count = await License.countDocuments({"key": key});
        }
        if (count > 0) {
            res.json({"data": true})
        } else {
            res.json({"data": false});
        }
    } catch (error) {
        res.json({message: error});
    }
});

router.post("/", async (req, res) => {
    let license = new License({
        _id: req.body._id,
        userId: req.body.userId,
        machineId: req.body.machineId,
        key: req.body.key
    });

    try {
        let savedLicense = await license.save();
        res.json(savedLicense);
    } catch (error) {
        res.json({message: err});
    }
});

router.get("/:licenseId", async (req, res) => {
    try {
        let license = await License.findById(req.params.licenseId);
        res.json(license);
    } catch (error) {
        res.json({message: error});
    }

});

router.delete("/:licenseId", async (req, res) => {
    try {
        let deletedLicense = await License.remove({_id: req.params.licenseId});
        res.json(deletedLicense);
    } catch (error) {
        res.json({message: error});
    }
});

router.patch("/:licenseId", async (req, res) => {
    try {
        let updatedLicense = await License.updateOne(
            {_id: req.params.licenseId},
            {$set: {key: req.body.key}
        });
        res.json(updatedLicense);
    } catch (error) {
        res.json({message: error});
    } 
});



module.exports = router;