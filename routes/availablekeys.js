const express = require("express");
const router = express.Router();
const Key = require("../models/Key");


router.get("/", async (req, res) => {
    try {
        let keys = await Key.find();
        res.json(keys);
    } catch (error) {
        res.json({message: error});
    }
});

/*
router.post("/", async (req, res) => {
    const key = new Key({
        _id: req.body._id,
        key: req.body.key
    });

    try {
        const savedKey = await key.save();
        res.json(savedKey);
    } catch (error) {
        res.json({message: err});
    }
});
*/

router.get("/:keyId", async (req, res) => {
    try {
        let key = await Key.findById(req.params.keyId);
        res.json(key);
    } catch (error) {
        res.json({message: error});
    }

});

/*
router.delete("/:keyId", async (req, res) => {
    try {
        const deletedKey = await Key.remove({_id: req.params.keyId});
        res.json(deletedKey);
    } catch (error) {
        res.json({message: error});
    }
});
*/

/*
router.patch("/:keyId", async (req, res) => {
    try {
        const updatedKey = await Key.updateOne(
            {_id: req.params.keyId},
            {$set: {key: req.body.key}
        });
        res.json(updatedKey);
    } catch (error) {
        res.json({message: error});
    } 
});
*/

module.exports = router;