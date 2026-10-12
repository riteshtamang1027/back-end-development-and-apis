const fs = require("fs");
const { exit } = require("process");
const { buffer } = require("stream/consumers");

fs.writeFileSync("assets/output.txt","Hello, I am Ritesh Tamang.");

fs.appendFileSync("assets/output.txt"," And I am the best Software Engineering.");


// check the file is exist or not

const exist = fs.existsSync("assets/output.txt");
console.log(exist);



// check the buffer value 


const buff = Buffer.from("Ritesh is the best Software Engineer");

console.log(buff);