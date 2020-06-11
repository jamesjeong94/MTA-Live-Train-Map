const express = require('express');
const stopsController = require('../controllers/stopsController.js');

const router = express.Router();

router.get('/stops', stopsController.getTrainStops);

module.exports = router;
