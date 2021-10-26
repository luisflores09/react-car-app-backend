const express = require('express');
const Car = require('../models/Car');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        res.json(await Car.find({}));
    } catch (error) {
        res.status(400).json(error);
    }
});

module.exports = router;