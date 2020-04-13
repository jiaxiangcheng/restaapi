const express = require("express");
const router = express.Router();
const License = require("../models/License");

// GET: Get all posts
router.get("/", async (req, res) => {
    try {
        const licenses = await License.find();
        res.json(licenses);
    } catch (error) {
        res.json({message: error});
    }
});

// POST: Submit a post
router.post("/", async (req, res) => {
    const license = new License({
        _id: req.body._id,
        userId: req.body.userId,
        machineId: req.body.machineId,
        key: req.body.key
    });

    try {
        const savedLicense = await license.save();
        res.json(savedLicense);
    } catch (error) {
        res.json({message: err});
    }
});


// GET: Get specific post
router.get("/:licenseId", async (req, res) => {
    try {
        const license = await License.findById(req.params.licenseId);
        res.json(license);
    } catch (error) {
        res.json({message: error});
    }

});

// DELETE: Delete specific post
router.delete("/:licenseId", async (req, res) => {
    try {
        const deletedLicense = await License.remove({_id: req.params.licenseId});
        res.json(deletedLicense);
    } catch (error) {
        res.json({message: error});
    }
});

// PATCH: Update the post
router.patch("/:licenseId", async (req, res) => {
    try {
        const updatedLicense = await License.updateOne(
            {_id: req.params.licenseId},
            {$set: {key: req.body.key}
        });
        res.json(updatedLicense);
    } catch (error) {
        res.json({message: error});
    } 
});



module.exports = router;