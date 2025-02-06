// src/controllers/numberClassificationController.js
const NumberClassificationService = require('../services/numberClassificationService');

const classifyNumber = async (req, res, next) => {
  try {
    const { number } = req.query;

    // Validate input
    const parsedNumber = NumberClassificationService.validateInput(number);
    if (parsedNumber.error) {
      return res.status(400).json(parsedNumber);
    }

    // Get classification details
    const classificationData = NumberClassificationService.getClassificationData(parsedNumber);

    // Create the final response
    const response = await NumberClassificationService.createResponse(parsedNumber, classificationData);

    res.json(response);
  } catch (error) {
    console.error('Error classifying number:', error);
    next(error); // Pass the error to the global error handler
  }
};

module.exports = { classifyNumber };
