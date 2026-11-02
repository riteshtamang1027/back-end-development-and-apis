const assert = require("node:assert/strict");

const checkPrime_number = require("./index");

assert.strictEqual(checkPrime_number.isPrime(6),false);

console.log("Test success.")
