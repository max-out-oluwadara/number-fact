// src/helpers/numberHelper.js
const NumberClassificationHelper = {
    // Check if a number is an Armstrong number
    isArmstrongNumber: (number) => {
      const digits = number.toString().split('');
      const sum = digits.reduce(
        (acc, digit) => acc + Math.pow(Number(digit), digits.length),
        0
      );
      return sum === number;
    },
  
    // Check if a number is odd
    isOdd: (number) => number % 2 !== 0,
  
    // Check if a number is even
    isEven: (number) => number % 2 === 0,
  
    // Calculate the sum of the digits (Ensure it returns 0 for negative numbers)
    calculateDigitSum: (number) => {
      if (number < 0) return 0; // Fix for negative input
      return number
        .toString()
        .split('')
        .reduce((acc, digit) => acc + parseInt(digit), 0);
    },
  
    // Check if a number is prime
    isPrime: (number) => {
      if (number <= 1) return false;
      for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) return false;
      }
      return true;
    },
  
    // Check if a number is perfect (Ensure 0 is not classified as perfect)
    isPerfect: (number) => {
      if (number <= 0) return false; // Fix for 0
      let sum = 0;
      for (let i = 1; i < number; i++) {
        if (number % i === 0) sum += i;
      }
      return sum === number;
    },
  };
  
  module.exports = NumberClassificationHelper;
