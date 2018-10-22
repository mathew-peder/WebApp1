let schedule = require('../models/models/schedule');
let express = require('express');
let router = express.Router();

router.findAll = (req, res) => {
    // Return a JSON representation of our list
    res.json(schedule);
}

module.exports = router
