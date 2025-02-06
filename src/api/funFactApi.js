// src/api/funFactApi.js
const axios = require('axios');

const FunFactApi = {
  async getFunFact(number) {
    try {
      const response = await axios.get(`http://numbersapi.com/${number}?json`);
      return response.data.text || `No fun fact available for ${number}`;
    } catch (error) {
      console.error('Error fetching fun fact:', error.message);
      return "Fun fact unavailable";
    }
  },
};

module.exports = FunFactApi;
