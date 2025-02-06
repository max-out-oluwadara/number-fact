// src/services/numberClassificationService.js
const NumberClassificationHelper = require('../helpers/numberHelper');
const FunFactApi = require('../api/funFactApi');

const NumberClassificationService = {
  // Validate input: returns parsed number or an error object
  validateInput: (number) => {
    const parsedNumber = parseInt(number, 10);
    if (isNaN(parsedNumber)) {
      return {
        number: 'alphabet', // Return "alphabet" as the value
        error: true, // Indicate the error
      };
    }
    return parsedNumber;
  },

  // Get classification data like Armstrong, Prime, Odd/Even, etc.
  getClassificationData: (parsedNumber) => {
    const isArmstrong = NumberClassificationHelper.isArmstrongNumber(parsedNumber);
    const isOdd = NumberClassificationHelper.isOdd(parsedNumber);
    const isEven = NumberClassificationHelper.isEven(parsedNumber);
    const digitSum = NumberClassificationHelper.calculateDigitSum(parsedNumber);
    const isPrime = NumberClassificationHelper.isPrime(parsedNumber);
    const isPerfect = NumberClassificationHelper.isPerfect(parsedNumber);

    // Prepare the properties array
    const properties = [];
    if (isArmstrong) properties.push('armstrong');
    if (isOdd) properties.push('odd');
    if (isEven) properties.push('even');

    return { isPrime, isPerfect, properties, digitSum };
  },

  // Create the final response with fun fact
  createResponse: async (parsedNumber, classificationData) => {
    try {
      const funFact = await FunFactApi.getFunFact(parsedNumber);
      return {
        number: parsedNumber,
        is_prime: classificationData.isPrime,
        is_perfect: classificationData.isPerfect,
        properties: classificationData.properties,
        digit_sum: classificationData.digitSum, // Ensure digit sum is always numeric
        fun_fact: funFact,
      };
    } catch (error) {
      console.error('Error fetching fun fact:', error);
      return {
        number: parsedNumber,
        is_prime: classificationData.isPrime,
        is_perfect: classificationData.isPerfect,
        properties: classificationData.properties,
        digit_sum: classificationData.digitSum, // Ensure digit sum is always numeric
        fun_fact: "Fun fact unavailable",
      };
    }
  }
};

module.exports = NumberClassificationService;
