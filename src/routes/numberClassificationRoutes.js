// src/routes/numberClassificationRoutes.js
const express = require('express');
const router = express.Router();
const NumberClassificationController = require('../controllers/numberClassificationController');

router.get('/classify-number', NumberClassificationController.classifyNumber);

module.exports = router;
