const fs = require("fs");
const { exit } = require("process");

fs.writeFileSync("assets/output.txt","Hello, I am Ritesh Tamang.");

fs.appendFileSync("assets/output.txt"," And I am the best Software Engineering.");


// check the file is exist or not

const exist = fs.existsSync("assets/output.txt");
console.log(exist);