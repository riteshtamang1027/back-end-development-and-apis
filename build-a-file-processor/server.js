// Starter file — add your code here


const http = require("http");


const fs = require("fs");
const { encode } = require("punycode");

// const data = fs.readFileSync("assets/poem.txt");

// console.log(data);


// const data1 = fs.readFileSync("assets/poem.txt", {encoding:"utf8"});


// console.log(data1);

// using asynchronously 

fs.readFile("assets/poem.txt", { encoding: "utf8" }, (err, data) => {
  console.log(data);
});


