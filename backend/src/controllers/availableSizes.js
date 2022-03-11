const { Router } = require("express");
const axios = require("axios");
const { Product, AvailableSizes } = require("../db");

const router = Router();



router.get("/", async (req, res, next) => {
    try {
        let shoeSize = await AvailableSizes.findAll();
        if (!shoeSize.length) {
            return res.status(404).json("Error, recall");
        } else {
            return res.json(shoeSize);
        }
    } catch (error) {
        next(error);
    }
});

module.exports = router;