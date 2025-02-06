# Number Classification API

This is a simple API that accepts a number as a query parameter and returns interesting mathematical properties about the number, along with a fun fact. It classifies numbers based on whether they are Armstrong numbers or odd/even. The API also provides the sum of digits and a fun fact retrieved from the Numbers API.

## Features

- Classifies the number as Armstrong, prime, perfect, odd, or even.
- Calculates the sum of digits of the number.
- Fetches a fun fact about the number from the Numbers API.
- Returns a JSON response with the classification and fun fact.
- Handles invalid inputs and returns a proper error message.

## API Specification

### Endpoint

**GET** `/api/classify-number?number=<number>`

### Query Parameters

- `number`: The number you want to classify (required).

### Responses

#### Successful Response (200 OK)

For valid inputs, the response contains the classification data of the number:

```json
{
  "number": 371,
  "is_prime": false,
  "is_perfect": false,
  "properties": ["armstrong", "odd"],
  "digit_sum": 11,
  "fun_fact": "371 is an Armstrong number because 3^3 + 7^3 + 1^3 = 371"
}

#### Error Response (400 BadRequest)

  ```json
  {
    "number": "alphabet",
    "error": true
  }
