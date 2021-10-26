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


router.delete('/cars/:id', async (req, res) => {
    try {
        res.json(await Car.findByIdAndDelete(req.params.id));
    } catch (error) {
        res.status(400).json(error);
    }
});


router.put('/cars/:id', async (req, res) => {
    try {
        res.json(await Car.findByIdAndUpdate(req.params.id, req.body, { new: true }));
    } catch (error) {
        res.status(400).json(error);   
    }
});

router.post('/', async (req, res) => {
    try {
        res.json(await Car.create(req.body));
    } catch (error) {
        res.status(400).json(error);
    }
});

module.exports = router;