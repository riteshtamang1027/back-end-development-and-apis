# Prime Number Checker
A simple Node.js module that checks whether a given number is prime or not. This project demonstrates how to create and export a reusable function using the CommonJS module system in Node.js.

## Project Overview
A prime number is a natural number greater than 1 that has exactly two factors: 1 and itself.

This module provides an isPrime() function that determines whether a given number is prime

## Features
1. Checks whether a number is prime.
2. Handles numbers less than 2.
3. Handles the special case of 2.
4. Skips even numbers greater than 2 for better performance.
5. Uses an optimized loop that checks divisors only up to the square root of the number.
6. Exports the function using CommonJS (module.exports).

##  Project Structure
``` text
prime-checker/
│
├── index.js
├── index.test.js
├── package.json
└── README.md
    

```

## Installation
Make sure you have Node.js installed on your system.

``` bash
npm install prime-checker

```
## Usage
Import the isPrime() function using require().

``` js
const checkPrime_number = require("./index.js");
console.log(checkPrime_number.isPrime(7)); // true
console.log(checkPrimeNumber.isPrime(9));  // false
console.log(checkPrimeNumber.isPrime(2));  // true
console.log(checkPrimeNumber.isPrime(1));  // false

```

## How It Works
The isPrime() function follows these steps:

1. If the number is less than 2, it returns false.
2. If the number is exactly 2, it returns true.
3. If the number is even, it returns false.
4. It checks odd divisors starting from 3.
5. The loop continues only while i <= num / i, avoiding unnecessary iterations.
6. If any divisor divides the number evenly, it returns false.
7. If no divisor is found, it returns true.

## Testing
This project uses Node.js's built-in assert module for testing.

Run the tests using:
```bahs
npm test
```
Example

```js
const assert = require("node:assert/strict");

const checkPrimeNumber = require("./index.js");

assert.strictEqual(checkPrimeNumber.isPrime(9), false);

console.log("Test successful.");
```
## License
license: MIT


